<template>
	
	
	<div class="i">
		
		<div class="topimgs">
		<div class="nav1"><p>主题游<br/><br/><span>个性独创</span></p></div>
		<div class="nav2">亲子游</div>
		<div class="nav3">摄影游</div>
		<div class="nav4">户外游</div>
		<div class="nav5">活动赛事</div>
		<div class="nav6">瑜伽行</div>
		<div class="nav7">野奢邦</div>
		</div>


		<ul class="bos">
			<li v-for="item in bgs" :key="item.id">
				<img :src="item.imgs" >
			</li>
			
			<div class="ism" ><i v-for="item in bgs" :key="item.id">{{item.txt}}</i></div>
		
		</ul>
		
	</div>
</template>

<script>
	export default{
		name:'Bg',
		data(){
			return{
				bgs:[
					{id:1, imgs:'bg/08.png',txt:'定制游'},
					{id:2, imgs:'bg/09.png',txt:'签证'},
					{id:3, imgs:'bg/10.png',txt:'邮轮'},
					{id:4, imgs:'bg/11.png',txt:'美宿度假'},
				],
			}
		}
	}
</script>

<style scoped>

	*{
		margin: 0;
		padding: 0;
	}
	.bos li img{
		width: 25%;
		float: left;
	}
	
	.bos{
		
		width: 100%;
		position: relative;
		top: -2rem;
	}
	
	.ism{
		font-weight: bold;
	}
	
	
	.ism i:first-child{
		position: relative;
		top: -0.5rem;
		left: 0.8rem;
	}
	.ism i:nth-child(2){
		position: relative;
		top: -0.5rem;
		left: 2.3rem;
	}
	
	.ism i:nth-child(3){
		position: relative;
		top: -0.5rem;
		left: 4rem;
	}
	
	.ism i:nth-child(4){
		position: relative;
		top: -0.5rem;
		left: 5.5rem;
	}
	
	.tops{
		width: 100%;
	}
	
	.tops{
		float: left;
	}
	
	.tops li img{
		width: 100%;
		height: 100%;
		
	}
	
	.tos i:first-child{
		position: relative;
		top: -1.7rem;
		left: 1rem;
	}
	
	.tos i:first-child span{
	
		background-color: gold;
	}

	.topimgs{
		width: 100%;
		height: 4rem;
		/* background-color: deepskyblue; */
	}
	.nav1{
		height: 49.5%;
		width: 25%;
		float: left;
		border: none;
		background: url(../../../../public/bg/01.png);
		background-size: 100% 100%;
		text-align: center;
		font-weight: bold;
	}
	
	.nav1 p{
		position: relative;
		top: 0.5rem;
		font-weight: bold;
	}
	
	.nav1 span{
		background-color: #FFD700;
		border-radius: 3rem;
		font-weight: bold;
	}
	
	.nav2{
		
		background: url(../../../../public/bg/02.png);
		
	}
	.nav3{
		
		background: url(../../../../public/bg/03.png);
		
	}
	.nav4{
		
		background: url(../../../../public/bg/04.png);
		
	}
	.nav5{
		
		background: url(../../../../public/bg/05.png);
		
	}
	.nav6{
		
		background: url(../../../../public/bg/06.png);
		
	}
	.nav7{
		
		background: url(../../../../public/bg/07.png);
	
	}
	
	.nav2,.nav3,.nav4,.nav5,.nav6,.nav6,.nav7{
		height: 25%;
		width: 25%;
		float: left;
		border: none;
		text-align: center;
		line-height: 1rem;
		background-size: 100% 100%;
		font-weight: bold;
	}
	
	
 
</style>
