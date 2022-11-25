import { createBrowserRouter } from "react-router-dom"
import AddProduct from "../Dashboard/SellerDashboard/AddProduct"
import Main from "../Layouts/Main"
import Blogs from "../Pages/Blogs/Blogs"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home"
import Login from "../Shared/Login/Login"
import Signup from "../Shared/Signup/Signup"
import DashboardLayout from "../Layouts/DashboardLayout"
import AllBuyers from "../Dashboard/AdminDashboard/AllBuyers"
import MyOrders from "../Dashboard/BuyerDashboard/MyOrders"
import MyProducts from "../Dashboard/SellerDashboard/MyProducts"
import Products from "../Pages/Products/Products"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import DashBoard from "../Dashboard/DashBoard"
import AdminRoute from "../AdminRoute/AdminRoute"
import SellerRoute from "../SellerRoute/SellerRoute"
import BuyerRoute from "../BuyerRoute/BuyerRoute"
import Payment from "../Dashboard/BuyerDashboard/Payment"
import AllSellers from "../Dashboard/AdminDashboard/AllSellers"

const router=createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blogs></Blogs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/categories/:id',
                loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`),
                element:<PrivateRoute><Products></Products></PrivateRoute>
            },
           
           
        
            
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            // {
            //     path:'/dashboard',
            //     element:<DashBoard></DashBoard>
            // },
            {
                path:'/dashboard/myProducts',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path:'/dashboard/addproduct',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path:'/dashboard/myOrders',
                element:<BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path:'/dashboard/payment',
                element:<BuyerRoute><Payment></Payment></BuyerRoute>
            },
            {
                path:'/dashboard/allSellers',
                element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path:'/dashboard/allBuyers',
                element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            }
            

        ]
    }
])
export default router