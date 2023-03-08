import "./styles.css";

import { AppRouter } from "./router/AppRouter";
import { ProyectsProvider } from "./context/ProyectsProvider";
import { AppProvider } from "./context/AppProvider";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ProyectsProvider>
          <AppRouter />
        </ProyectsProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
