<template>
  <div class="flex flex-row justify-between w-full h-full items-center">
    <!-- 设置系统logo -->
    <div class="h-full flex items-center">
      <n-image width="40" src="/vite.svg" preview-disabled /> 
      <span class="hidden ml-1 sm:inline sm:text-xl"><b>{{ t('systemName') }}</b></span>
    </div>

    <div class="header-right flex flex-row h-full items-center pr-5">
      <div @click="changeLanguage">
        <n-tooltip trigger="hover">
          <template #trigger>
            {{ currentLanguage }}
          </template>
          切换语言
        </n-tooltip>
      </div>

      <!-- Switch theme Color -->
      <!-- <button @click=changeTheme>{{ currentTheme }}</button> -->
      <div>
        <n-switch v-model:value="themeActive" @update:value="changeTheme">
          <template #checked-icon>
            <n-tooltip trigger="hover">
              <template #trigger>
                <n-icon :component="Bulb" />
              </template>
              深色主题
            </n-tooltip>
          </template>
          <template #unchecked-icon>
            <n-tooltip trigger="hover">
              <template #trigger>
                <n-icon :component="BulbOutline" />
              </template>
              浅色主题
            </n-tooltip>
          </template>
        </n-switch>
      </div>

      <!-- 开启全屏 或者 退出全屏操作 -->
      <!-- <button @click="toggleFull()">全屏</button> -->
      <div @click="toggleFull()">
        <n-tooltip trigger="hover">
          <template #trigger>
            <n-icon :component="!fullState ? Expand : Contract" :size="20" />
          </template>
          {{ fullState ? '退出' : '打开' }}全屏
        </n-tooltip>
      </div>
      <!-- 个人头像 -->
      <div>
        <n-dropdown :options="options" :on-select="dropdownSelect">
          <n-avatar
            round
            size="small"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </n-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Component } from 'vue'
import { useI18n } from 'vue-i18n'
import { DropdownOption, NIcon } from 'naive-ui'
import { toggleFull, isFull } from 'tj-jstools'
import {
  Bulb,
  BulbOutline,
  Expand,
  Contract,
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
} from '@vicons/ionicons5'

const router = useRouter()

const { t, locale } = useI18n() // use as global scope
const emit = defineEmits(['switchTheme', 'switchLang'])

const fullState = ref(false)

onMounted(() => {
  window.onresize = () => {
    return (() => {
      fullState.value = isFull()
    })()
  }
})

// 下拉菜单
const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    })
  }
}

const options = reactive([
  {
    label: '用户资料',
    key: 'profile',
    icon: renderIcon(UserIcon),
  },
  {
    label: '编辑用户资料',
    key: 'editProfile',
    icon: renderIcon(EditIcon),
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogoutIcon),
  },
])

const dropdownSelect = (key: number | string, opts: DropdownOption) => {
  console.log(key, opts)
  if (key === 'logout') {
    router.push('/login')
  }
}

// 切换语言
const currentLanguage = ref('中文')
const changeLanguage = () => {
  let langParam: string = currentLanguage.value === '中文' ? 'ZN' : 'EN'
  if (langParam === 'ZN') {
    currentLanguage.value = 'English'
    locale.value = 'en'
  } else {
    currentLanguage.value = '中文'
    locale.value = 'zn'
    
  }

  emit('switchLang', langParam)
}

// 切换主题颜色
const themeActive = ref(false)
const currentTheme = ref('深色')
const changeTheme = () => {
  
  let themeParam: string = currentTheme.value === '深色' ? 'dark' : 'light'
  if (currentTheme.value === '深色') {
    currentTheme.value = '浅色'
  } else {
    currentTheme.value = '深色'
  }
  emit('switchTheme', themeParam)
}
</script>

<style scoped lang="scss">
.header-right > div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba($color: #000000, $alpha: 0.2);
    border-radius: 3px;
  }
}
</style>
