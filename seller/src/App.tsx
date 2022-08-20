import { useContext, useEffect } from 'react';
import { useRoutes, useNavigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { routes } from './router';
import { UserContext } from 'src/contexts/User';
import { NoProvider } from './utils/errors';

const App = () => {
    // Fetch User Details
    const user = useContext(UserContext);
    if (!user) throw NoProvider('User Context');

    // Check if authenticated or not
    // Redirect to login page if not authenticated
    const navigate = useNavigate();
    useEffect(() => {
        if (user.isAuthenticated) {
            navigate('/home');
        } else {
            navigate('/base/login');
        }
    }, [user.isAuthenticated]);

    // Get the current route to display
    const currentRoute = useRoutes(routes);

    return (
        <>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
            <CssBaseline />
            {currentRoute}
            {/* </LocalizationProvider> */}
        </>
    );
};

export default App;
