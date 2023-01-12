<template>
  <div class="flex">
    <!-- 设置系统logo -->
    <div>logo</div>
    {{ t('hello') }}
    <button @click="changeLanguage">{{ currentLanguage }}</button>
    <!-- Switch theme Color -->
    <!-- <button @click=changeTheme>{{ currentTheme }}</button> -->
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

    <!-- 开启全屏 或者 退出全屏操作 -->
    <!-- <button @click="toggleFull()">全屏</button> -->
    <div @click="toggleFull()">
      <n-tooltip trigger="hover" >
        <template #trigger>
          <n-icon :component="!fullState ? Expand : Contract" />
        </template>
        {{fullState?'退出':'打开'}}全屏
      </n-tooltip>
    </div>
    <!-- 个人头像 -->
    <div>
      个人头像、系统设置、个人中心、退出登录
    </div>

  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {toggleFull,isFull} from 'tj-jstools'
import {Bulb,BulbOutline,Expand,Contract} from '@vicons/ionicons5'

const { t, locale  } = useI18n() // use as global scope
const emit = defineEmits(['switchTheme','switchLang'])

const fullState = ref(false)

onMounted(()=>{
  window.onresize = () => {
    return (() => {
      fullState.value = isFull()
    })();
  }
})


// 切换语言
const currentLanguage = ref('English')
const changeLanguage = () => {
  let langParam:string = currentLanguage.value === '中文' ? 'ZN':'EN'
  if (langParam === 'ZN') {
    currentLanguage.value = 'English'
    locale.value = 'zn'
  } else {
    currentLanguage.value = '中文'
    locale.value = 'en'
  }

  emit('switchLang',langParam)
}

// 切换主题颜色
const themeActive = ref(false)
const currentTheme = ref('深色')
const changeTheme = (val:boolean) => {
  console.log(val)
  let themeParam:string = currentTheme.value === '深色' ? 'dark':'light'
  if (currentTheme.value === '深色') {
    currentTheme.value = '浅色'
  } else {
    currentTheme.value = '深色'
  }
  emit('switchTheme',themeParam)
}
</script>

<style scoped>

</style>