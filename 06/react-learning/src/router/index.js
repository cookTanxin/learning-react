// 导入页面组件
import Home from "../pages/home";
import About from "../pages/about/index";
import NotePage from '../21reactRoute/404'
import My from '../21reactRoute/my'
import Login from '../21reactRoute/login'
import Product from '../pages/product'
import ProductDetail from '../pages/product/productDetail'

import Company from '../pages/about/page/company'
import Boss from '../pages/about/page/boss'
import Children from '../pages/about/page/children'
// console.log(ProductDetail)
const routers = [
    {
        path:'/home',
        component:Home,
        exact:true
    },
    {
        path:'/about',
        component:About,
        routes:[
            {
                path:'/about',
                component:Company,
                exact:true
            },
            {
                path:'/about/boss',
                component:Boss
            },
            {
                path:'/about/children',
                component:Children
            }
        ]
    },
    {
        path:'/my',
        component:My
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/product',
        component:Product,
        exact:true
    },
    {
        path:'/product/productDetail/:id',
        component:ProductDetail
    },
    {
        path:'*',
        component:NotePage
    }
]

export default routers