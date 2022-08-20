import { Navigate, PartialRouteObject } from 'react-router';

import * as Layouts from 'src/layouts';
import * as Pages from 'src/pages';

export const routes: Array<PartialRouteObject> = [
    {
        path: '/base',
        element: <Layouts.Empty />,
        children: [
            {
                path: '/login',
                element: <Pages.Login />
            },
            {
                path: 'status',
                children: [
                    {
                        path: '/',
                        element: <Navigate to="404" replace />
                    },
                    {
                        path: '404',
                        element: <Pages.Status404 />
                    },
                    {
                        path: '500',
                        element: <Pages.Status500 />
                    },
                    {
                        path: 'maintenance',
                        element: <Pages.StatusMaintenance />
                    },
                    {
                        path: 'coming-soon',
                        element: <Pages.StatusComingSoon />
                    }
                ]
            },
            {
                path: 'onboarding',
                element: <Pages.Onboarding />
            },
            {
                path: '*',
                element: <Pages.Status404 />
            }
        ]
    },
    {
        path: '*',
        element: <Layouts.Main />,
        children: [
            {
                path: '/',
                element: <Navigate to="/home" replace />
            },
            {
                path: 'home',
                element: <Pages.Home />
            },
            {
                path: 'accounting',
                element: <Pages.Accounting />
            },
            {
                path: 'analysis',
                element: <Pages.StatusComingSoon />
            },
            {
                path: 'inventory',
                element: <Pages.Inventory />
            },
            {
                path: 'profile',
                element: <Pages.Profile />
            },
            {
                path: '*',
                element: <Pages.Status404 />
            }
        ]
    }
];
