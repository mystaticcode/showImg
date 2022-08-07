<template>
  <div class="reco">
    <p>
      <img src="https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100215503.png" alt="" />
      <span>精选推荐</span>
      <img src="https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100215502.png" alt="" />
    </p>
    <div class="products">
      <div class="card" v-for="item in recoimg" :key="item.pid">
        <h5>
          <label>{{ item.theme_label }}</label>
          <span>|</span>
          <label>{{ item.place_label }}</label>
        </h5>
        <div class="image">
          <img :src="getContent(item.img)" />
        </div>
        <aside>
          {{ item.name }}
        </aside>
        <h6>
          <label
            ><em>￥{{ item.minprice }}</em
            >起</label
          >
          <i>{{ item.days }}</i>
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reco",
  data() {
    return {
      recoimg: [],
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

  created() {
    this.axios
      .get(`https://m.youxiake.com/api/m/product/lines/recommend/user`)
      .then((res) => {
        if (res.status === 200) {
          this.recoimg = res.data.data.products;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-style: initial;
}


::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
.reco {
  width: 99%;
  margin-top: 0.5rem;
  height: auto;
  background-color: rgb(245, 245, 245);
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

.products {
  width: 98%;
  height: auto;
  margin: 0 1%;
  padding-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
}

.products .card {
  width: 48%;
  height: 5rem;
  margin: 0.2rem 1%;
}

.products .card .image {
  width: 100%;
  height: 3rem;
  border-radius: 0.3rem;
}

.products .card .image img {
  width: 100%;
  height: 100%;
}

.products .card h5 {
  position: relative;
  top: 0.8rem;
  width: 80%;
  padding: 0 0.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0 0.3rem 0.3rem 0;
  color: white;
}

.products .card h5 label {
  display: inline-block;
  margin: 0 0.1rem;
}

.products .card aside {
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 96%;
  margin: 0.2rem 2%;
  font-size: 0.4rem;
  line-height: 0.5rem;
}

.products .card .h6 {
  width: 96%;
  margin: 0.2rem 2%;
}

.products .card h6 label {
  color: gray;
}

.products .card h6 label em {
  font-weight: bold;
  color: #fe7506;
  font-size: 0.45rem;
}

.products .card h6 i {
  display: block;
  float: right;
  background-color: #eeeeee;
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.2rem;
  color: gray;
  margin-right: 0.2rem;
}

</style>

