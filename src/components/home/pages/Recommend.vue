<template>
  <div class="menu">
    <div class="entry"></div>
    <ul class="icons">
      <li v-for="item in imgURL" :key="item.id">
        <router-link to="/">
          <img :src="item.imgURL" />
          <p>{{ item.txt }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      imgURL: [
        { id: 1, imgURL: "https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100209990.png", txt: "周边游" },
        { id: 2, imgURL: "https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100209991.png", txt: "国内游" },
        { id: 3, imgURL: "https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100209987.png", txt: "出境游" },
        { id: 4, imgURL: "https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100209988.png", txt: "自由行" },
        { id: 5, imgURL: "https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100209989.png", txt: "酒店民宿" },
      ],
    };
  },
};
</script>

<style>
.menu {
  height: 2.5rem;
  width: 100%;
}

.menu .entry {
  width: 100%;
  height: 0.9rem;
  border: none;
}

.icons {
  overflow: hidden;
}
a {
  text-decoration: none;
}

.icons li {
  float: left;
  width: 20%;
  text-align: center;
}
.icons li img {
  width: 0.8rem;
  height: 0.8rem;
}

.icons li p {
  color: #000000;
  padding-top: 0.15rem;
  padding-bottom: 0.5rem;
}
</style>
