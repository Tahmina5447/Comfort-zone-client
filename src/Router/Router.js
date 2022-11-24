import { createBrowserRouter } from "react-router-dom"
import AddProduct from "../Dashboard/SellerDashboard/AddProduct"
import Main from "../Layouts/Main"
import Blogs from "../Pages/Blogs/Blogs"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home"
import Products from "../Pages/Products/Products"
import Login from "../Shared/Login/Login"
import Signup from "../Shared/Signup/Signup"

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
                element:<Products></Products>
            },
            {
                path:'/addproduct',
                element:<AddProduct></AddProduct>
            }
            
        ]
    }
])
export default router