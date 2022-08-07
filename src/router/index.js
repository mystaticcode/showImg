import {
	createRouter,
	createWebHashHistory
} from "vue-router";
//导出Home组件


const Home = () => import('@/components/home/Home.vue');
const User = () => import('@/components/user/User.vue');
const City = () => import('@/components/city/City.vue');
const Order = () => import('@/components/order/Order.vue');
const orderPage = () => import('@/components/order/orderPage.vue');
// const Detaillist = () => import('@/components/detail/Detaillist.vue');


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

	// {
	// 	path: '/detaillist',
	// 	name: 'Detaillist',
	// 	component: Detaillist,
	// },


];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
