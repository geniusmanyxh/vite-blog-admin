import type { DataTableColumns } from 'naive-ui'

// 表格操作按钮类型
export type TableActionBtn = 'look' | 'del' | 'edit'
// 表格操作按钮
// const tableActionBtn: TableActionBtn[] = ['look','del','edit'];

export type UserInfoRowData = {
  key: number
  username: string
  password?: string
  nick_name: string
  phone_num: string
  ip_address: string
  eamil_address: string
  head_portrait: string
  birth_time: string
  age: string
  salt: string
  state: string
  register_time: string
  creator: string
  editor: string
  create_time: string
  update_time: string
}

export const userInfoColumns: DataTableColumns<UserInfoRowData> = [
  {
    title: '用户名',
    key: 'username',
  },
  {
    title: '密码',
    key: 'password',
  },
  {
    title: '昵称',
    key: 'nick_name',
  },
  {
    title: '手机号',
    key: 'phone_num',
  },
  {
    title: 'IP',
    key: 'ip_address',
  },
  {
    title: '邮箱',
    key: 'eamil_address',
  },
  {
    title: '头像',
    key: 'head_portrait',
  },
  {
    title: '生日',
    key: 'birth_time',
  },
  {
    title: '年龄',
    key: 'age',
  },
  {
    title: '盐',
    key: 'salt',
  },
  {
    title: '用户状态',
    key: 'state',
  },
  {
    title: '注册时间',
    key: 'register_time',
  },
  {
    title: '是否过期',
    key: 'is_expired',
  },
  {
    title: '创建人',
    key: 'creator',
  },
  {
    title: '编辑人',
    key: 'editor',
  },
  {
    title: '创建时间',
    key: 'create_time',
  },
  {
    title: '更新时间',
    key: 'update_time',
  },
]
