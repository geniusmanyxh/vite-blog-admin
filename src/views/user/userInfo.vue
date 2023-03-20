<template>
  <div>
    <div
      class="w-full flex flex-row justify-between items-center py-4"
    >
      <div>
        <n-button type="info">
          <template #icon>
            <n-icon :component="addIcon" />
          </template>添加</n-button>
        <n-button type="error" class="ml-2">
          <template #icon>
            <n-icon :component="trashIcon" />
          </template>
          批量删除
          </n-button>
      </div>
      <div>
        <n-input-group>
      <n-input :style="{ width: '80%' }" />
      <n-button type="primary">
        <template #icon>
          <n-icon :component="searchIcon"/>
        </template>
        搜索
      </n-button>
    </n-input-group>
      </div>
    </div>
    <n-data-table :scroll-x="1800" striped :columns="columns" :data="data" :pagination="pagination" />
  </div>
</template>

<script lang="ts">
import { NButton, useMessage } from 'naive-ui'
import type { DataTableColumns, } from 'naive-ui'
import { Add , Trash,Search} from '@vicons/ionicons5'
import { UserInfoRowData , userInfoColumns} from '../../utils/tableColumnsField'

const tableColumns = ['look','del','edit']

const createColumns = ({
  sendMail,
}: {
  // eslint-disable-next-line no-unused-vars
  sendMail: (rowData: UserInfoRowData) => void
}): DataTableColumns<UserInfoRowData> => {
  return [
    {
      type: 'selection',
    },
    {
      title: '序号',
      key: 'key',
      render: (_, index) => {
        return `${index + 1}`
      },
    },
    ...userInfoColumns,
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        const btn = tableColumns.map((v)=>{
         return h(
            NButton,
            {
              style: {
                marginRight: '6px',
              },
              size: 'small',
              onClick: () => sendMail(row),
            },
            { default: () => v }
          );
        })
        return btn;
      },
    },
  ]
}

const createData = (): UserInfoRowData[] => {
  const arr1 = []

  for (let i = 0; i < 10; i++) {
    arr1.push( {
    key: 0,
    username: 'John Brown' + i,
  password: 'string',
  nick_name: 'string',
  phone_num: 'string',
  ip_address: 'string',
  eamil_address: 'string',
  head_portrait: 'string',
  birth_time: 'string',
  age: 'string',
  salt: 'string',
  state: 'string',
  register_time: 'string',
  creator: 'string',
  editor: 'string',
  create_time: 'string',
  update_time: 'string'
  })
    
  }

  return arr1
}

export default defineComponent({
  setup() {
    const message = useMessage();

    // 受控的分页
    const paginationReactive = reactive({
      page: 2,
      pageSize: 5,
      showSizePicker: true, 
      showQuickJumper: true,  
      prefix ({itemCount}:{itemCount:unknown}) {
      
        return `Total is ${itemCount}.`
      },
      pageSizes: [2,3, 5, 7],
      onChange: (page: number) => {
        paginationReactive.page = page
      },
      onUpdatePageSize: (pageSize: number) => {
        paginationReactive.pageSize = pageSize
        paginationReactive.page = 1
      }
    })
    return {
      addIcon: Add,
      trashIcon: Trash,
      searchIcon:Search,
      data: createData(),
      columns: createColumns({
        sendMail(rowData) {
          message.info('send mail to ' + rowData.username)
        },
      }),
      pagination: paginationReactive
      // pagination: {
      //   pageSize: 10,
      // },
    }
  },
})
</script>

<style scoped></style>
