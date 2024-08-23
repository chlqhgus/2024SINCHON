import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Container>
      <Header>
        <BlueBar />
        <Title>남은 예산</Title>
      </Header>
      <BudgetAmount>
        1,243,800 <span>원</span>
      </BudgetAmount>
      <Details>
        <DetailItem>
          <DetailLabel>동아리 홍보 포스터 제작</DetailLabel>
          <DetailAmount>-140,000 원</DetailAmount>
        </DetailItem>
        <Divider />
        <DetailItem>
          <DetailLabel>정기 모임 간식비</DetailLabel>
          <DetailAmount>-42,300 원</DetailAmount>
        </DetailItem>
        <Divider />
        <DetailItem>
          <DetailLabel>동아리 입회비</DetailLabel>
          <DetailAmount>500,000 원</DetailAmount>
        </DetailItem>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  width: 703px;
  height: 389px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const BlueBar = styled.div`
  width: 3px;
  height: 20px;
  background: #0565ff;
  margin-right: 10px;
`;

const Title = styled.h2`
  color: #000;
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const BudgetAmount = styled.div`
  font-family: Pretendard, sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: #000;
  margin-bottom: 30px;

  span {
    font-size: 20px;
    margin-left: 5px;
  }
`;

const Details = styled.div`
  margin-top: 20px;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const DetailLabel = styled.div`
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  color: #000;
`;

const DetailAmount = styled.div`
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  color: #000;
`;

const Divider = styled.hr`
  width: 153.5px;
  height: 0;
  border-top: 1px solid #8e8e8e;
  margin: 10px 0;
`;

export default HomePage;

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 285px;
  height: 100vh;
  background-color: yellow;
`;

const Logo = styled.span`
  font-size: 25px;
  color: #0565ff;
  font-weight: 700;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 245px;
  padding: 20px;
  border-radius: 10px;
  background-color: red;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const UnivText = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 14px;
`;

const ArrowImg = styled.img``;
