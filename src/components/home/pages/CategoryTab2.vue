<template>
  <div class="cate-tab2">
    <div class="cate2_top">
      <div class="cate2_bg1">
        <h1>发现城市的秘密</h1>
        <h2>杭州city walk</h2>
      </div>
      <div class="cate2_bg2">
        <h2>杭州美食攻略</h2>
      </div>
    </div>

    <div class="cate2_bottom">
      <div class="cate2" v-for="item in cate" :key="item.id">
        <div class="image">
          <img :src="item.img" alt="" />
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.textlable }}</p>
      </div>
    </div>

    <div class="more">
      <p>查看更多</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryTab2",
  data() {
    return {
      cate: [
        {
          id: 1,
          img: "https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100424473.jpg",
          title:
            " 【开年限时特惠 • 今夕共西溪】江南美学实景演出，以西溪之水为舞台，双动线行进式观演，360°旋转古风观演席，一园故事，两段人生，倾情演绎“钱塘望族”洪氏的家族风云~ ",
          textlable: "西溪实景演出",
        },
        {
          id: 2,
          img: "https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100424474.jpg",
          title: "不过夜露营节",
          textlable: "",
        },
        {
          id: 3,
          img: "https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100424475.jpg",
          title: "翱翔·大尖山",
          textlable: "无动力滑翔伞",
        },
      ],
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

.cate2_top {
  width: 96%;
  margin: 0.2rem 2%;
  height: 3.5rem;
  display: flex;
}

.cate2_top .cate2_bg1 {
  width: 65%;
  height: 100%;
  background-color: gold;
  background: url(https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100424472.png);
  background-size: 100% 100%;
  border-radius: 0.2rem 0 0 0;
}

.cate2_top .cate2_bg2 {
  width: 34%;
  height: 100%;
  margin-left: 1%;
  background: url(https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100424471.jpg);
  background-size: 100% 100%;
  border-radius: 0 0.2rem 0 0;
}

.cate2_bg1 h1 {
  width: 45%;
  color: white;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  background-color: #5bd07e;
  border-radius: 0.2rem 0 0.2rem 0;
}

.cate2_bg1 h2 {
  position: relative;
  top: 2rem;
  left: 0.2rem;
  font-size: 0.4rem;
  font-weight: bold;
  color: white;
}

.cate2_bg2 h2 {
  position: relative;
  top: 2.7rem !important;
  left: 0.2rem;
  font-size: 0.4rem;
  font-weight: bold;
  color: white;
}

.cate2_bottom {
  width: 96%;
  margin: 0 2%;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  position: relative;
  top: -0.15rem;
}

.cate2_bottom .cate2 {
  width: 33%;
  height: 100%;
  padding-bottom: 0.6rem;
}

.cate2_bottom .cate2:first-child img {
  border-radius: 0 0 0 0.2rem;
}

.cate2_bottom .cate2:last-child img {
  border-radius: 0 0 0.2rem 0;
}

.cate2_bottom .cate2 img {
  height: 3rem;
  width: 100%;
}

.cate2_bottom .cate2 h3 {
  width: 96%;
  margin: 0.1rem 2%;
  font-weight: bold;
  font-size: 0.35rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
}

.cate2_bottom .cate2 p {
  width: 96%;
  margin: 0.2rem 2%;
  color: gray;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
}

.more {
  width: 96%;
  margin: 0 2%;
  height: auto;
  padding-bottom: 2rem;
  padding-top: 0.5rem;
  
}

.more p {
  width: 100%;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  border-radius: 0 0 0.2rem 0.2rem;
  border: 1px solid gainsboro;
}
</style>
