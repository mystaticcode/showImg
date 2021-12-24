<template>
	<div class="xiao">
		<aside>
			<h3>小众种草</h3>
			<span>游侠客独一无二的体验</span>
			
			<div class="xiaos swiper">
				<ul class="imgs swiper-wrapper">
				<li v-for="item in imgs" :key="item.id" class="swiper-slide">
					<img :src="item.img" >
					<h4>{{item.mtxt}}</h4>
					<h5>{{item.mitxt}}</h5>
				</li>
			</ul>
			</div>
			</aside>
	</div>
</template>

<script>
	import { onMounted } from 'vue';
	
	//引入Swiper的动态组件
	import Swiper , {
		Autoplay,
		EffectCoverflow,
		EffectCube,
		Pagination,
	}from 'swiper';
	
	//3.swiper组件应用配置
	Swiper.use([Autoplay,EffectCoverflow,EffectCube,Pagination]);
	export default{
		name:'Xiao',
		data(){
			return{

				imgs:[]
			}
		},
		// setup(){
		// 	onMounted( ()=>{
				
		// 	})
		// },


		updated(){
			new Swiper( '.xiaos' , {
					slidesPerView : 3,
				})
		},
		
		
		
		created(){
			//备份
			let that = this;
			//向dataHome.json文件发起异步请求
			this.axios.get('/api/dataHome.json').then((res)=>{
				let data = res.data.Homemsg[0];
				//提取banner组件的数据
				that.imgs = data.imgs;
			}).catch((error)=>{
				console.log(error)
			});
		}
		
	}
</script>

<style scoped>
	.xiao{
		width: 100%;
		height: 2.6rem;
		position: relative;
		top: -1.9rem;
	}
	.xiao aside{
		width: 100%;
		line-height: 1.3rem;
		margin: 0 0.2rem;
	}
	
	.xiao aside h3{
		width: 25%;
		float: left;
		font-size: 0.5rem;
		font-weight: bold;
		margin-left: 0.3rem;
	}
	
	.xiao aside span{
		width: 75%;
		font-size: 0.2rem;
		background-color: rgba(255, 176, 121,0.3);
		color: rgb(255, 176, 121);
		border-radius: 0.25rem;
	}
	
	.imgs li{
		width: 4.2rem;
		height: 4.6rem;
		
	}
	

	
	.imgs{
		height: 6.4rem;
	}
	
	.imgs li img{
		width: 98%;
		height: 100%;
	}
	
	.imgs li:first-child img{
		border-radius: 0.3rem 0rem 0rem 0.3rem;
	}
	
	.imgs li:last-child img{
		border-radius: 0rem 0.3rem 0.3rem 0rem;
	}
	
	
	h4,h5{
		position: relative;
		top: -3.5rem;
		color: white;
		z-index: 100;
		text-align: center;
	}
	
	.imgs li h4{
		font-size: 0.45rem;
		font-weight: bold;
		position: relative;
		top: -2.5rem;
	}
	
	.imgs li h5{
		position: relative;
		top: -3.1rem;
		font-weight: bold;
		font-size: 0.4rem;
		z-index: 100;
	}

</style>
