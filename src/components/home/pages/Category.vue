<template>
	<div class="category">
		<ul class="title-ul">
			<li v-for="item in tabs" :key="item.id" :class="{'default' : iscur===item.id}" @click="iscur=item.id">
				{{item.name}}
				<span class="default-span"></span>
			</li>
			
		</ul>
		<CategoryTab1 v-if='iscur === 1' :tab1="tabList_list"></CategoryTab1>
		<CategoryTab2 v-if='iscur === 2' :tab2="tablist_lists"></CategoryTab2>
	</div>
</template>

<script>
	
	import CategoryTab1 from './CategoryTab1.vue'
	import CategoryTab2 from './CategoryTab2.vue'
	export default{
		name:'Category',
		components:{
			CategoryTab1,
			CategoryTab2
		},
		data(){
			return{
				tabs:[
					{id:1,name:'热门度假'},
					{id:2,name:'热门景点'},
				],
				iscur : 1,//默认选中第一个标题以及第一个组件
				tabList_list : [],
				tablist_lists : []
				
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
					that.tabList_list = data.tabList;
					that.tablist_lists = data.tabs2List;
				}
				
			}).catch((error)=>{
				console.log(error)
			});
		}
		
	}
</script>

<style>
	.category{
		width: 90%;
		margin: 0.5rem auto;
		height: 10.3rem;
		position: relative;
		top: -1.8rem;
	}
	
	.category .title-ul{
		height: 1.17rem;
		background-color: #EEEEEE;
		width: 100%;
		border-radius: 0.3rem;
		display: flex;
		align-items: center;
	}
	
	.category .title-ul li{
		width: 50%;
		text-align: center;
		line-height: 1.17rem;
		font-size: 0.35rem;
		font-weight: bold;
		border-radius: 0.3rem;
		position: relative;
	}
	.category .title-ul .default{
		background-color: white;
	}
	.category .title-ul .default .default-span{
		display: block;
		background-color: gold;
		height: 0.1rem;
		width: 1rem;
		position: absolute;
		left: 39%;
		bottom: 18%;
	}
</style>
