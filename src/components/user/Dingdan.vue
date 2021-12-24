<template>
	<div class="content">

	<ul class="dingdan">
			<aside>
				<h4>全部订单</h4>
				<h5>查看全部></h5>
			</aside>
		<router-link to="/order">
		<li v-for="item in this.dingdans" :key="item.id">
				
				<img :src="item.imgs" >
				<p>{{item.txt}}</p>
				
		</li>
		</router-link>
	</ul>
	</div>
</template>


<script>
export default {
    name:'Dingdan',
	data(){
		return{
			dingdans:[
				{id:1,imgs:'dingdan/01.png' , txt:'待付款'},
				{id:2,imgs:'dingdan/02.png' , txt:'已付款'},
				{id:3,imgs:'dingdan/03.png' , txt:'待评价'},
				{id:4,imgs:'dingdan/04.png' , txt:'退款/售后'},
			]
				
			
		}
	}
}
</script>


<style scoped>

	.dingdan{
		width: 95%;
		margin-left: 2.5%;
		overflow: hidden;
		padding: 0.8rem 0 0;
		background-color: white;
		height: 2.3rem;
		border-radius: 0.3rem;
		position: relative;
		top: 0.35rem;


	}
	.content{
		margin-top: -0.5rem;
		height: 3.8rem;
		z-index: -100;
		background-color: rgb(245, 245, 245);
	}
	
	a{
		text-decoration: none;
	}
	
	.dingdan li{
		float: left;
		width: 25%;
		text-align: center;
	}
	.dingdan li img{
		width: 1rem;
		height: 1rem;
	}
	
	.dingdan li p{
		color: #000000;
		padding-top: 0.15rem;
		padding-bottom: 0.5rem;
	}
    .dingdan aside h4{
		width: 80%;
		font-size: 0.4rem;
		float: left;
		text-indent: 0.5rem;
	}
	
	.dingdan aside h5{
		width: 20%;
		text-indent: -0.15rem;
		float: right;
		color: #D3D3D3;
	}
	
	.dingdan aside{
		height: 0.5rem;
		margin-top: -0.2rem;
		margin-bottom: 0.1rem;
	}

</style>