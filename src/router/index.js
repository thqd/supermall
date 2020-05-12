import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Cotegory = () => import('../views/cotegory/Cotegory')
const Shop = () => import('../views/shop/Shop')
const Me = () => import('../views/me/Me')
const Detail =() => import('../views/detail/Detail')

// 安装路由
Vue.use(VueRouter)

const routes=[
 {
  path: '',
  redirect:'/home'
},
{
  path: '/home',
  component: Home
},
{
  path: '/cotegory',
  component: Cotegory
},
{
  path: '/shop',
  component: Shop
},
{
  path: '/me',
  component: Me
},
{
  path: '/detail/:iid',
  component: Detail
},
]

const router =new VueRouter({
 routes,
 mode:'history'
})

export default router