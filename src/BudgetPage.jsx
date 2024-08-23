import { useState } from "react";
import styled from "styled-components";
import History from "./History";
import { useNavigate, useParams } from "react-router-dom";

const totalBudget = 20000; // 총 예산
const data = [
  {
    listid: 1,
    list: "간식",
    money: 4000,
    category: "간식비",
    expense: true,
    receipt: null,
    eventid: 1,
    date: "2024-08-23",
  },
  {
    listid: 2,
    list: "지원금",
    money: 5000,
    category: "지원금",
    expense: false,
    receipt: null,
    eventid: 1,
    date: "2024-08-24",
  },
];

const historyData = [
  {
    listid: 1,
    date: "2024-08-25",
    detail: "동아리 홍보 포스터 제작",
    imageUrl: "/bg.png",
    expense: true,
    money: 140000,
    remainMoney: 1243800,
  },
  {
    listid: 2,
    date: "2024-08-20",
    detail: "정기모임 간식비",
    imageUrl: "/bg.png",
    expense: true,
    money: 42300,
    remainMoney: 1383800,
  },
  {
    listid: 3,
    date: "2024-04-03",
    detail: "동아리 입회비",
    imageUrl: "/bg.png",
    expense: false,
    money: 500000,
    remainMoney: 1426100,
  },
  {
    listid: 4,
    date: "2024-04-03",
    detail: "동아리 입회비",
    imageUrl: "/bg.png",
    expense: false,
    money: 500000,
    remainMoney: 1426100,
  },
  {
    listid: 5,
    date: "2024-04-03",
    detail: "동아리 입회비",
    imageUrl: "/bg.png",
    expense: false,
    money: 500000,
    remainMoney: 1426100,
  },
];

const BudgetPage = () => {
  const [category, setCategory] = useState("전체");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClickTotal = () => {
    setCategory("전체");
  };

  const handleClickIn = () => {
    setCategory("수입");
  };

  const handleClickOut = () => {
    setCategory("지출");
  };

  const calculateRemainingBudget = (total, data) => {
    let remainingBudget = total;

    data.forEach((item) => {
      if (item.expense) {
        remainingBudget -= item.money;
      } else {
        remainingBudget += item.money;
      }
    });

    return remainingBudget;
  };

  const formatCurrency = (amount) => {
    return amount.toLocaleString();
  };

  const remainingBudget = calculateRemainingBudget(totalBudget, data);
  const formattedBudget = formatCurrency(remainingBudget);

  return (
    <Container>
      <HeaderText>예산 관리</HeaderText>
      <Header>
        <Category>
          <CategoryContainer
            onClick={handleClickTotal}
            $isActive={category === "전체"}
          >
            <CategoryName $isActive={category === "전체"}>전체</CategoryName>
          </CategoryContainer>

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
        <Plus
          onClick={() => {
            navigate(`/budgetRegister/${id}`);
          }}
        >
          + 추가하기
        </Plus>
      </Header>
      <Content>
        <Total>
          <TotalText>남은 예산</TotalText>
          <TotalNum>{formattedBudget} 원</TotalNum>
        </Total>
        {historyData.map((element) => (
          <History
            key={element.listid}
            date={element.date}
            detail={element.detail}
            imageUrl={element.imageUrl}
            expense={element.expense}
            money={element.money.toLocaleString()}
            remainMoney={element.remainMoney.toLocaleString()}
          />
        ))}
      </Content>
    </Container>
  );
};

export default BudgetPage;

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
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Category = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 300px;
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

const Plus = styled.button`
  border-radius: 10px;
  width: 140px;
  height: 50px;
  font-size: 18px;
  color: #ffffff;
  background-color: #0565ff;
  border: none;
  cursor: pointer;
`;

const Content = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: auto;
  border-radius: 20px;
  padding: 65px;
`;

const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 50px;
`;

const TotalText = styled.h1`
  font-size: 17px;
  font-weight: 700;
`;

const TotalNum = styled.p`
  font-size: 40px;
  font-weight: 700;
`;
