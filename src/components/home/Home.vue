<template>
	<div>
		<Banner></Banner>
		<Recommend></Recommend>
		<Bg></Bg>
		<Spike :propspike="SpikeList"></Spike>
		<Category></Category>
		<BottomNav :propsurl='arrUrl'></BottomNav>
		<Xiao></Xiao>
		<Hongbao></Hongbao>
		<Tranvel></Tranvel>
	</div>
</template>

<script>
	//引入Banner组件
	import Banner from './pages/Banner.vue'
	import Recommend from './pages/Recommend.vue'
	import Bg from './pages/Bg.vue'
	import Category from './pages/Category.vue'
	import BottomNav from '../default/BottomNav.vue'
	import Spike from './pages/Spike.vue'
	import Xiao from './pages/Xiao.vue'
	import Hongbao from './pages/Hongbao'
	import Tranvel from './pages/Tranvel.vue'
	//导出组件
	export default{
		name:'Home',
		//组件列表的调用
		components:{
			Banner,
			Recommend,
			Bg,
			Category,
			BottomNav,
			Spike,
			Xiao,
			Hongbao,
			Tranvel
		},
		data(){
			return{
				arrUrl : ['bottoms/homes.png' , 'bottoms/dingdan.png' , 'bottoms/slef.png'],
				bannerList : [],
				SpikeList : {},
			}
		},
		created(){
			//备份
			let that = this;
			//向dataHome.json文件发起异步请求
			this.axios.get('/api/dataHome.json').then((res)=>{
				let data = res.data.Homemsg[0];
				//提取banner组件的数据
				that.bannerList = data.BannerVueList;
				this.SpikeList = data.SpikeVueList;
			}).catch((error)=>{
				console.log(error)
			});
		}
	}
</script>

<style>
</style>


