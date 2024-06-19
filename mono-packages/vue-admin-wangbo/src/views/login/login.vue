<template>
  <div class="login-page">
    <div class="login-box">
      <p class="title">后台管理系统</p>

      <a-form class="mt-50px" ref="formRef" :model="formState">
        <a-form-item
          name="username"
          :rules="[{ required: true, whitespace: true, message: '请输入账号' }]"
        >
          <a-input v-model:value="formState.username" :maxlength="20" placeholder="账号"></a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, whitespace: true, message: '请输入密码' }]"
        >
          <a-input
            v-model:value="formState.password"
            :maxlength="20"
            type="password"
            placeholder="密码"
          ></a-input>
        </a-form-item>
        <a-form-item>
          <a-button class="w-full" type="primary" @click.stop="submitClick()">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { useThrottleFn } from '@vueuse/core';
import { copyFn } from '@mono/utils';
// import { message } from 'ant-design-vue';

import { apiRequest } from '@/api/index.js';

const formRef = ref();

const formState = reactive({
  username: '',
  password: '',
});

onMounted(() => {
  for (let i = 0; i < 5; i++) {
    apiRequest();
  }
});

/**
 * @description: 点击登录
 */
const submitClick = useThrottleFn(async () => {
  try {
    copyFn('tttttt');
    formState.username = formState.username.replace(/\s/g, '');
    formState.password = formState.password.replace(/\s/g, '');
    await formRef.value.validate();
    console.log('submit');
    apiRequest();
  } catch (err) {
    console.log(err);
  }
}, 2000);
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('@/image/common/login-bg.jpg');
}

.login-box {
  min-width: 500px;
  min-height: 350px;
  background: rgba(12, 137, 238, 0.2);
  border-radius: 6px;
  padding: 50px;
  color: #fff;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  .title {
    font-weight: bold;
    text-align: center;
    max-width: 400px;
    font-size: 28px;
    line-height: 40px;
  }
}
</style>
