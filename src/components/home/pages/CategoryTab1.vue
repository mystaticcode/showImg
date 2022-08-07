<template>
  <div>
    <div class="cate">
      <span
        v-for="(item, index) in menus"
        :key="index"
        @click="getName(index)"
        :class="{ default: typeid == index }"
        >{{ item }}</span
      >
    </div>

    <div class="cate-tab1 swiper">
      <ol class="swiper-wrapper">
        <!-- 计算属性的返回结果【重组的数组】，丢给循环操作 -->
        <li v-for="(list, index) in pages" :key="index.id" class="swiper-slide">
          <router-link to="/" v-for="item in list" :key="item.id" class="imgs">
            <h6>
              <label>{{ item.placeLabel }}</label>
              <span>|</span>
              <label>{{ item.days }}</label>
            </h6>
            <img :src="getContent(item.image)" />
            <h5>
              <label>￥{{ item.priceLabel }}起</label>
            </h5>
            <h4>{{ item.simpleName }}</h4>
          </router-link>

          <router-link
            to="/"
            class="imgs"
            v-if="list.length == 5 && typeid == 0"
          >
            <aside>
              <h1>周边线路</h1>
              <h2>查看更多</h2>
            </aside>
          </router-link>
        </li>
      </ol>
    </div>
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

// //3.swiper组件应用配置
Swiper.use([Autoplay, EffectCoverflow, EffectCube, Pagination]);
export default {
  name: "CategoryTab1",
  props: ["tab1"],
  data() {
    return {
      tablists: [],
      catelist: [],
      menus: [],
      typeid: 0,
      list: [],
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

    getName(index) {
      this.typeid = index;
      this.catelist = this.list[this.typeid].productList;
      //点击类型(重新调用swiper)
      new Swiper(".cate-tab1", {
        observerParents: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        slidesPerView: 1,
      });
    },
  },

  computed: {
    //程序将其当成是属性而不是函数,是个变量 【循环/判断】
    pages() {
      let arr = []; // 空数组，目的是：重组一个二维数组
      let num = 6; //每页条数
      //将原数组遍历
      this.catelist.forEach((item, index) => {
        //i:每页的页码
        let i = Math.floor(index / num);
        if (!arr[i]) arr[i] = [];
        arr[i].push(item);
      });

      return arr;
    },
  },

  mounted() {
    new Swiper(".cate-tab1", {
      observerParents: true,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      slidesPerView: 1,
    });
  },

  created() {
    this.axios
      .get(`https://m.youxiake.com/api/m/index/part?uid=&sitecode=1&city_id=1&refreshCount=34`)
      .then((res) => {
        if (res.status === 200) {
          this.list = res.data.data.aroundLump.weekList;
          this.catelist =
            res.data.data.aroundLump.weekList[this.typeid].productList;

          this.list.forEach((item) => {
            this.menus.push(item.title);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.cate {
  width: 96%;
  margin: 0 2%;
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-around;
}

.cate span {
  border: 1px solid gainsboro;
  border-radius: 0.3rem;
  padding: 0.15rem 0.35rem;
}

.default {
  color: gold;
  font-weight: bold;
}

.cate-tab1 {
  height: auto;
}

/* 此处的 div 可以依照情况替换成对应的元素名称 */
.cate-tab1::-webkit-scrollbar {
  display: none;
}

.cate-tab1 ol {
  width: 100%;
  height: 60%;
}
.cate-tab1 ol li {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding-bottom: 1.8rem;
}

.imgs img {
  width: 100%;
  height: 2.3rem;
  border-radius: 0.2rem;
}

.cate-tab1 ol li a {
  width: 31%;
  height: 2.8rem;
  margin: 0.5rem 1%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.imgs h6 {
  color: initial;
  width: 80%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  height: 0.4rem;
  top: 0.4rem;
  left: 0.5rem;
  color: white;
  padding: 0 0.05rem;
  border-radius: 0rem 0.2rem 0 0.2rem;
}

.imgs h6 label {
  width: 50%;
}

.imgs h6 span {
  margin: 0 0.1rem;
  height: 0.4rem;
}

.imgs h6 label,
.imgs h6 span {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.imgs h6 label:first-child {
  padding-left: 0.1rem;
}

.imgs h6 label:last-child {
  width: 30%;
  height: 0.4rem;
  line-height: 0.4rem;
}

.imgs h5 {
  position: relative;
  top: -0.5rem;
  left: 0.15rem;
  color: white;
  font-weight: bold;
}

.imgs h4 {
  text-align: center;
  color: black;
  font-size: 0.35rem;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

a aside {
  color: initial;
  background-color: #f2f2f2;
  margin-top: 0.5rem;
  height: 2.3rem;
  border-radius: 0.2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
}
a aside h1,
a aside h2 {
  width: 100%;
}

a aside h1 {
  font-weight: bold;
  font-size: 0.35rem;
  border-bottom: 3px solid gold;
  width: 50%;
  margin: 0 25%;
}

a aside h2 {
  width: 60%;
  margin: 0 20%;
  background-color: gold;
  height: 0.6rem;
  line-height: 0.6rem;
  position: relative;
  top: -0.3rem;
  border-radius: 0.3rem;
}
</style>
