<template>
	<div class="cate-tab1 swiper">
		<ol class="swiper-wrapper">
			<!-- 计算属性的返回结果【重组的数组】，丢给循环操作 -->
			<li v-for="(list , index) in pages" :key='index.id' class="swiper-slide">
				
				<router-link to="/" v-for="item in list" :key="item.id" class="imgs">
					<img :src="item.imgURL"/>
					<aside>
						<h3>{{item.title}}</h3>
						<label>{{item.msg}}</label>
						<p>￥{{item.price}}起<em>{{item.oldprice}}</em></p>
					</aside>
					
				</router-link>
			</li>
		</ol>
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
	
	// //3.swiper组件应用配置
	Swiper.use([Autoplay,EffectCoverflow,EffectCube,Pagination]);
	export default{
		name:'CategoryTab1',
		props:['tab1'],
		data(){
			return{
				tablists : []
			}
		},
		computed:{
			//程序将其当成是属性而不是函数,是个变量 【循环/判断】
			pages(){
				let arr = []; // 空数组，目的是：重组一个二维数组
				let num = 4; //每页条数
				//将原数组遍历
				this.tab1.forEach((item , index)=>{
					//i:每页的页码
					let i =Math.floor(index / num);
						if(!arr[i]) arr[i]=[];
						arr[i].push(item);
					
				});
				return arr;
			}
			
		},
		
		mounted(){
			new Swiper( '.cate-tab1' , {
				observerParents:true,
				observer:true,//修改swiper自己或子元素时，自动初始化swiper
				slidesPerView : 1,

			})
		}
		
		
		
		
	}
</script>

<style scoped>
	.cate-tab1{
		height: 8.8rem;
		
		}
		
	.cate-tab1 ol{
		width: 100%;
		height: 90%;
	}
	.cate-tab1 ol li{
		float: left;
		width: 100%;
		height: 100%;
		
	}
	
	.imgs img{
		width: 100%;
		height: 100%;
		border-radius: 0.3rem;
		margin-top: 0.3rem;
	}
	
	
	
	.cate-tab1 ol li a{
		width: 48%;
		
	}
	
	.cate-tab1 ol li a:nth-child(even){
		width: 48%;
		float: right;
	}
	
	.cate-tab1 ol li a{
		float: left;
	} 
	
	.imgs h3{
		font-weight:bold;
		font-size: 0.1rem;
		padding-top: 0.2rem;
		padding-bottom: 0.1rem;
	}
	.imgs aside label{
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: rgb(178, 178, 178);
	}
	
	.imgs p{
		padding-top: 0.1rem;
		color: rgb(255, 146, 54);
	}
	
	
	.imgs p em{
		margin: 0 0.2rem 0 0.2rem;
		color: rgb(178, 178, 178);
		text-decoration: line-through;
	}
	
	
</style>
