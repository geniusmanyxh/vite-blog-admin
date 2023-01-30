<template>
  <div style="min-height: 100vh; position: relative">
    <n-config-provider :locale="lang" :date-locale="dateLocale" :theme="theme">
      <n-layout position="absolute">
        <n-layout-header style="height: 64px; padding: 10px" bordered>
          <slot name="header">
            <my-header
              @switchTheme="switchTheme"
              @switchLang="switchLang"
            ></my-header>
          </slot>
        </n-layout-header>
        <n-layout position="absolute" style="top: 64px; bottom: 0px" has-sider>
          <slot name="sider">
            <my-sider @click-menu="clickMenu" />
          </slot>

          <n-layout :native-scrollbar="false">
            <n-layout-content>
              <div style="padding: 24px; min-height: 300px"><RouterView /></div>
              <n-layout-footer style="height: 64px; padding: 24px" bordered>
                <slot name="footer">
                  <my-footer></my-footer>
                </slot>
              </n-layout-footer>
            </n-layout-content>
          </n-layout>
        </n-layout>
        <!-- <n-layout-footer
      position="absolute"
      style="height: 64px; padding: 24px"
      bordered
    >
    <slot name="footer">footer</slot>
    </n-layout-footer> -->
      </n-layout>
    </n-config-provider>
  </div>
</template>

<script setup lang="ts">
import mySider from './sider/index.vue'
import myHeader from './header/index.vue'
import myFooter from './footer/index.vue'
import { NConfigProvider, darkTheme } from 'naive-ui'
import { zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()

// 切换路由
const clickMenu = (key: string) => {
  console.log(key)
  if (key) {
    router.push({ name: key })
  }
}

// 切换语言模式
const lang = ref(zhCN)
const dateLocale = ref(dateZhCN)
const switchLang = (type: string) => {
  // console.log(type)
  if (type === 'ZN') {
    lang.value = zhCN
    dateLocale.value = dateZhCN
  } else {
    lang.value = enUS
    dateLocale.value = dateEnUS
  }
}

/**
 * 切换主题颜色
 */
const theme = ref<any>(null)
const switchTheme = (type: string) => {
  if (type === 'light') {
    theme.value = null
  } else {
    theme.value = darkTheme
  }
}
</script>

<style scoped></style>
