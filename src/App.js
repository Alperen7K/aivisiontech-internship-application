import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Router } from "./router";
import { UiContextProvider } from './context'

function App() {
  return (
    <UiContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UiContextProvider>
  )
}

export default App;
