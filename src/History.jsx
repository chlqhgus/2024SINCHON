import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const History = ({ date, detail, imageUrl, expense, money, remainMoney }) => {
  return (
    <Container>
      <Description>
        <Date>{date}</Date>
        <Detail>{detail}</Detail>
        <Image src={imageUrl} alt="영수증" />
      </Description>
      <MoneyContainer>
        <Money $expense={expense}>{`${
          expense ? "-" : "+"
        } ${money.toLocaleString()} 원`}</Money>
        <RemainMoney>잔액 {remainMoney.toLocaleString()}원</RemainMoney>
      </MoneyContainer>
    </Container>
  );
};

export default History;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  border-top: 1px solid #e8eaf6;
  border-bottom: 1px solid #e8eaf6;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Date = styled.p`
  font-size: 18px;
  color: #aeaeae;
`;

const Detail = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const MoneyContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  font-size: 20px;
  font-weight: 600;
`;

const Money = styled.p`
  color: ${(props) => (props.$expense ? "#ff0909" : "#000000")};
`;

const RemainMoney = styled.p`
  color: #000000;
`;
