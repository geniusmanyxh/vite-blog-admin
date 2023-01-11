<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="collapsed"
    show-trigger
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <n-menu
      v-model:value="activeKey"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
    />
  </n-layout-sider>
</template>

<script lang="ts">
import { defineComponent, h, Component } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  FishOutline as FishIcon,
  PawOutline as PawIcon,
  BagOutline as BagOutlineIcon,
  // BookmarkOutline,
  // CaretDownOutline,
} from '@vicons/ionicons5'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: '鱼',
    key: 'fish',
    icon: renderIcon(FishIcon),
    children: [
      {
        label: '红烧',
        key: 'braise',
        children: [
          {
            label: '加辣',
            key: 'spicy',
          },
        ],
      },
      {
        label: '清蒸',
        key: 'steamed',
        children: [
          {
            label: '不要葱',
            key: 'no-green-onion',
          },
        ],
      },
    ],
  },
  {
    label: '熊掌',
    key: 'bear-paw',
    icon: renderIcon(PawIcon),
    children: [
      {
        label: '保护野生动物',
        key: 'protect-wild-animals',
      },
    ],
  },
  {
    label: '两个都要',
    key: 'both',
    icon: renderIcon(BagOutlineIcon),
    children: [
      {
        label: '鱼和熊掌不可兼得',
        key: 'can-not',
      },
    ],
  },
]

export default defineComponent({
  setup() {
    return {
      activeKey: ref<string | null>(null),
      collapsed: ref(true),
      menuOptions,
      defaultExpandedKeys: ['fish', 'braise'],
    }
  },
})
</script>
