import "./styles.css";

import { AppRouter } from "./router/AppRouter";
import { ProyectsProvider } from "./context/ProyectsProvider";
import { AppProvider } from "./context/AppProvider";
import { BrowserRouter, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <AppProvider>
        <ProyectsProvider>
          <AppRouter />
        </ProyectsProvider>
      </AppProvider>
    </HashRouter>
  );
}

export default App;
