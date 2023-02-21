<template>
  <n-layout-sider
    :native-scrollbar="false"
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="collapsed"
    show-trigger
    @collapse="switchCollapsed(true)"
    @expand="switchCollapsed(false)"
  >
  <!-- {{ t('nav.console') }} -->
    <n-menu
      v-model:value="activeKey"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      @update:value="clickMenu"
    />
  </n-layout-sider>
</template>

<script lang="ts">
import { defineComponent, h, Component } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  DesktopOutline,
  FolderOpenOutline,
  ReaderOutline,
  PeopleOutline,
  GlobeOutline,
} from '@vicons/ionicons5'
import {useI18n} from 'vue-i18n'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export default defineComponent({
  emits: ['clickMenu','getCollapsed'],
  setup(props,{ emit }) {
    const {t} = useI18n()
    const collapsed = ref(false)

    const menuOptions: MenuOption[] = [
  {
    label:() => t('nav.console'),
    key: 'console',
    icon: renderIcon(DesktopOutline),
  },
  {
    label: () => t('nav.user'),
    key: 'user-management',
    icon: renderIcon(PeopleOutline),
    children: [
      {
        label: () => t('nav.userInfo'),
        key: 'userInfo',
      },
      {
        label: () => t('nav.roleInfo'),
        key: 'roleInfo',
      },
      {
        label: () => t('nav.menuInfo'),
        key: 'menuInfo',
      },
      {
        label: () => t('nav.userRole'),
        key: 'userRoleInfo',
      },
      {
        label: () => t('nav.roleMenu'),
        key: 'roleMenuInfo',
      },
    ],
  },
  {
    label:  () => t('nav.blog'),
    key: 'blog-management',
    icon: renderIcon(ReaderOutline),
    children: [
      {
        label:  () => t('nav.blogList'),
        key: 'blogList',
      },
      {
        label: () => t('nav.blogType'),
        key: 'blogType',
      },
      {
        label: () => t('nav.blogComment'),
        key: 'blogComment',
      },
      {
        label: () => t('nav.blogCollect'),
        key: 'blogCollect',
      },
      {
        label: () => t('nav.blogGetLike'),
        key: 'blogGetLike',
      },
    ],
  },
  {
    label: () => t('nav.website'),
    key: 'website-management',
    icon: renderIcon(GlobeOutline),
    children: [
      {
        label: () => t('nav.websiteList'),
        key: 'websiteList',
      },
      {
        label: () => t('nav.websiteType'),
        key: 'websiteType',
      },
    ],
  },
  {
    label: () => t('nav.resource'),
    key: 'resource-management',
    icon: renderIcon(FolderOpenOutline),
    children: [
      {
        label: () => t('nav.fileInfo'),
        key: 'fileInfo',
      },
      {
        label: () => t('nav.fileType'),
        key: 'fileType',
      },
    ],
  },
]

    function switchCollapsed (bool:boolean) {
      collapsed.value = bool
      if (bool) {
        emit('getCollapsed',64)
      }else{
        emit('getCollapsed',240)
      }
    }

    function clickMenu(key: string) {
      // console.log(key)
      if (key) {
        emit('clickMenu', key)
      }
    }
    onMounted(()=>{
      emit('clickMenu','console')
    })
    return {
      activeKey: ref<string | null>('console'),
      collapsed,
      menuOptions,
      // defaultExpandedKeys: ['desktop', 'braise'],
      clickMenu,
      switchCollapsed,
      t
    }
  },
})
</script>
