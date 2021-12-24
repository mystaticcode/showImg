<template>
	<div class="city">
		<aside>
			<router-link to="/">
				<i class="iconfont">&#xe625;</i>
			</router-link>
			<span>选择城市</span>

		</aside>
		<Date></Date>
	</div>
</template>

<script>
	
	import Date from './Date.vue'
	export default{
		name:'City',
		components:{
			Date
		}
		
	}
</script>

<style scoped>
	.city aside{
		width: 100%;
		height: 1.2rem;
		text-align: center;
		line-height: 1.2rem;
		background-color: #E6C81A;
	}
	
	.city aside span{
			font-size: 0.4rem;
			font-weight: bold;

	}
	.city aside i{
		float: left;
		margin-left: 0.2rem;
		font-size: 0.5rem;
		font-weight: bold;
	}
	
</style>
