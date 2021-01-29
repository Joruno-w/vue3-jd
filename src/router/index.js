import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
	{
		path: '/',
		name: 'home',
		component: ()=>import('@/views/home/Home')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/Login'),
		beforeEnter(to,from,next){
			const {isLogin} = localStorage;
			!isLogin && to.name === 'login' ? next() : next({name:'home'});
		},
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('@/views/register/Register')
	},
	{
		path: '/shop',
		name: 'shop',
		component: () => import('@/views/shop/Shop')
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

router.beforeEach(((to, from, next) => {
	const {isLogin} = localStorage;
	const {name} = to;
	const isLoginOrRegister = (name === 'login' || name === 'register')
	!isLogin && !isLoginOrRegister ? next({name: 'login'}) : next();
}));

export default router;
