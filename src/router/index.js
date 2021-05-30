import { createRouter, createWebHistory } from 'vue-router'


const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/Cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')



const router = createRouter({
  mode:"hash",
  history: createWebHistory(process.env.BASE_URL),
  routes:[
    {
      path: '/',
      name: 'Home',
      //redirect是重新定向的意思
      redirect:'/home',

    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/Cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/detail/:iid',
      component: Detail
    }


  ]
})

export default router
