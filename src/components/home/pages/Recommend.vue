<template>
	<ul class="icons">
		<li v-for="item in imgURL" :key="item.id">
			<router-link to="/">
				<img :src="item.imgURL" />
				<p>{{item.txt}}</p>
			</router-link>
		</li>
	</ul>
</template>

<script>
	export default{
		name:'Recommend',
		data(){
			return{
				imgURL:[
					{id:1,imgURL:'imgs/01.png',txt:'周边游'},
					{id:2,imgURL:'imgs/02.png',txt:'国内游'},
					{id:3,imgURL:'imgs/03.png',txt:'出境游'},
					{id:4,imgURL:'imgs/04.png',txt:'自由行'},
					{id:5,imgURL:'imgs/05.png',txt:'酒店民宿'},
				],
			}
		}
	}
</script>

<style>
	
	.icons{
		border-bottom: 0.03rem solid #d3d3d3;
		overflow: hidden;
		padding: 0.8rem 0 0;

		
	}
	a{
		text-decoration: none;
	}
	
	.icons li{
		float: left;
		width: 20%;
		text-align: center;
	}
	.icons li img{
		width: 1rem;
		height: 1rem;
	}
	
	.icons li p{
		color: #000000;
		padding-top: 0.15rem;
		padding-bottom: 0.5rem;
	}
</style>
