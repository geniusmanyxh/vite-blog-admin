<template>
  <!-- <div class="h-50 bg-pink-500 w-50">111</div> -->
  <n-button type="primary">naive-ui</n-button>
  <n-button type="warning">naive-warning</n-button>
</template>

<script setup lang="ts">

const test = ref('测试vueAPI')
console.log(test.value)

</script>

<style scoped></style>
