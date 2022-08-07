<template>
  <div class="bg">
    <div class="bg_img">
      <div class="left">
        <h3>主题游</h3>
        <h4>个性独创</h4>
      </div>
      <div class="right">
        <div class="fline">
          <div class="bg1">亲子游</div>
          <div class="bg2">摄影游</div>
          <div class="bg3">户外游</div>
        </div>
        <div class="fline sline">
          <div class="bg4">活动赛事</div>
          <div class="bg5">瑜伽行</div>
          <div class="bg6">野奢帮</div>
        </div>
      </div>
    </div>
    <div class="bg_bottom">
      <div class="bg_7">定制游</div>
      <div class="bg_8">签证</div>
      <div class="bg_9">邮轮</div>
      <div class="bg_10">美宿度假</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bg",
  data() {
    return {};
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

.bg_img {
  width: 96%;
  margin: 0.3rem 2%;
  height: 3rem;
  display: flex;
}

.bg_img .left {
  width: 30%;
  height: 3rem;
  background: url(https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100452227.png);
  border-radius: 0.3rem 0 0 0;
  text-align: center;
}

.bg_img .left h3 {
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 0.2rem;
  font-weight: bold;
  font-size: 0.4rem;
}

.bg_img .left h4 {
  width: 50%;
  margin: 0 25%;
  font-weight: bold;
  height: 0.4rem;
  line-height: 0.4rem;
  background-color: gold;
  border-radius: 0.3rem;
  text-align: center;
}
.bg_img .right {
  width: 70%;
  height: 3rem;
}

.bg_img .right .fline {
  height: 1.46rem;
  width: 99%;
  display: flex;
  margin: 0 0.5%;
}

.bg_img .fline div {
  width: 33%;
  height: 1.46rem;
  line-height: 1.46rem;
  text-align: center;
}

.bg_img .sline {
  margin-top: 0.04rem !important;
}

.bg_img .left,
.bg_img .bg1,
.bg_img .bg2,
.bg_img .bg3,
.bg_img .bg4,
.bg_img .bg5,
.bg_img .bg6,
.bg_7,
.bg_8,
.bg_9,
.bg_10 {
  background-size: 100% 100%;
  font-weight: bold;
}

.bg_bottom {
  width: 96%;
  margin: 0 1.3%;
  height: 1.46rem;
  position: relative;
  top: -0.3rem;
  display: flex;
}

.bg_bottom div {
  width: 24.9%;
  text-align: center;
  line-height: 1.46rem;
  background-size: 100% 100%;
}

.bg_img .bg1 {
  background: url(https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100453566.png);
   background-size: 100% 100%;
}
.bg_img .bg2 {
  background: url(https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100453252.png);
   background-size: 100% 100%;
}
.bg_img .bg3 {
  background: url(https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100453887.png);
  background-size: 100% 100%;
}
.bg_img .bg4 {
  background: url(https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100453204.png);
   background-size: 100% 100%;
}
.bg_img .bg5 {
  background: url(https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100453725.png);
   background-size: 100% 100%;
}
.bg_img .bg6 {
  background: url(https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100453528.png);
   background-size: 100% 100%;
}

.bg_7 {
  background: url(https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100453187.png);
   background-size: 100% 100%;
}
.bg_8 {
  background: url(https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100455374.png);
   background-size: 100% 100%;
}
.bg_9 {
  background: url(https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100455278.png);
   background-size: 100% 100%;
}
.bg_10 {
  background: url(https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100455981.png);
   background-size: 100% 100%;
}
</style>
