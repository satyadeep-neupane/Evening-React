import {createBrowserRouter} from 'react-router-dom';

import UserIndex from './user/views/Index';
import CategoryIndex from './category/views/Index';
import Layout from 'Layout';

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
            }
        ],
    }
]);


export default router;