// styles
import "./utils/styles/global.scss";

// types
import { ReactElement } from "react";

// hooks | library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// views
import AuthPage from "./views/authPage/AuthPage";
import HomeWithAuth from "./views/home/Home.tsx";
import ComponentPreview from "./views/componentPreview/ComponentPreview.tsx";

function App(): ReactElement {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<AuthPage />} />
        <Route path={"auth"} element={<AuthPage />} />
        <Route path={"home"} element={<HomeWithAuth />} />
        <Route path={"component_preview"} element={<ComponentPreview />} />
      </Routes>
    </Router>
  );
}

export default App;
