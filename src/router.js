import {createBrowserRouter} from 'react-router-dom';

import UserIndex from './user/views/Index';
import CategoryIndex from './category/views/Index';
import Layout from 'Layout';

import Home from 'Home';

import UserCreate from 'user/views/Create';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "category",
                element: <CategoryIndex />,
            },
            {
                path: "user",
                element: <UserIndex />,
            },
            {
                path: "user/create",
                element: <UserCreate />,
            },
            {
                path: "home",
                element: <Home />,
            }
        ],
    }
]);


export default router;