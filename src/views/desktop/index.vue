<template>
  <div style="min-height: 100vh; position: relative">
    <n-layout position="absolute">
    <n-layout-header style="height: 64px; padding: 24px" bordered>
      <slot name="header">header</slot>
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
      <slot name="sider">
        <my-sider/>
      </slot>
     
      <n-layout :native-scrollbar="false">
        <n-layout-content content-style="padding: 24px;">
          <slot name="content">content</slot>
        </n-layout-content>
      </n-layout>
    </n-layout>
    <n-layout-footer
      position="absolute"
      style="height: 64px; padding: 24px"
      bordered
    >
    <slot name="footer">footer</slot>
    </n-layout-footer>
  </n-layout>
  </div>
  
</template>

<script setup lang="ts">
import mySider from './sider/index.vue'

</script>

<style scoped>

</style>