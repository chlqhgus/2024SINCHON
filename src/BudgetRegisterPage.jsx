import { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "./api/instance";

const BudgetRegisterPage = () => {
  const [category, setCategory] = useState("수입");
  const [date, setDate] = useState("");
  const [classification, setClassification] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id);

  const handleClickIn = () => {
    setCategory("수입");
    setDate("");
    setClassification("");
    setAmount("");
    setDescription("");
  };

  const handleClickOut = () => {
    setCategory("지출");
    setDate("");
    setClassification("");
    setAmount("");
    setDescription("");
  };

  const handleSaveIn = async () => {
    try {
      const response = await instance.post(
        "/fundi/moneylistcreate/earn/1/",
        {
          list: description,
          money: amount,
          category: classification,
          date: date,
          receipte: null,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0NDc3MjM3LCJpYXQiOjE3MjQ0NDEyMzcsImp0aSI6IjFlMGE1ZDU0MDFmZTRhYjM5YjVjNmVjNWZlMGIzN2RlIiwidXNlcl9pZCI6Mn0.9DGUzOXOzK786J1-qk4UaET4-0-V-TosOaPu3FRv8Zw",
          },
        }
      );
      if (response.status === 201) {
        console.log("이동");
        navigate("/budget/1");
      }
    } catch (error) {
      alert(error);
    }
    console.log("저장");
    console.log("날짜:", date);
    console.log("분류:", classification);
    console.log("금액:", amount);
    console.log("내용:", description);
  };

  const handleSaveOut = () => {
    console.log("날짜:", date);
    console.log("분류:", classification);
    console.log("금액:", amount);
    console.log("내용:", description);
  };

  const handleCancle = () => {
    navigate(-1);
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
      {category === "수입" && (
        <Form>
          <Section>
            <InputSection>
              <Label>날짜</Label>
              <Input
                type="text"
                placeholder="2024-05-06"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </InputSection>
            <InputSection>
              <Label>분류</Label>
              <Input
                type="text"
                placeholder="카테고리를 입력해주세요"
                value={classification}
                onChange={(e) => setClassification(e.target.value)}
              />
            </InputSection>
          </Section>
          <Section>
            <InputSection>
              <Label>금액</Label>
              <Input
                type="text"
                placeholder="금액을 입력해주세요"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </InputSection>
            <InputSection>
              <Label>내용</Label>
              <Input
                type="text"
                placeholder="내용을 입력해주세요"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </InputSection>
          </Section>
          <ButtonContainer>
            <SaveButton onClick={handleSaveIn}>저장</SaveButton>
            <CancleButton onClick={handleCancle}>취소</CancleButton>
          </ButtonContainer>
        </Form>
      )}
      {category === "지출" && (
        <Form>
          <Section>
            <InputSection>
              <Label>날짜</Label>
              <Input
                type="text"
                placeholder="2024-05-06"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </InputSection>
            <InputSection>
              <Label>분류</Label>
              <Input
                type="text"
                placeholder="카테고리를 입력해주세요"
                value={classification}
                onChange={(e) => setClassification(e.target.value)}
              />
            </InputSection>
          </Section>
          <Section>
            <InputSection>
              <Label>금액</Label>
              <Input
                type="text"
                placeholder="금액을 입력해주세요"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </InputSection>
            <InputSection>
              <Label>내용</Label>
              <Input
                type="text"
                placeholder="내용을 입력해주세요"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </InputSection>
          </Section>
          <InputSection>
            <Label>첨부파일</Label>
            <ImageInput type="file" />
          </InputSection>
          <ButtonContainer>
            <SaveButton onClick={handleSaveOut}>저장</SaveButton>
            <CancleButton onClick={handleCancle}>취소</CancleButton>
          </ButtonContainer>
        </Form>
      )}
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
  width: 100%;
  margin-top: 5px;
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
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.36px;
  color: ${(props) => (props.$isActive ? "#ffffff" : "#000000")};
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 50px 50px 80px;
  gap: 40px;
  align-items: flex-end;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  padding: 0px 30px;
`;
const SaveButton = styled.button`
  width: 120px;
  height: 49px;
  font-size: 18px;
  color: white;
  background-color: #344bfd;
  border-radius: 10px;
  cursor: pointer;
  border: none;

  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.18px;
`;

const CancleButton = styled.button`
  width: 120px;
  height: 49px;
  flex-shrink: 0;
  font-size: 18px;
  color: #767676;
  background-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #767676;
  color: #767676;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.18px;
`;

const Section = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 40px;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const Label = styled.label`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Input = styled.input`
  padding: 30px;
  border: 1px solid #dadada;
  border-radius: 20px;
  outline: none;
  font-size: 20px;
  width: 420px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #dadada;
  background: #fff;

  &:focus {
    border: 1px solid #344bfd;
  }
`;

const ImageInput = styled.input`
  width: 50%;
`;
