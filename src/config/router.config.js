import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = function (resolve) {require(['../page/home/Home.vue'], resolve)};
const Column = function (resolve) {require(['../page/column/Column.vue'], resolve)};
const Mine = function (resolve) {require(['../page/my/Mine.vue'], resolve)};
const Fenxz = function (resolve) {require(['../components/columnComponent/bodyChild/fenxz.vue'], resolve)};
const Kaind = function (resolve) {require(['../components/columnComponent/bodyChild/kaind.vue'], resolve)};
const Shijg = function (resolve) {require(['../components/columnComponent/bodyChild/shijg.vue'], resolve)};
const Yingyj = function (resolve) {require(['../components/columnComponent/bodyChild/yingyj.vue'], resolve)};
const Zhibgg = function (resolve) {require(['../components/columnComponent/bodyChild/zhibGG.vue'], resolve)};
const details = function (resolve) {require(['../components/columnComponent/bodyChild/fenxzChild/fenpart.vue'],resolve)};
const zbDtails = function (resolve) {require(['../components/columnComponent/bodyChild/zhib/zhibDtails.vue'],resolve)};
const activity = function (resolve) {require(['../components/columnComponent/bodyChild/zhib/activity.vue'], resolve)};
const goods = function (resolve) {require(['../components/GoodsDetails/goods.vue'], resolve)};
const banner1 = function (resolve) {require(['../components/GoodsDetails/classify1.vue'], resolve)};
const banner2 = function (resolve) {require(['../components/GoodsDetails/classify2.vue'], resolve)};

// mine
const nologin = function (resolve){require(['../components/mineComponent/nologin.vue'],resolve)};
const login = function (resolve){require(['../components/mineComponent/login.vue'],resolve)};
const registered = function (resolve){require(['../components/mineComponent/registered.vue'],resolve)};
const logged = function (resolve){require(['../components/mineComponent/logged.vue'],resolve)};
const mycollect = function (resolve){require(['../components/mineComponent/logged/mycollect.vue'],resolve)};
const mymsg = function (resolve) {require(['../components/mineComponent/logged/mymsg.vue'],resolve)};

const route = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/column/',
			component: Column,
			
			children:[
				{
					path:'fenxz/',
					component:Fenxz,
					children: [
					{
						path:'details/',
						 component:details
						}
					]
				},
				{
					path:'kaind/',
					component:Kaind
				},
				{
					path:'shijg/',
					component:Shijg
				},
				{
					path:'zhibgg/',
					component:Zhibgg,
					children: [
						{
							path:'zbDtails/',
							component:zbDtails
						}
					]
				},
				{
					path:'yingyj/',
					component:Yingyj
				}
			]
		},
		{
			path: '/mine/',
			component: Mine,
			children:[
				{
					path:"nologin/",
					component:nologin
				},
				{
					path:'login/',
					component:login
				},
				{
					path:"registered/",
					component:registered
				},
				{
					path:'logged/',
					component:logged
				},
				{
					path:"logged/mycollect",
					component:mycollect
				},
				{
					path:"logged/mymsg",
					component:mymsg
				}
			]
		},
		{
			path: '/activity/',
			component: activity
		},
		{
			path: '/goods/',
			component: goods,
			children:[
				{
					path:'bannero',
					component:banner1,
				},
				{
					path:'bannert',
					component:banner2,
				},
			]
		},
		{
			path: '*',
			redirect: '/' //404
		}
		
	]
})

export { route }