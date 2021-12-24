<template>
  <div class="reco">
    <p>
      <img src="reco/head1.png" alt="" />
      <span>精选推荐</span>
      <img src="reco/head2.png" alt="" />
    </p>
    <div class="res">
      <ul>
        <li v-for="item in recoimg" :key="item.id">
          <h3>{{ item.title }}</h3>
          <img :src="item.imgs" />
          <aside>
            <label>{{ item.txt }}</label>
            <h5>
              ￥{{ item.price }}起<em>{{ item.days }}</em>
            </h5>
          </aside>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:'Reco',
    data(){
        return{
			    recoimg:[]
        }
    },

    created(){
		//备份
		let that = this;
		//向dataHome.json文件发起异步请求
		this.axios.get('/api/dataHome.json').then((res)=>{
			let data = res.data.Homemsg[0];
			//提取reco组件的数据
			that.recoimg = data.recoimg;
		}).catch((error)=>{
			console.log(error)
		});
	}

}
	
</script>

<style scoped>
.reco {
  width: 100%;
  margin-top: 0.5rem;
  height: 58rem;
  background-color: rgb(245, 245, 245);
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

.res ul li {
  width: 50%;
  display: inline-block;
}
.res {
  display: flex;
}

.res ul li img {
  width: 90%;
  margin-left: 0.2rem;
  display: inline-block;
  border-radius: 0.2rem;
}

.res ul li h3 {
  width: 73%;
  height: 0.45rem;
  line-height: 0.45rem;
  position: relative;
  top: 0.63rem;
  color: white;
  margin-left: 0.20rem;
  text-indent: 0.3rem;
  border-radius: 0 0.3rem 0.3rem 0;
  background-color: rgba(0, 0, 0, 0.45);
}

.res ul li aside {
  margin-bottom: 0.3rem;
}

.res ul li aside label {
  width: 4rem;
  font-size: 0.35rem;
  margin-left: 0.1rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.res ul li aside h5 {
  margin-top: 0.3rem;
  font-size: 0.35rem;
  font-weight: bold;
  color: rgb(255, 113, 0);
  width: 100%;
}

.res ul li aside h5 em {
  width: 1.6rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  float: right;
  color: gray;
  font-weight: initial;
  margin-right: 0.3rem;
  background-color: gainsboro;
}
</style>

