<template>
  <div class="home">
    <!-- 轮播区域 -->
    <Banner></Banner>
    <!-- menu菜单栏 -->
    <Recommend></Recommend>
    <!-- 菜单背景 -->
    <Bg></Bg>
    <!-- tab栏 -->
    <Category></Category>
    <!-- 热门推荐 -->
    <Skipe></Skipe>
    <!-- 小众种草 -->
    <Xiao></Xiao>
    <!-- 当季目的地 -->
    <Destination></Destination>
    <!-- 全球经典 -->
    <Tranvel></Tranvel>
    <!-- 底部导航栏 -->
    <BottomNav :propsurl="arrUrl"></BottomNav>
  </div>
</template>

<script>
import Banner from "../home/pages/Banner.vue";
import Recommend from "../home/pages/Recommend.vue";
import Bg from "../home/pages/Bg.vue";
import Category from "../home/pages/Category.vue";
import Skipe from "../home/pages/Spike.vue";
import Xiao from "../home/pages/Xiao.vue";
import Destination from "../home/pages/Destination.vue";
import Tranvel from "../home/pages/Tranvel.vue";
import BottomNav from "../default/BottomNav.vue";
export default {
  name: "Home",
  components: {
    BottomNav,
    Banner,
    Recommend,
    Bg,
    Category,
    Skipe,
    Xiao,
    Destination,
    Tranvel,
  },
  data() {
    return {
      arrUrl: ["bottoms/homes.png", "bottoms/dingdan.png", "bottoms/slef.png"],
    };
  },
  methods: {},
  mounted() {},
  created() {},
};
</script>

<style scoped>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.home ::-webkit-scrollbar {
  display: none;
}

.home {
  height: 5rem;
  overflow-y: visible;
}
</style>
