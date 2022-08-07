<template v-cloak>
  <div class="tranvel_list">
    <div :class="[{ defaultUl: show }, 'travel-menus', 'swiper']">
      <ul class="swiper-wrapper">
        <li
          v-for="item in menus"
          :key="item.type"
          class="swiper-slide"
          :class="{ defaults: menus_type == item.type }"
          @click="getName(item.type)"
        >
          {{ item.typeName }}
        </li>
      </ul>
    </div>

    <div class="reco">
      <div class="res">
        <ul>
          <li v-for="item in menus_list" :key="item.dataDetail.id">
            <!-- <h3>{{ item.dataDetail.placeLabel }}</h3> -->
            <img :src="getContent(item.dataDetail.image)" />
            <aside>
              <label>{{ item.dataDetail.title }}</label>
              <h4>
                {{ item.dataDetail.productType }}·{{
                  item.dataDetail.productCat
                }}·{{ item.dataDetail.days }}
              </h4>
              <h5>
                ￥{{ item.dataDetail.priceLabel }}起<em>{{
                  item.dataDetail.numLabel
                }}</em>
              </h5>
            </aside>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import Swiper from "swiper";
Swiper.use();
export default {
  name: "Tranvel_list",
  data() {
    return {
      swiperList: "",
      show: false,
      menus_type: 1,
      menus: [],
      menus_list: [],
      addres: 1, //请求地址默认是1
      showid:0,
    };
  },

  watch: {
    //监听跳转回导航栏
    menus_type() {
      window.scrollTo(0, 1700);
    },
  },

  mounted() {
    let timer;
    let flag = true;
    //监听scroll,调用getHeight函数
    window.addEventListener("scroll", this.getHeight);

    window.addEventListener(
      "scroll",
      () => {
        if (flag) {
          this.fiexMenus();
        }
        flag = false;
        clearTimeout(timer);
        timer = setTimeout(() => {
          flag = true;
        }, 15);
      },
      true
    );
  },
  methods: {
    //判断scoll的距离
    fiexMenus() {
      let sTop = window.pageYOffset || document.documentElement.scrollTop;	  
      sTop >= 1700 ? (this.show = true) : (this.show = false);
    },
    //滑动
    MenusSwiper() {
      this.swiperList = new Swiper(".travel-menus", {
        slidesPerView: 6,
        centeredSlides: true,
        centeredSlidesBounds: true,
        slideToClickedSlide: true,
      });
    },

    //获取tpye值
    getName(val) {
      this.menus_type = val;
      this.MenusSwiper(); //调用滑动
      let address = `https://m.youxiake.com/api/m/index/flow/recommend?sitecode=1&city_id=1&type=${this.menus_type}&page=1`;
      this.axios
        .get(address)
        .then((res) => {
          if (res.status === 200) {
            this.menus_list = res.data.data.list;

          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //获取图片路径
    getContent(images) {
      //返回拼接后的图片路径
      if (images) {
        let url = `https://images.weserv.nl?url=${images}`;
        return url;
      }
    },

    getHeight() {
      //当请求的type值为1的时候，才进行懒加载
      if (this.menus_type == 1) {
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight;
        //这里减去50,是为了让能提前请求到数据,避免滑动卡顿
        if (scrollTop + clientHeight >= (scrollHeight-50)) {
          //当到达底部时页数自增1
          let page = this.addres++;
          //拼接新的请求地址
          let address = `https://m.youxiake.com/api/m/index/flow/recommend?sitecode=1&city_id=1&type=1&page=${page}`;
          //异步请求
          this.axios
            .get(address)
            .then((res) => {
              //status为200循环添加数据
              if (res.status === 200) {
                for (let i in res.data.data.list) {
                  this.menus_list.push(res.data.data.list[i]);
                }

                console.log(this.menus_list);
                
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    },
  },

  created() {
    this.MenusSwiper(); //滑动
    let that = this;
    this.axios
      .get("https://m.youxiake.com/api/m/index/part?uid=&sitecode=1&city_id=1&refreshCount=34")
      .then((res) => {
        if (res.status === 200) {
          that.menus = res.data.data.flowTabList;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },

  destroyed() {
    window.removeEventListener("scroll", this.getHeight);
  },
};
</script>


<style scoped>
[v-cloak] {
  display: none;
}

.travel-menus {
  height: 1.2rem;
  background-color: #eeeeee;
}

.travel-menus ul {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.travel-menus ul li {
  width: 2rem;
  font-size: 0.4rem;
  text-align: center;
  height: 1.5rem;
  line-height: 1.5rem;
}

.defaultUl {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 1rem;
  line-height: 1.5rem;
}

.defaults {
  width: 0.05rem;
  background: url(https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100458852.png);
  background-size: 100% 100%;
}

.reco {
  width: 100%;
  /* margin-top: 0.5rem; */
  background-color: rgb(241, 241, 241);
}

.res {
  background-color: rgb(241, 241, 241);
}

* {
  margin: 0;
  padding: 0;
}

.reco p {
  height: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(245, 245, 245);
}

.reco p span {
  font-size: 0.5rem;
  font-weight: bold;
}

.res aside {
  width: 90%;
  height: 2.2rem;
  margin-left: 0.2rem;
  display: inline-block;
  background-color: white;
  border-radius: 0 0 0.2rem 0.2rem;
}

.res ul li {
  width: 50%;
  display: inline-block;
}
.res {
  display: flex;
}

.res ul li img {
  width: 90%;
  height: 4rem;
  margin-left: 0.2rem;
  display: inline-block;
  border-radius: 0.2rem 0.2rem 0 0;
}

.res ul li h3 {
  width: 40%;
  height: 0.45rem;
  line-height: 0.45rem;
  position: relative;
  top: 0.45rem;
  color: white;
  margin-left: 0.1799rem;
  text-indent: 0.3rem;
  border-radius: 0.295rem 0rem 0.295rem 0;
  background-color: rgba(0, 0, 0, 0.45);
}

.res ul li aside {
  margin-bottom: 0.3rem;
}

.res ul li aside label {
  width: 4rem;
  font-size: 0.45rem;
  font-weight: bold;
  margin-left: 0.1rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.res ul li aside h4 {
  font-size: 0.35rem;
  text-indent: 0.1rem;
  padding-top: 0.1rem;
  color: rgb(173, 173, 173);
}

.res ul li aside h5 {
  margin-top: 0.2rem;
  font-size: 0.35rem;
  font-weight: bold;
  color: rgb(255, 113, 0);
  width: 100%;
}

.res ul li aside h5 em {
  width: 2.3rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  float: right;
  color: gray;
  font-weight: initial;
  margin-right: 0.3rem;
}
</style>