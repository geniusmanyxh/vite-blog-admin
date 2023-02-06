<template>

    <n-breadcrumb>
      当前路径:
      <TransitionGroup name="breadcrumb"> 
        <n-breadcrumb-item v-for="(item,idx) of breadcrumbStr" :key="idx">
          {{ item }}
        </n-breadcrumb-item>
      </TransitionGroup>
    </n-breadcrumb>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteRecordNormalized , useRoute, useRouter } from 'vue-router'

interface meatType {
  preTitle:string;
  title:string
}

export default defineComponent({
  name: 'Breadcrumb',

  setup() {
    const route = useRoute()
    const router = useRouter()
    const breadcrumbStr = ref(['控制台'])
    const findRouteInfo = (path: string) => {
      if (path) {
        const routeList: RouteRecordNormalized[] = router.getRoutes()
        const metaInfo:meatType = (routeList.find((val:RouteRecordNormalized) => {
          const flag = val.path.includes(path)
          return flag
        }) as RouteRecordNormalized).meta as unknown as meatType
        // console.log(metaInfo)
        breadcrumbStr.value = []
        if(metaInfo.preTitle) breadcrumbStr.value.push(metaInfo.preTitle)
        breadcrumbStr.value.push(metaInfo.title)
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
