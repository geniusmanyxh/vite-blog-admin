<template>
  <div class="w-full min-h-screen bg-gray-100 flex flex-row flex-wrap justify-center items-center">
    <!-- sm:w-1/3 sm:h-full -->
    <div
      class="w-full h-1/3 md:w-1/2 md:h-full flex flex-row justify-center items-center"
    >
      <img src="http://jstools.itbooks.work/tian.png" alt="" />
    </div>
    <!-- sm:w-2/3 sm:h-full -->
    <div
      class="md:w-1/2 md:h-full w-full h-2/3 flex justify-center items-center"
    >
      <div
        class="w-full md:w-3/4 flex flex-col justify-center items-center px-8"
      >
        <div class="w-full flex justify-center items-center">
          <h1>后台管理系统</h1>
        </div>

        <n-tabs
        ref="tabsInstRef"
          class="card-tabs"
          v-model:value="valueRef"
          size="large"
          animated
          style="margin: 0 -4px"
          pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
        >
          <n-tab-pane name="signin" tab="登录">
            <div class="w-full h-auto px-2">
              <n-form
                ref="formRef"
                :model="loginValue"
                :rules="loginRules"
              >
                <n-form-item path="username" size="small">
                  <n-input
                    v-model:value="loginValue.username"
                    placeholder="手机号/邮箱地址"
                    clearable
                    size="large"
                  >
                    <template #prefix>
                      <n-icon :component="PersonOutline" />
                      <span class="text-gray-400">:</span>
                    </template>
                  </n-input>
                </n-form-item>
                <n-form-item path="password" size="small">
                  <n-input
                    v-model:value="loginValue.password"
                    type="password"
                    show-password-on="mousedown"
                    placeholder="密码"
                    clearable
                    size="large"
                  >
                    <template #prefix>
                      <n-icon :component="LockClosedOutline" />
                      <span class="text-gray-400">:</span>
                    </template>
                  </n-input>
                </n-form-item>

                <n-form-item size="small">
                  <div class="w-full flex justify-around">
                    <n-button type="primary" size="large" @click="handleLogin"> 登录 </n-button>
                    <n-button type="info" @click="handleRegister" size="large"> 注册 </n-button>
                  </div>
                </n-form-item>
              </n-form>
            </div>
            <div
              class="threeLogin w-full p-2 flex flex-row flex-wrap justify-start items-end"
            >
              使用三方登录：
              <n-icon
                :size="24"
                :component="LogoAlipay"
                color="blue"
                class="ml-2"
              />
              <n-icon :size="24" :component="LogoGithub" class="ml-2" />
              <n-icon
                :size="24"
                :component="LogoWechat"
                color="green"
                class="ml-2"
              />
              <n-icon
                :size="24"
                :component="LogoTwitter"
                color="blue"
                class="ml-2"
              />
              <n-icon :size="24" class="ml-2" color="lightblue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741c0 31.345-16.136 72.247-51.051 101.786c16.842 5.192 54.843 19.167 45.803 34.421c-7.316 12.343-125.51 7.881-159.632 4.037c-34.122 3.844-152.316 8.306-159.632-4.037c-9.045-15.25 28.918-29.214 45.783-34.415c-34.92-29.539-51.059-70.445-51.059-101.792c0 0-33.334 54.134-44.859 52.741c-5.37-.65-12.424-29.644 9.347-99.704c10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963c18.118 45.223 29.912 72.85 40.144 105.778c21.768 70.06 14.716 99.053 9.346 99.704z"
                    fill="currentColor"
                  ></path>
                </svg>
              </n-icon>
            </div>
          </n-tab-pane>
          <n-tab-pane name="signup" tab="注册">
            <n-form :model="registerValue" :rules="registerRules">
              <n-form-item path="account" size="small">
                <n-input
                  placeholder="请输入手机号或者有效的邮箱地址"
                  clearable
                  size="large"
                  v-model:value="registerValue.account"
                />
              </n-form-item>
              <n-form-item path="checkCode" size="small">
                <n-input-group>
                  <n-input
                    placeholder="请输入验证码"
                    :style="{ width: '75%' }"
                    clearable
                    size="large"
                    v-model:value="registerValue.checkCode"
                  />
                  <n-button type="info" ghost size="large">
                    获取验证码
                  </n-button>
                </n-input-group>
              </n-form-item>
            </n-form>
            <n-form-item>
              <n-button type="primary" block secondary strong size="large">
              注册
            </n-button>
            </n-form-item>
          </n-tab-pane>
        </n-tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import {
  LockClosedOutline,
  PersonOutline,
  LogoAlipay,
  LogoGithub,
  LogoWechat,
  LogoTwitter,
} from '@vicons/ionicons5'

const router = useRouter()

// 登录信息
const loginValue = ref({
  username: '',
  password: '',
})

const loginRules = {
  username: {
    required: true,
    message: '请输入手机号或者有效的邮箱地址',
    trigger: 'blur',
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: 'blur',
  },
}

// 注册信息
const registerValue = ref({
  account:'',
  checkCode:'',
})

const registerRules = {
  account: {
    required: true,
    message: '请输入有效的手机号码或者邮箱地址',
    trigger: 'blur'
  },
  checkCode: {
    required: true,
    message: '请输入有效的验证码',
    trigger: 'blur'
  }
}

// 切换tabs
type SyncBarPosition=()=>void
type TabsType = {
  syncBarPosition:SyncBarPosition
}
const tabsInstRef = ref<TabsType|null>(null);
const valueRef = ref("signin");
const handleRegister = () => {
  valueRef.value = 'signup'
  nextTick(() => (tabsInstRef.value as TabsType ).syncBarPosition());
}

// login
const handleLogin = () => {
  router.push('/desktop')
}
</script>

<style scoped lang="scss">
.threeLogin {

  & > .n-icon {
    // width: 40px;
    // padding: 2px;
    cursor: pointer;

    &:hover {
      @apply bg-gray-300;
    }
  }
}
</style>
