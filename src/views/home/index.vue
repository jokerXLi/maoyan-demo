<template>
  <div class="page-home">
    <router-view></router-view>
    <h1>电影首页，个人中心页，影院列表页</h1>
    <!-- 引入组件 -->
    <Tabbar
    :tabs="[
    { name: '电影', icon: 'icondianying', to: '/films' },
      { name: '影院', icon: 'iconyingyuan', to: '/cinemas' },
      { name: '我的', icon: 'iconwode1', to: '/center' },
    
    ]"
    >



    </Tabbar>
  </div>
</template>


<script>
import Tabbar from "@/components/Tabbar/index.vue"; //@等于根目录
export default {
  name: "home",
  //注册组件
  components: {
    Tabbar //组件名
  }
};
</script>
<style lang="scss">
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  > div:first-child {
    flex: 1;
    overflow-y: auto;
  }
}
</style>