import { Navigate } from "react-router-dom";

import Layout from "./layout/main";
import * as Pages from "./pages";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/home" replace />
            },
            {
                path: "/home",
                element: <Pages.Home />
            },
            {
                path: "/categories",
                element: <Pages.Categories />
            },
            {
                path: "/product",
                element: <Pages.Product />
            },
            {
                path: "/placeOrder",
                element: <Pages.OrderDetails />
            },
            {
                path: "*",
                element: <Pages.Error404 />
            }
        ]
    }
]

export default routes;