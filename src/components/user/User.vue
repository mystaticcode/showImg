<template>
	<div class="user">
		<BottomNav :propsurl='arrUrl'></BottomNav>
		<Top></Top>
		<Dingdan></Dingdan>
		<Money></Money>
		<Serviece></Serviece>
		<Reco></Reco>
	</div>
</template>

<script>
	import BottomNav from '../default/BottomNav.vue'
	import Top from './Top.vue'
	import Dingdan from './Dingdan.vue'
	import Money from './Money.vue'
	import Serviece from './Serviece.vue'
	import Reco from './Reco.vue'
	export default{
		name:'User',
		components:{
			BottomNav,
			Top,
			Dingdan,
			Money,
			Serviece,
			Reco
		},
		
		data(){
			return{
				arrUrl : ['bottoms/home.png' , 'bottoms/dingdan.png' , 'bottoms/slefs.png']
			}
		}
	}
</script>

<style scoped>
	::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>
