import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./src/HomePage";
import MemberPage from "./src/MemberPage";
import BudgetPage from "./src/BudgetPage";
import SideBar from "./src/SideBar";
import styled from "styled-components";
import BudgetRegisterPage from "./src/BudgetRegisterPage";
import DashboardPage from "./src/DashboardPage";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <Container>
      <SideBar />
      {children}
    </Container>
  );
};

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
              <HomePage />
          }
        />
        <Route
          path="/dashboard/:id"
          element={
            <Layout>
              <DashboardPage />
            </Layout>
          }
        />

        <Route
          path="/member/:id"
          element={
            <Layout>
              <MemberPage />
            </Layout>
          }
        />
        <Route
          path="/budget/:id"
          element={
            <Layout>
              <BudgetPage />
            </Layout>
          }
        />
        <Route
          path="/budgetRegister/:id"
          element={
            <Layout>
              <BudgetRegisterPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

const Container = styled.div`
  display: flex;
`;
