<template>
	<div class="orderpage">
		<BottomNav :propsurl='arrUrl'></BottomNav>
		<div class="header">
			<aside>
				<span><router-link to="/"><i class="iconfont icon">&#xe625;</i></router-link></span>
				
				<span @click="show_titles()">全部订单<i class="iconfont" :class="{'default-title' : show_icon}">&#xe6bb;</i></span>
				
			</aside>
			
		</div>
		
		<div class="header_nav">
				<p v-for="item in nav_list" :key="item.id" :class="{'default_nav' : show_nav===item.nav}" @click="getNav(item.nav)">{{item.nav}}</p>	
		</div>
		
		
		<div class="show_txt" v-show="show_title">
			<span v-for="item in nav_sonlist" :key="item.id" :class="{'defaults' : show_son == item.nav}" @click="getName(item.nav)">{{item.nav}}</span>
		</div>	
		
		
		<div class="bt_content">
			<img src="../../../public/dingdan/dingdan_bg.png" >
			<p>这里什么也没有</p>
			<p>继续去探索未知的新世界吧</p>
		</div>
		
	</div>
</template>

<script>
	import BottomNav from '../default/BottomNav.vue'
	export default{
		name : 'orderPage',
		components:{
			BottomNav
		},
		
		data(){
			return{
				arrUrl : ['bottoms/home.png' , 'bottoms/dingdans.png' , 'bottoms/slef.png'],
				
				nav_list : [],
				nav_sonlist : [],
				
				show : '',
				show_title : '',
				show_icon : '',
				show_son : '',
				show_nav : ''
				
			}
		},
		methods:{
			show_titles(){
				if(this.show_title == false){
					this.show_title = !false;
					this.show_icon = !false
				}else if(this.show_title == true){
					this.show_title = !true;
				}
			},

			getName(val){
				this.show_son = val;
			},

			getNav(val){
				this.show_nav = val
			}
		},
		
		
		created(){
			//备份
			let that = this;
			//向dataHome.json文件发起异步请求
			this.axios.get('/api/dataHome.json').then((res)=>{
				if(res.status === 200){
					let data = res.data.Homemsg[0];
					//提取banner组件的数据
					that.nav_list = data.nav_list;
					that.nav_sonlist = data.nav_sonlist;
				}
			}).catch((error)=>{
				console.log(error)
			});
		}
		
	}
</script>

<style scoped>
	.header{
		width: 100%;
		height: 1rem;
		background-color: rgb(245, 245, 245);
	}
	
	.header aside{
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		
	}
	
	.header aside span:first-child{
		width: 40%;
	}
	
	.header aside span:first-child i{
		font-size: 0.5rem;
		font-weight: bold;
		padding-left: 0.4rem;
	}
	
	.header aside span:last-child{
		width: 60%;
		float: right;
		font-size: 0.4rem;
		font-weight: bold;
	}
	
	.header_nav{
		width: 100%;
		height: 0.8rem;
		line-height: 0.8rem;
		background-color: rgb(245, 245, 245);
		
	}
	
	.default_nav{
		border-bottom: 2px solid #E6C81A;
	}

	
	.defaults{
		width: 0.05rem;
		background-color: #E6C81A;
	}
	
	.header_nav p{
		width: 19%;
		float: left;
		margin: 0 0.05rem;
		text-indent: 0.2rem;
	}
	
	
	.header_nav span{
		margin: 0 0.8rem;
		background-color: #E6C81A;
	}
	
	.default-span{
		display: block;
		background-color: gold;
		height: 0.1rem;
		width: 1rem;
		position: absolute;
		left: -0.65rem;
		bottom:90%
	}
	
	.default-title{
		transform:rotate(90deg);
	}
	
	.default-son{
		background-color: gold;
	}
	

	.content{
		float: none;
		float: initial;
		width: 100%;
		height: 15rem;
		background-color: rgb(245, 245, 245);
	}
	
	.content h3{
		padding-top: 5rem;
	}
	
	.content h3,h4{
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0.1rem 0;
		font-size: 0.4rem;
	}
	
	.show_txt{
		width: 100%;
		height: 3.5rem;
		position: relative;
		z-index: 100;
		top: -1rem;
		background-color: rgb(245, 245, 245);
	}
	
	.show_txt span{
		width: 20%;
		float: left;
		height: 0.8rem;
		line-height: 0.8rem;
		text-align: center;
		border-radius: 0.1rem;
		margin: 0.1rem 0.2rem;
	}
	
	.bt_content{
		height: 20rem;
		position: relative;
		top: -1rem;
		background-size: 100% 100%;
		background-color: white;
	}
	
	.bt_content img{
		margin-top: 4rem;
		width: 100%;
		/* height: 2rem; */
	}
	
	.bt_content p{
		text-align: center;
		font-size: 0.4rem;
	}

	
	

	
</style>
