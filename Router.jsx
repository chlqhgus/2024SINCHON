import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./src/HomePage";
import MemberPage from "./src/MemberPage";
import BudgetPage from "./src/BudgetPage";
import SideBar from "./src/SideBar";
import styled from "styled-components";

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
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/:id"
          element={
            <Layout>
              <HomePage />
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
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

const Container = styled.div`
  display: flex;
`;
