import Vue from 'vue'
import Circle from '@/js/circle'
import Router from '@/js/router'
import routes from '#/router'
import App from '@/views/App'
async function install(Vue) {
	await Circle.install(Vue);
	let router = Router.install(Vue, routes);
	new Vue({
		el: '#app',
		router,
		template: '<app/>',
		components: { App }
	});

}
install(Vue)
