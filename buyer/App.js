import './App.css';

import { useRoutes } from 'react-router-dom';
import { CssBaseline } from "@mui/material";

import routes from "./routes.js";
import Theme from "./themes/Provider.js";

function App() {
  const content = useRoutes(routes);

  return (
    <div className="App">
      <CssBaseline />
      <Theme>
        {content}
      </Theme>
    </div>
  );
}

export default App;
