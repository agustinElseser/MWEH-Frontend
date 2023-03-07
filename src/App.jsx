import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { ProyectsProvider } from "./context/ProyectsProvider";
import { AppProvider } from "./context/AppProvider";

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
