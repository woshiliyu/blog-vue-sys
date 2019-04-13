import Vue from 'vue'
import App from './App.vue'
//组件
import HelloWorld from './components/HelloWorld.vue'
import WangEditor from './components/WangEditor.vue'
import Blog       from './components/blog/Blog.vue'
//elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//axios请求
import axios from 'axios'
window.axios = axios
//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {path: '/',component: HelloWorld},
    {path: '/editor',component: WangEditor},
    {path: '/blog',component: Blog},
    {path: '*',redirect: '/'} //防输错或者没找到页面路由错误，跳转到首页
]
const router = new VueRouter ({
    routes,
    mode: 'history'
})

Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
