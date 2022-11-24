import { createBrowserRouter } from "react-router-dom"
import AddProduct from "../Dashboard/SellerDashboard/AddProduct"
import Main from "../Layouts/Main"
import Blogs from "../Pages/Blogs/Blogs"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home"
import Beds from "../Pages/Products/Beds"
import Login from "../Shared/Login/Login"
import Signup from "../Shared/Signup/Signup"
import AllUsers from "../Dashboard/AdminDashboard/AllUsers"
import DashboardLayout from "../Layouts/DashboardLayout"
import AllBuyers from "../Dashboard/AdminDashboard/AllBuyers"

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
                element:<Beds></Beds>
            },
            {
                path:'/addproduct',
                element:<AddProduct></AddProduct>
            },
        
            
        ]
    },
    {
        path:'/allUsers',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/allUsers/allBuyers',
                element:<AllBuyers></AllBuyers>
            }
        ]
    }
])
export default router