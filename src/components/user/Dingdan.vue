<template>
  <div class="content">
    <ul class="dingdan">
      <aside>
        <h4>全部订单</h4>
        <h5>查看全部></h5>
      </aside>
      <router-link to="/order">
        <li v-for="item in this.dingdans" :key="item.id">
          <img :src="item.iconUrl" />
          <p>{{ item.title }}</p>
        </li>
      </router-link>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Dingdan",
  data() {
    return {
      dingdans: [
        {id:1,title:'待付款' ,iconUrl:"https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100228378.png"},
        {id:2,title:'已付款' ,iconUrl:"https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100232117.png"},
        {id:3,title:'待评价' ,iconUrl:"https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100233272.png"},
        {id:4,title:'退款/售后' ,iconUrl:"https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100233361.png"}
      ],
    };
  },

  methods: {
    // //获取图片路径(解决图片请求403)
    // getContent(images) {
    //   //返回拼接后的图片路径
    //   if (images) {
    //     let url = `https://images.weserv.nl?url=${images}`;
    //     return url;
    //   }
    // },
  },

  // created() {
  //   this.axios
  //     .get(`https://m.youxiake.com/api/m/orders/base/count`)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         this.dingdans = res.data.data.orderCountList;
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};
</script>


<style scoped>
.dingdan {
  width: 95%;
  margin-left: 2.5%;
  overflow: hidden;
  padding: 0.8rem 0 0;
  background-color: white;
  height: 2.3rem;
  border-radius: 0.3rem;
  position: relative;
  top: 0.35rem;
}
.content {
  margin-top: -0.5rem;
  height: 3.8rem;
  z-index: -100;
  background-color: rgb(245, 245, 245);
}

a {
  text-decoration: none;
}

.dingdan li {
  float: left;
  width: 25%;
  text-align: center;
}
.dingdan li img {
  width: 1rem;
  height: 1rem;
}

.dingdan li p {
  color: #000000;
  padding-top: 0.15rem;
  padding-bottom: 0.5rem;
}
.dingdan aside h4 {
  width: 80%;
  font-size: 0.4rem;
  float: left;
  text-indent: 0.5rem;
}

.dingdan aside h5 {
  width: 20%;
  text-indent: -0.15rem;
  float: right;
  color: #d3d3d3;
}

.dingdan aside {
  height: 0.5rem;
  margin-top: -0.2rem;
  margin-bottom: 0.1rem;
}
</style>