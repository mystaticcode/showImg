<template>
	<div class="cate-tabs">
		<div class="max">
			<img :src="tab2[0].imgURL" >
			<p>
				<strong>{{tab2[0].title}}——{{tab2[0].msg}}</strong>
				<em>￥{{tab2[0].price}}</em>
			</p>
		</div>
		<div class="cate-tabs2 swiper">
			<ul class="swiper-wrapper">
				<template v-for="items in tab2" >
					<li v-if="items.id>1" :key="items.id" class="tabs-botm swiper-slide">
						<article>
							<img :src="items.imgURL" >
							<aside>
								<span>{{items.city}}</span>
								<h3>{{items.title}}</h3>
								<label>{{items.msg}}</label>
								<p>￥{{items.price}}起</p>
							</aside>
						</article>
								
					</li>
				</template>
			
			</ul>
		</div>
		
		<div class="btom">
			<hr >
			<router-link to="/">
				<aside class="iconfont mores">查看更多&#xe62b;</aside>
			</router-link>
		</div>
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
		name:'CategoryTab2',
		props:['tab2'],
		data(){
			return{
				
			}
		},

			mounted(){
				new Swiper( '.cate-tabs2' , {
					slidesPerView : 3,
				})
			}
		}
	
</script>

<style scoped>
	
	.btom{
		width: 100%;
		height: 0.9rem;
		text-align: center;
		background-color: white;
		line-height: 0.9rem;
	}
	.max img{
		width: 100%;
		height: 100%;
		border-radius: 0.3rem 0.3rem 0rem 0;
	}
	
	.max p{
		width: 100%;
		height: 0.5rem;
		color: white;
		position: relative;
		top: -0.5rem;
		line-height: 0.5rem;
		background-color: rgba(0, 0, 0,0.5);
	}
	
	.max p em{
		margin-right: 0.2rem;
		color: rgb(230, 133, 45);
		float: right;
	}
	
	.tabs-botm img{
		width: 100%;
		height: 100%;
	}
	
	.tabs-botm h3{
		font-weight:bold;
		font-size: 0.1rem;
		padding-top: 0.2rem;
		padding-bottom: 0.1rem;
	}
	
	.tabs-botm aside label{
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: rgb(178, 178, 178);
	}
	

	
	.tabs-botm p{
		color: rgb(255, 146, 54);
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		
	}
		
	.tabs-botm ul li{
		
		width: 100%;
		height: 100%;
		
	}
	
	.tabs-botm aside{
		position: relative;
		top: -0.5rem;
	}
	
	.tabs-botm img{
		width: 95%;
		height: 100%;
		border-radius: 0.3rem;
	}
	
	.tabs-botm span{
		position: relative;
		top: -1.25rem;
		left: -0.011rem;
		color: white;
		border-radius: 0.3rem 0 0.25rem 0;
		background-color: rgba(0, 0, 0,0.8);
	}
	
	
	.cate-tabs2{
		/* position: relative;
		top: -0.60rem;
		left: 0.15rem; */
		
		margin-top: 0.1rem;
	}

	.mores{
		border: 1px solid gainsboro;
		border-radius: 0.6rem;

	}
	
	
</style>