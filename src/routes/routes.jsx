import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main/Main";
import Register from "../layout/Register/Register";
import Login from "../layout/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path:'/login',
                element: <Login/>
            }
        ]

    }
])


export default router;