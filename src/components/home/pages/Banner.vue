<template>
  <div class="banner">
    <!-- 主页面 -->
    <div class="main">
      <!-- 顶部 -->
      <div class="banner-top">
        <div class="city">
          <router-link to="/city">
            <label>{{ cityName }}</label>
            <i class="iconfont">&#xe652;</i>
          </router-link>
        </div>
        <form class="search">
          <i class="iconfont">&#xe632;</i>
          <input type="text" placeholder="国内秋色盘点大全" />
        </form>
      </div>
      <div class="banner-middel">
        <p>
          <label>热搜</label>
          <button>赏银杏</button>
          <button>赏枫叶</button>
          <button>秋日骑行</button>
          <button>温泉滑雪</button>
        </p>
      </div>
      <!-- 轮播区域 -->
      <div class="swiper banner-swiper">
        <!-- 主体滑动区 -->
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="item in banner" :key="item.id">
            <img :src="getContent(item.image)" />
          </li>
        </ul>

        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
//引入State的辅助函数
import { mapState } from "vuex";
//引入Swiper的动态组件
import Swiper, {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  Pagination,
} from "swiper";

//3.swiper组件应用配置
Swiper.use([Autoplay, EffectCoverflow, EffectCube, Pagination]);

export default {
  name: "Banner",
  data() {
    return {
      show: false,
      banner: [], //轮播图数组
    };
  },
  methods: {
    getShow() {
      this.show = !this.show;
    },

    // goDetail() {
    //   this.$router.push("/detaillist");
    // },

    //获取图片路径(解决图片请求403)
    getContent(images) {
      //返回拼接后的图片路径
      if (images) {
        let url = `https://images.weserv.nl?url=${images}`;
        return url;
      }
    },
  },

  computed: {
    //接受state内部的cityNmae变量
    ...mapState(["cityName"]),
  },

  mounted() {
    this.axios
      .get(`https://m.youxiake.com/api/m/index/part?uid=&sitecode=1&city_id=1&refreshCount=34`)
      .then((res) => {
        if (res.status === 200) {
          //轮播图banner
          this.banner = res.data.data.flashImageList;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },

  //
  updated() {
    new Swiper(".banner-swiper", {
      //循环播放
      loop: true,
      //设置分页器效果,具体做挂在区域
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
    });
  },

  created() {},
};
</script>
	
<style scoped>
.banner ::-webkit-scrollbar {
  display: none;
}
a {
  text-decoration: none;
  font-style: normal;
  color: #000;
  outline: none;
}
.slider {
  position: absolute;
  left: -6.6rem;
  top: 0;
  height: 80%;
  width: 6.6rem;
  transition: all 1s;
}

.city label {
  font-weight: bold;
  font-size: 0.4rem;
  padding-left: 0.24rem;
}

.city i {
  font-weight: bold;
  font-size: 0.4rem;
  padding-right: 0.3rem;
}

.search i {
  font-weight: bold;
}
/* 动画选择器 */
.default {
  left: 0;
  transition: all 1s;
}
.slider a {
  text-decoration: none;
  color: white;
  padding-right: 0.1rem;
}

.slider p {
  line-height: 1.3rem;
  text-align: right;
  padding-right: 0.3rem;
  color: white;
  font-size: 0.35rem;
}

.slider .search {
  border-radius: 0.1rem;
  overflow: hidden;
  line-height: 0.8rem;
  width: 90%;
  margin: 0.3rem auto;
}

.slider .search i {
  display: inline-block;
  height: 100%;
  font-size: 0.45rem;
  padding-left: 0.2rem;
  vertical-align: middle;
  color: white;
}

.slider .search input {
  border: none;
  width: 80%;
  line-height: 0.8rem;
  text-indent: 1em;
  color: white;
  outline: none;
}
.slider ul {
  margin: 0.5rem auto 0;
  width: 95%;
}
.slider ul li {
  line-height: 1.3rem;
  text-align: left;
  text-indent: 1em;
  font-size: 0.32rem;
  border-top: 0.04rem solid black;
}
.slider ul li a {
  display: block;
}
.slider ul li:last-child {
  border-bottom: 0.04rem solid black;
}
.main {
  width: 100%;
  background-color: gold;
  height: 5.5rem;
}
/* 顶部样式 */
.banner-top {
  display: flex;
  font-size: 0.5rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 0.2rem;
}

.banner-top .city i {
  vertical-align: middle;
  padding-left: 0.1rem;
}

.banner-top .search {
  flex: 1;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  line-height: 0.8rem;
}

.banner-top .search i {
  display: inline-block;
  height: 100%;
  font-size: 0.45rem;
  padding-left: 0.2rem;
  vertical-align: middle;
}

.banner-top .search input {
  border: none;
  width: 80%;
  line-height: 0.8rem;
  text-indent: 1em;
  border-radius: 7px;
  outline: none;
}

.banner-top .slider-btn {
  color: white;
  padding-left: 0.4rem;
  padding-right: 0.3rem;
  line-height: 0.8rem;
  vertical-align: middle;
}
.banner-middel {
  height: 1rem;
  line-height: 1rem;
  font-size: 0.4rem;
  text-indent: 1em;
}
.banner-middel button {
  padding-left: 0.5rem;
  border-radius: 1rem;
  background-color: rgba(253, 253, 253, 0.5);
  border: none;
  margin-left: 0.2rem;
}

/* 轮播区域的样式 */
.banner-swiper {
  width: 94%;
  height: 4rem;
  border-radius: 0.3rem;
}
.banner-swiper img {
  width: 100%;
  height: 100%;
}

:deep(.swiper-pagination > .swiper-pagination-bullet-active) {
  background-color: #ffdd40;
}
</style>