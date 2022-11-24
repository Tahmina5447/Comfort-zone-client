import { createBrowserRouter } from "react-router-dom"
import Main from "../Layouts/Main"
import Blogs from "../Pages/Blogs/Blogs"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home"

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
            }
            
        ]
    }
])
export default router