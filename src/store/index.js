import { createStore } from "vuex";
//全局变量[专门接受本地存储的数据]
let defaultCity = '广州';
//在localStorage对象初始化一个属性city的值
 if( localStorage.city){
	 //有值的
	 defaultCity = localStorage.city;
 }
export default createStore({
  state: {
	  //初始化一个变量:存储被选中的城市名
	  cityName : defaultCity,
	  show_hbs : ''
	 
  },
  mutations: {
	  //修改state数据的函数
	  changeCity( state , val){
		  //传新的城市过的的时候,直接将其传入本地
		  state.cityName = val;
		  localStorage.city = val;
	  }
  },
  actions: {},
  modules: {},
});
