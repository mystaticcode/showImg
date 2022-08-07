<template>
<div class="allCity">
		<div class="city_local">
			<p>定位/附近城市</p>
			<ul>
				<li><i class="iconfont">&#xe60c;</i>{{show}}</li>
			</ul>
		</div>
		<div class="city-histroy">
			<p>历史记录</p>
			<ul>
				<li v-for="item in hostlist" :key="item.code" @click="getCityName(item.name)" :class="{'default' : show==item.name}">{{item.name}}</li>
			</ul>
		</div>
		<div class="city-leval" v-for="(leval,index) in citylist" :key="index">
			<p>字母{{leval.initial}}开头的城市</p>
			<ul>
				<li v-for="key in leval.list" :key="key.name" @click="getCityName(key.name)" :class="{'default' : show==key.name}">
					{{key.name}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	//引入辅助函数
	import {mapMutations} from 'vuex';
	export default{
		name:'Data',
		data(){
			return{
				hostlist:[],
				citylist:[],
				show: '广州'
			}
		},
		
		mounted(){
			if(localStorage.city){
				this.show = localStorage.city;
			}
		},
		
		methods:{
			getCityName( cname ){
				//当点击某个城市时,获取传递过来的城市名称
				this.show = cname;
				//调用并传参被选中的城市名称进行传递
				this.changeCity(cname);
				//返回首页
				this.$router.push('/'); 
			},
			//激活方法
			...mapMutations(['changeCity'])
		},
		created() {
			let that = this;
			this.axios.get('./api/city.json').then((res)=>{
					
					let data = res.data.data;
					that.hostlist = data.hotCities;
					that.citylist = data.city;
					
			}).catch((error)=>{
				console.log(error);
			});
		}
	}
	
	
</script>

<style scoped>
	.allCity .default{
			
			background-color: #f3edcc;
			color: black;
	}
	.city_local p{
			height: 1rem;
			line-height: 1rem;
			color: gray;
			margin-left: 0.2rem;
	}
	.city_local ul li{
			color: gray;
			text-align: center;
			line-height: 1rem;
			width: 3rem;
			height: 1rem;
			font-weight: bold;
			background-color: rgb(244, 244, 244);
			list-style: none;
			margin-left: 0.5rem;
			border-radius: 0.6rem;	
	}
	.city-histroy {
			margin-top: 0.2rem;
			overflow: hidden;
			width: 100%;
	
	}
	.city-leval{
			width: 100%;
			overflow: hidden;
			margin-top: 0.2rem;
			border-top: 1px solid black;
	}
	.city-histroy  p{
			height: 1rem;
			line-height: 1rem;
			color: gray;
			margin-left: 0.2rem;
	}
	.city-leval p{
			display: block;
			line-height: 1rem;
			height: 1rem;
			color: gray;
			margin-left: 0.2rem;
	}
	.city-histroy  ul li ,.city-leval ul li{
			float: left;
			color: gray;
			text-align: center;
			line-height: 1rem;
			width: 2.6rem;
			height: 1rem;
			background-color: rgb(244, 244, 244);
			list-style: none;
			margin-left: 0.5rem;
			border-radius: 0.6rem;
			margin-bottom: 0.2rem;
	}
</style>

