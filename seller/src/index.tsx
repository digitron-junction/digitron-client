import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

// Importing all Providers
import { UserProvider } from 'src/contexts/User';
import { ThemeProvider } from 'src/theme';

import App from './App';

import 'nprogress/nprogress.css';

ReactDOM.render(
    <HelmetProvider>
        <UserProvider>
            <ThemeProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </UserProvider>
    </HelmetProvider>,

    document.getElementById('root')
);
