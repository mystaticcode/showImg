<template>
	<div>
		
	
	<ul class="bottom">
		<li>
			<router-link to="/">
				<img :src="homeurl">
				<h3>首页</h3>
			</router-link>
		</li>
		<li>
			<router-link to="/order">
				<img :src="orderurl">
				<h3>订单</h3>
			</router-link>
		</li>
		<li>
			<router-link to="/user">
				<img :src="userurl">
				<h3>个人中心</h3>
			</router-link>
		</li>
	</ul>
	

	</div>
</template>

<script>
	export default{
		name:'Bottom',
		props:['propsurl'],
		data(){
			return{
				homeurl : '',
				orderurl : '',
				userurl : '',
			}
		},
		
		mounted(){
			this.homeurl = this.propsurl[0];
			this.orderurl = this.propsurl[1];
			this.userurl = this.propsurl[2];
		},
		
	}
</script>

<style scoped>
	
	
	a{
		text-decoration: none;
		color: black;
	}
	.bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: white;
		height: 1.3rem;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.bottom li{
		width: 30%;
		text-align: center;
		height: 1rem;
	}
	
	.bottom li img{
		width: 0.6rem;
		height: 0.6rem;
	}
	
	.bottom li h3{
		line-height: 0.5rem;
	}
	
</style>
