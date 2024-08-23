import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./src/HomePage";
import DashboardPage from "./src/DashboardPage";
import MemberPage from "./src/MemberPage";
import BudgetPage from "./src/BudgetPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/budget" element={<BudgetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
