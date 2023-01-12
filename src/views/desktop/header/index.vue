<template>
  <div>
    {{ t('hello') }}
    <button @click="changeLanguage">{{ currentLanguage }}</button>
    <!-- Switch theme Color -->
    <button @click=changeTheme>{{ currentTheme }}</button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale  } = useI18n() // use as global scope
const emit = defineEmits(['switchTheme','switchLang'])

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
const currentTheme = ref('深色')
const changeTheme = () => {
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