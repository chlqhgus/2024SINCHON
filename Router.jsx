import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./src/HomePage";
import MemberPage from "./src/MemberPage";
import BudgetPage from "./src/BudgetPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/budget" element={<BudgetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
