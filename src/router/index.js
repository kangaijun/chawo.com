import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Kind from '@/components/Kind'
import Server from '@/components/Server'
import ShoppingCar from '@/components/ShoppingCar'
import Load from '@/components/Load'
import Register from '@/components/Register'
import Putong from '@/components/Putong'
import Phone from '@/components/Phone'
import Detail from '@/components/Detail'
import Br from '@/components/Br'
import Puer from '@/components/Puer'
import Hong from '@/components/Hong'
import Flo from '@/components/Flo'
import Gao from '@/components/Gao'
import Book from '@/components/Book'
import Set from '@/components/Set'
import White from '@/components/White'
import Wulong from '@/components/Wulong'
import Lv from '@/components/Lv'
import Search from '@/components/Search'
import Loaded from '@/components/Loaded'

Vue.use(Router)

export default new Router({
  routes: [
  	{path:'/', redirect:'/hello/home'},
  	{path:'/kind', redirect:'/kind/br'},
  	{path:'/register', redirect:'/register/putong'},
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      children:[
      	{
      		path: 'home',
      		name: 'Home',
      		component: Home
      	},
      	{
      		path: 'server',
      		name: 'Server',
      		component: Server
      	},
      	{
      		path: 'shoppingCar',
      		name: 'ShoppingCar',
      		component: ShoppingCar
      	},
      	{
      		path: 'loaded',
      		name: 'Loaded',
      		component: Loaded
      	}
      ]
    },
    {
  		path: '/kind',
  		name: 'Kind',
  		component: Kind,
  		children:[
  			{
      		path: 'br',
      		name: 'Br',
      		component: Br
      },
      {
      		path: 'puer',
      		name: 'Puer',
      		component: Puer
      },
      {
      		path: 'hong',
      		name: 'Hong',
      		component: Hong
      },
      {
      		path: 'flo',
      		name: 'Flo',
      		component: Flo
      },
      {
      		path: 'gao',
      		name: 'Gao',
      		component: Gao
      },
      {
      		path: 'book',
      		name: 'Book',
      		component: Book
      },
      {
      		path: 'set',
      		name: 'Set',
      		component: Set
      },
      {
      		path: 'white',
      		name: 'White',
      		component: White
      },
      {
      		path: 'wulong',
      		name: 'Wulong',
      		component: Wulong
      },
      {
      		path: 'lv',
      		name: 'Lv',
      		component: Lv
      	}
  		]
  	},
    {
  		path: '/load',
  		name: 'Load',
  		component: Load
  	},
  	{
  		path: '/register',
  		name: 'Register',
  		component: Register,
  		children:[
  			{
  				path: 'putong',
      		name: 'Putong',
      		component: Putong
  			},
  			{
  				path: 'phone',
      		name: 'Phone',
      		component: Phone
  			}
  		]
  	},
  	{
  		path: '/search',
  		name: 'Search',
  		component: Search
  	},
  	{
    	path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
