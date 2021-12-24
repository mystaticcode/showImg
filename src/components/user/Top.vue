<template>
		<div class="top">
		<aside>
			<p>
				<img src="../../../public/userimg/top/130.png" >
				<router-link to="/order">
				<span href="#" v-show="show">去登陆/注册</span>
				<span href="#">{{uname}}</span>
				</router-link>
				<img src="../../../public/userimg/top/122.png" class="img">
			</p>
			<span class="tip">新用户注册送388元大礼包</span>

		</aside>
		
		<div class="passport">
			<h3>未获得</h3>
			<p>
				<span><img src="../../../public/userimg/top/121.png" ></span>
			</p>
		
			<h4>游侠风户会员<span class="iconfont">立即开通<em class="font">&#xe62b;</em></span></h4>
			<h5>全站200+户外线路免费畅玩</h5>	
		</div>
		
	</div>
</template>

<script>
	import Cookies from 'js-cookie'
	export default{
		name:'Top',
		data(){
			return{
				uname : '',
				show : true
			}
		},
		
		created(){
			
			if(Cookies.get('show') == 1){
				this.uname = Cookies.get('phone');
				this.show = false;
			}
		},


	}
</script>

<style scoped>
	aside{
		width: 100%;
		height: 4rem;
		line-height: 5rem;
		background-size: 100% 100%;
		background-image: url(../../../public/userimg/top/129.png);
	
	}
	
	 aside{
		height: 4rem;
		
	}
	
	 aside p span{
		font-size: 0.5rem;
		font-weight: bold;
		position: relative;
		top: -0.45rem;
		left: 0.2rem;
		
	}
	
	 aside p img{
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 1.2rem;
		margin-left: 0.4rem;
	}
	aside p{
		height: 2rem;
		line-height: 4rem;
	}
	
	.tip{
		text-align: center;
		margin-left: 2rem;
		border-radius: 0.8rem;
		position: relative;
		top: -2.2rem;
		color: white;
		font-weight: bold;
		background: linear-gradient(to right,#ff6000,#ffa32c);
	}
	
	.img{
		transform: rotate(180deg);
		width: 0.34rem;
		height: 0.1rem;
		margin-bottom: 0.08rem;
		margin-left: -2.25rem;
	}
	
	.passport{
		margin-top: -1.3rem;
		width: 90%;
		margin-left: 5%;
		height: 2rem;
		margin-bottom: 0.5rem;
		background-size: 100% 100%;
		background-image: url(../../../public/userimg/top/124.png);
	}
	
	.passport p img{
		width: 1.5rem;
		margin-left: 0.3rem;
		
	}
	.passport h3{
		background-color: rgb(194, 194, 194);
		color: white;
		text-align: center;
		width: 1.5rem;
		height: 0.45rem;
		line-height: 0.45rem;
		border-radius: 0.18rem 0 0.2rem 0;
	}

	.passport p{
		width: 30;
		float: left;
	}

	.passport h4{
		font-size: 0.45rem;
		text-indent: 0.3rem;
		margin-bottom: 0.2rem;
	}

	.passport h4,h5{
		text-indent: 0.3rem;
		color: rgb(248, 241, 160);
		
	}

	.passport h4 span{
		float: right;
		font-size: 0.4rem;
		color: black;
		background: rgb(254, 244, 160);
		width: 2.4rem;
		height: 0.65rem;
		line-height: 0.75rem;
		text-align: center;
		margin-right: 0.2rem;
		border-radius: 0.8rem;
	}

	.font{
		font-weight: bold;
	}

</style>
