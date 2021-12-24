import {
	createRouter,
	createWebHistory
} from "vue-router";
//导出Home组件
import Home from '../components/home/Home.vue'
import Order from '../components/order/Order.vue'
import User from '../components/user/User.vue'
import City from '../components/city/City.vue'
import orderPage from '../components/order/orderPage.vue'
import Detaillist from '../components/detail/Detaillist.vue'
const routes = [{
		//路由地址为空
		path: '/',
		//命名路由
		name: 'Home',
		//调用Home组件
		component: Home,

	},
	{
		path: '/order',
		name: 'Order',
		component: Order,
	},
	{
		path: '/user',
		name: 'User',
		component: User,
	},

	{
		path: '/city',
		name: 'City',
		component: City,
	},

	{
		path: '/orderpage',
		name: 'orderPage',
		component: orderPage,
	},

	{
		path: '/detaillist',
		name: 'Detaillist',
		component: Detaillist,
	},


];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
