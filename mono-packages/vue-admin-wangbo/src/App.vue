<script setup>
import { useLoading } from '@/useLoading.js';

import Login from '@/views/login/login.vue';

const { isLoading } = useLoading();
const collapsed = ref(false);
const selectedKeys = ref(['4']);
</script>

<template>
  <a-spin :spinning="isLoading" tip="Loading...">
    <div id="app-container">
      <!--    <a-layout> -->
      <!--      <a-layout-sider -->
      <!--        :style="{ -->
      <!--          overflow: 'auto', -->
      <!--          height: '100vh', -->
      <!--          position: 'fixed', -->
      <!--          left: 0, -->
      <!--          top: 0, -->
      <!--          bottom: 0, -->
      <!--        }" -->
      <!--      > -->
      <!--        <div class="logo">12123123</div> -->
      <!--        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline"> -->
      <!--          <a-menu-item key="1"> -->
      <!--            <user-outlined /> -->
      <!--            <span class="nav-text">nav 1</span> -->
      <!--          </a-menu-item> -->
      <!--          <a-menu-item key="2"> -->
      <!--            <video-camera-outlined /> -->
      <!--            <span class="nav-text">nav 2</span> -->
      <!--          </a-menu-item> -->

      <!--          <a-sub-menu key="sub1"> -->
      <!--            <template #title> -->
      <!--              <span> -->
      <!--                <user-outlined /> -->
      <!--                <span>User</span> -->
      <!--              </span> -->
      <!--            </template> -->
      <!--            <a-menu-item key="3">Tom</a-menu-item> -->
      <!--            <a-menu-item key="4">Bill</a-menu-item> -->
      <!--            <a-menu-item key="5">Alex</a-menu-item> -->
      <!--          </a-sub-menu> -->
      <!--          <a-menu-item key="6"> -->
      <!--            <appstore-outlined /> -->
      <!--            <span class="nav-text">nav 6</span> -->
      <!--          </a-menu-item> -->
      <!--          <a-menu-item key="7"> -->
      <!--            <team-outlined /> -->
      <!--            <span class="nav-text">nav 7</span> -->
      <!--          </a-menu-item> -->
      <!--          <a-menu-item key="8"> -->
      <!--            <shop-outlined /> -->
      <!--            <span class="nav-text">nav 8</span> -->
      <!--          </a-menu-item> -->
      <!--        </a-menu> -->
      <!--      </a-layout-sider> -->
      <!--      <a-layout :style="{ marginLeft: '200px' }"> -->
      <!--        <a-layout-header :style="{ background: '#fff', padding: 0 }" /> -->
      <!--        <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }"> -->
      <!--          <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }"> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            Really -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            long -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            ... -->
      <!--            <br /> -->
      <!--            content -->
      <!--          </div> -->
      <!--        </a-layout-content> -->
      <!--      </a-layout> -->
      <!--    </a-layout> -->

      <Login />
    </div>
  </a-spin>
</template>

<style lang="scss" scoped>
#app-container {
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background-color: #f5f5f5;
  position: relative;
}

#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
