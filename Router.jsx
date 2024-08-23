import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./src/HomePage";
import MainPage from "./src/MainPage";
import LoginPage from "./src/LoginPage";
import RegisterPage from "./src/RegisterPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
