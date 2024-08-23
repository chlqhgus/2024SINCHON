import { useEffect, useState } from "react";
import styled from "styled-components";
import History from "./History";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "./api/instance";

const BudgetPage = () => {
  const [category, setCategory] = useState("전체");
  const [history, setHistory] = useState([]);
  const [total, setTotal] = useState(0);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "fundi/moneylist/1";

        if (category === "수입") {
          url += "?expense=False";
        } else if (category === "지출") {
          url += "?expense=True";
        }

        const response = await instance.get(url, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0NDc3MjM3LCJpYXQiOjE3MjQ0NDEyMzcsImp0aSI6IjFlMGE1ZDU0MDFmZTRhYjM5YjVjNmVjNWZlMGIzN2RlIiwidXNlcl9pZCI6Mn0.9DGUzOXOzK786J1-qk4UaET4-0-V-TosOaPu3FRv8Zw",
          },
        });
        if (response.status === 200) {
          setTotal(response.data.total);
          setHistory(response.data.data);
        }
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, [category]);

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
          <TotalText>잔여 예산</TotalText>
          <TotalNum>{total.toLocaleString()} 원</TotalNum>
        </Total>
        {history.map((element) => (
          <History
            key={element.listid}
            date={element.date}
            detail={element.list}
            imageUrl={element.imageUrl ? element.imageUrl : "/image.png"}
            expense={element.expense}
            money={element.money}
            remainMoney={element.total}
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
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
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
  height: 50px;
  flex-shrink: 0;
  background-color: ${(props) => (props.$isActive ? "#0565FF" : "#ffffff")};
`;

const CategoryName = styled.span`
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.36px;
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
  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.18px;
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
  padding-bottom: 40px;
`;

const TotalText = styled.h1`
  font-weight: 700;
  color: #000;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;

const TotalNum = styled.p`
  font-size: 40px;
  font-weight: 700;
  color: #000;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;
