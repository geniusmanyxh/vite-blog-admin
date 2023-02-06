<template>
  <n-tabs
    v-model:value="name"
    type="card"
    size="small"
    closable
    animated
    tab-style="min-width: 80px;"
    @close="handleClose"
    @before-leave="handleBeforeLeave"
    class="mt-1"
  >
    <n-tab
      v-for="panel in panels"
      :key="panel.path"
      :tab="panel.title"
      :name="panel.title"
      :closable="panel.title !== '控制台'"
    >     
    </n-tab>
    <template #prefix>
      <div @click="backToTab" class="w-8 h-8 flex items-center justify-center cursor-pointer hover:text-blue-600">
        <n-icon :size="30" :component="ChevronBack"></n-icon>
      </div>
    </template>
    <template #suffix>
      <div @click="forwardToTab" class="w-8 h-8 flex items-center justify-center cursor-pointer hover:text-blue-600">
        <n-icon :size="30" :component="ChevronForward"></n-icon>
      </div>
      
    </template>
  </n-tabs>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter, RouteRecordNormalized} from 'vue-router'
import { ChevronBack, ChevronForward } from '@vicons/ionicons5'


interface meatType {
  preTitle:string;
  title:string
}

interface tabType {
  title: string;
  path: string
}

export default defineComponent({
  name:'NavTabs',
  setup () {

    const route = useRoute()
    const router = useRouter()

    const nameRef = ref('控制台')

    const panelsRef = ref<tabType[]>([{
      title: '控制台',
      path: '/desktop/console'
    }])

    const routeList: RouteRecordNormalized[] = router.getRoutes()

    const getRouteInfo = (path:string) => {
      const curRouteInfo:RouteRecordNormalized = routeList.find((val:RouteRecordNormalized) => {
          const flag = val.path.includes(path)
          return flag
        }) as RouteRecordNormalized

      return curRouteInfo
    }

    const addRouteTab = (path:string) => {
        const curRoute:RouteRecordNormalized = getRouteInfo(path)
        const curMeta:meatType = curRoute.meta as unknown as meatType

        const tabObj: tabType = {
          title: curMeta.title,
          path: curRoute.path
        }

        const flag = panelsRef.value.find ((v:tabType) =>{
          return  tabObj.path === v.path
        })

        if (flag) {
          nameRef.value = flag.title
        } else {
          panelsRef.value.push (tabObj)
          nameRef.value = tabObj.title
        }

    }

    const handleBeforeLeave = (tabName: string) => {
      const flag = panelsRef.value.find((v:tabType) => {
        return v.title === tabName
      })

      if (flag) {
        router.push(flag.path)
        // console.log(flag)
      } else {
        return false
      }

      return true
    }

    const forwardToTab = () => {
      const tabIdx = panelsRef.value.findIndex((v)=>{
        return v.title === nameRef.value
      })

      const tabLen = panelsRef.value.length

      if (tabIdx + 1 < tabLen) {
        nameRef.value = panelsRef.value[tabIdx + 1].title
        router.push(panelsRef.value[tabIdx + 1].path)
      }

      // console.log(tabIdx)

    }

    const backToTab = () => {
      const tabIdx = panelsRef.value.findIndex((v)=>{
        return v.title === nameRef.value
      })

      if (tabIdx + 1 > 1) {
        nameRef.value = panelsRef.value[tabIdx - 1].title
        router.push(panelsRef.value[tabIdx - 1].path)
      }

      // console.log(tabIdx)

    }


    watch(()=>route.path, (p) => {
      addRouteTab(p)
    })


    function handleClose (name: string) {
      const { value: panels } = panelsRef
      if (panels.length === 1) {
        return
      }
      const index = panels.findIndex((v) => name === v.title)
      panels.splice(index, 1)
      if (nameRef.value === name) {
        nameRef.value = panels[index - 1].title
        router.push(panels[index - 1].path)
      }
    }
    return {
      panels: panelsRef,
      name: nameRef,
      handleClose,
      handleBeforeLeave,
      forwardToTab,
      backToTab,
      ChevronBack,
      ChevronForward
    }
  }
})
</script>

<style scoped>

</style>