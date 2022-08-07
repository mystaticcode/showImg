<template>
  <div class="xiao">
    <aside>
      <h3>{{ title }}</h3>
      <span>{{ subTitle }}</span>

      <div class="xiaos swiper">
        <ul class="imgs swiper-wrapper">
          <li
            v-for="(item, index) in minority"
            :key="index"
            class="swiper-slide"
          >
            <img :src="getContent(item.image)" />
            <h4>{{ item.title }}</h4>
            <h5>{{ item.subTitle }}</h5>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
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
  name: "Xiao",
  data() {
    return {
      minority: [],
      title: "",
      subTitle: "",
    };
  },


  methods: {
    //获取图片路径(解决图片请求403)
    getContent(images) {
      //返回拼接后的图片路径
      if (images) {
        let url = `https://images.weserv.nl?url=${images}`;
        return url;
      }
    },
  },

  updated() {
    new Swiper(".xiaos", {
      slidesPerView: 3,
    });
  },

  created() {
    this.axios
      .get(`https://m.youxiake.com/api/m/index/part?uid=&sitecode=1&city_id=1&refreshCount=34`)
      .then((res) => {
        if (res.status === 200) {
          this.title = res.data.data.minority.title; 
          this.subTitle = res.data.data.minority.subTitle;
          this.minority = res.data.data.minority.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.xiao {
  width: 99%;
  height: 2.6rem;
}

.xiao aside {
  width: 99%;
  line-height: 1.3rem;
  margin: 0 0.2rem;
}

.xiao aside h3 {
  width: 25%;
  float: left;
  font-size: 0.4rem;
  font-weight: bold;
  margin-left: 0.3rem;
}

.xiao aside span {
  width: 75%;
  font-size: 0.2rem;
  background-color: rgba(255, 176, 121, 0.3);
  color: rgb(255, 176, 121);
  border-radius: 0.25rem;
  padding: 0.1rem 0.2rem;
}

.imgs li {
  width: 4.2rem;
  height: 4.6rem;
}

.imgs {
  height: 6.4rem;
}

.imgs li img {
  width: 98%;
  height: 100%;
}

.imgs li:first-child img {
  border-radius: 0.3rem 0rem 0rem 0.3rem;
}

.imgs li:last-child img {
  border-radius: 0rem 0.3rem 0.3rem 0rem;
}

h4,
h5 {
  position: relative;
  top: -3.5rem;
  color: white;
  z-index: 100;
  text-align: center;
}

.imgs li h4 {
  font-size: 0.45rem;
  font-weight: bold;
  position: relative;
  top: -2.5rem;
}

.imgs li h5 {
  position: relative;
  top: -3.1rem;
  font-size: 0.3rem;
  z-index: 100;
  width: 80%;
  margin: 0 10%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
