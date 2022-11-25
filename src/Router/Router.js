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
                path:'/products/:id',
                loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`),
                element:<PrivateRoute><Products></Products></PrivateRoute>
            },
            {
                path:'/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/myOrders',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/myProducts',
                element:<MyProducts></MyProducts>
            }
        
            
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard',
                element:<DashBoard></DashBoard>
            }
        ]
    }
])
export default router