import "./App.css";
import { AppLayout } from "./pages/AppLayout";
import { Routes } from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes />
      </AppLayout>
    </Router>
  );
}

export default App;
