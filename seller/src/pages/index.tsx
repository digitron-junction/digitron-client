import { lazy, Suspense } from 'react';

import { SuspenseLoader } from 'src/components';

function Loader(file: string) {
    let Page = lazy(() => import(`./${file}`));
    return () => (
        <Suspense fallback={<SuspenseLoader />}>
            <Page />
        </Suspense>
    );
}

// Status Pages
export const Status404 = Loader('status/Status404');
export const Status500 = Loader('status/Status500');
export const StatusComingSoon = Loader('status/ComingSoon');
export const StatusMaintenance = Loader('status/Maintenance');

//Main Pages
export const Login = Loader('main/Login');
export const Home = Loader('main/Home');
export const Analysis = Loader('main/Insights');
export const Accounting = Loader('main/Accounting');
export const Inventory = Loader('main/Inventory');
export const Profile = Loader('main/Profile');
export const Onboarding = Loader('main/Onboarding');
export const AddProduct = Loader('main/AddProduct');
export const Network = Loader('main/Network');
