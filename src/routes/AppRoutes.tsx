// src/routes/AppRoutes.tsx

import Layout from '../layout/Layout';
import HomePage from '../pages/home/HomePage';
import FpscPage from '../pages/imports/fpsc/FpscPage';

const AppRoutes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/',  element: <HomePage />, },
        ],
    },
    {
        path: '/import',
        element: <Layout />,
        children: [
            { path: 'fpsc',  element: <FpscPage />, },
        ],
    },
];

export default AppRoutes;
