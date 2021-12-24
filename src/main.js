import {
	createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//1.引入reset.css——重置样式
import './assets/css/reset.css';
// 3.引入图标
import './assets/css/iconfont.css'
//4.引入swiper组件样式
import 'swiper/swiper-bundle.min.css';
//基础样式
import 'swiper/swiper.min.css';
//5.引入移动设备样式基数配置
import 'lib-flexible/flexible.js';

//引入fastclick模块
import FastClick from 'fastclick';
//将整个
FastClick.attach(document.body);

//引入axios
import axios from 'axios';
import VueAxios from 'vue-axios';

createApp(App).use(store).use(router).use(VueAxios , axios).mount("#app");
