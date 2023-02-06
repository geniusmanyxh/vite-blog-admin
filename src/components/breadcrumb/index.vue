<template>

    <n-breadcrumb>
      {{$t("nav.curPath")}}:
      <TransitionGroup name="breadcrumb"> 
        <n-breadcrumb-item v-for="(item,idx) of breadcrumbStr" :key="idx">
          {{ $t('nav.'+item) }}
        </n-breadcrumb-item>
      </TransitionGroup>
    </n-breadcrumb>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteRecordNormalized , useRoute, useRouter } from 'vue-router'

interface meatType {
  preTitle:string;
  title:string;
  preTitle_key:string;
  title_key:string
}

export default defineComponent({
  name: 'Breadcrumb',

  setup() {
    const route = useRoute()
    const router = useRouter()
    const breadcrumbStr = ref<string[]>(['console'])
    const findRouteInfo = (path: string) => {
      if (path) {
        const routeList: RouteRecordNormalized[] = router.getRoutes()
        const metaInfo:meatType = (routeList.find((val:RouteRecordNormalized) => {
          const flag = val.path.includes(path)
          return flag
        }) as RouteRecordNormalized).meta as unknown as meatType
        // console.log(metaInfo)
        breadcrumbStr.value = []
        if(metaInfo.preTitle_key) breadcrumbStr.value.push(metaInfo.preTitle_key)
        breadcrumbStr.value.push(metaInfo.title_key)
      }
    }

    watch(()=>route.path,(p)=>{
      // console.log(p)
      findRouteInfo(p)
    })
    return {breadcrumbStr}
  },
})
</script>

<style scoped></style>
