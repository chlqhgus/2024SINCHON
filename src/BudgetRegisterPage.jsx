import { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const BudgetRegisterPage = () => {
  const [category, setCategory] = useState("수입");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClickIn = () => {
    setCategory("수입");
  };

  const handleClickOut = () => {
    setCategory("지출");
  };

  return (
    <Container>
      <HeaderText>예산 관리</HeaderText>
      <Header>
        <Category>
          <CategoryContainer
            onClick={handleClickIn}
            $isActive={category === "수입"}
          >
            <CategoryName $isActive={category === "수입"}>수입</CategoryName>
          </CategoryContainer>

          <CategoryContainer
            onClick={handleClickOut}
            $isActive={category === "지출"}
          >
            <CategoryName $isActive={category === "지출"}>지출</CategoryName>
          </CategoryContainer>
        </Category>
      </Header>
      <Form>dkkdkd</Form>
    </Container>
  );
};

export default BudgetRegisterPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #f8f8f8;
  padding-top: 100px;
  padding-left: 55px;
  padding-right: 55px;
  gap: 30px;
`;

const HeaderText = styled.span`
  font-size: 40px;
  font-weight: 700;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

const Category = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  background-color: ${(props) => (props.$isActive ? "#0565FF" : "#ffffff")};
`;

const CategoryName = styled.span`
  font-size: 18px;
  color: ${(props) => (props.$isActive ? "#ffffff" : "#000000")};
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  background-color: #ffffff;
  border-radius: 20px;
`;
