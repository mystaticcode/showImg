<template>
	<div class="hong" @click="show()">
		
			<aside v-show="show_hb">
				<img src="../../../../public/hong/hong.png" >
				<h3>
					新用户注册领取388元大礼包
					<span>立即领取<i class="iconfont font">&#xe62b;</i></span>
				</h3>
			</aside>

	</div>
</template>

<script>
	import Cookies from 'js-cookie'
	export default{
		name:'Hongbao',
		data(){
			return{
				show_hb : true
			}
		},
		
		methods:{
			show(){
				this.$router.push('/order');
			}
		},
		
		created(){
			if(Cookies.get('show') == 1){
				this.show_hb = false;
			}
		},
		updated(){
			this.show_hb = this.$store.state.show_hbs;
		}
				
	}
</script>

<style>
	.hong aside{
		position: fixed;
		bottom: 1.35rem;
		z-index: 100;
		width: 100%;
		height: 1.3rem;
		line-height: 1.3rem;
		border-radius: 0.3rem 0.3rem 0 0;
		background-color: rgba(0,0,0,0.7);
	}
	
	.hong aside img{
		width: 1.1rem;
		height:1.1rem;
		float: left;
		margin-top: 0.15rem;
	}
	
	.hong aside h3{
		color: white;
		font-size: 0.4rem;
	}
	
	.hong aside h3 span{
		float: right;
		width: 2.6rem;
		height: 0.8rem;
		background-color: rgb(255, 198, 0);
		margin-right: 0.4rem;
		line-height: 0.8rem;
		align-items: center;
		margin-top: 0.28rem;
		text-align: center;
		border-radius: 0.5rem;
		
	}

	.font{
		font-weight: bold;
	}
</style>
