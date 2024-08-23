import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const HomePage = () => {
  const data = {
    labels: ['활동지원금', '홍보비', '간식비'],
    datasets: [
      {
        data: [60, 20, 20], // 각각의 비율
        backgroundColor: ['#0565FF', '#FFB6C1', '#FFA500'], // 각각의 색상
        hoverBackgroundColor: ['#054ECF', '#FF8AAE', '#FF9400'],
      },
    ],
  };

  const options = {
    cutout: '70%', // 도넛 차트의 내부 원 크기
    plugins: {
      legend: {
        display: false, // 상단의 범례 표시 숨김
      },
      tooltip: {
        enabled: false, // 툴팁 숨김
      },
    },
  };

  return (
    <Container>
      <BudgetContainer>
        <Header>
          <Title>남은 예산</Title>
        </Header>
        <BudgetAmount>
          1,243,800 <span>원</span>
        </BudgetAmount>
        <Details>
          <DetailItem>
            <DetailLabel>동아리 홍보 포스터 제작</DetailLabel>
            <DetailAmount>
              <DetailLine src="/line.svg" alt="line" />
              -140,000 원
            </DetailAmount>
          </DetailItem>
          <DetailItem>
            <DetailLabel>정기 모임 간식비</DetailLabel>
            <DetailAmount>
              <DetailLine src="/line.svg" alt="line" />
              -42,300 원
            </DetailAmount>
          </DetailItem>
          <DetailItem>
            <DetailLabel>동아리 입회비</DetailLabel>
            <DetailAmount>
              <DetailLine src="/line.svg" alt="line" />
              500,000 원
            </DetailAmount>
          </DetailItem>
        </Details>
        <DetailMore>자세히보기</DetailMore>
      </BudgetContainer>

      <ChartContainer>
        <ChartTitle>사용처</ChartTitle>
        <DoughnutChartContainer>
          <Doughnut data={data} options={options} />
        </DoughnutChartContainer>
        <LegendContainer>
          <LegendItem>
            <LegendColor color="#0565FF" />
            <LegendText>활동지원금</LegendText>
            <LegendPercentage>60%</LegendPercentage>
          </LegendItem>
          <LegendItem>
            <LegendColor color="#FFB6C1" />
            <LegendText>홍보비</LegendText>
            <LegendPercentage>20%</LegendPercentage>
          </LegendItem>
          <LegendItem>
            <LegendColor color="#FFA500" />
            <LegendText>간식비</LegendText>
            <LegendPercentage>20%</LegendPercentage>
          </LegendItem>
        </LegendContainer>
      </ChartContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px; /* 두 항목 사이의 간격 */
  padding: 20px;
`;

const BudgetContainer = styled.div`
  width: 703px;
  height: 389px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #fff;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px; 
  margin-left: 40px; 
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
  margin-bottom: 40px; /* 예산 금액과 동아리 홍보 포스터 제작 사이 간격 설정 */
  margin-left: 40px; /* 왼쪽에서 61px 떨어짐 */

  span {
    font-size: 20px;
    margin-left: 5px;
  }
`;

const Details = styled.div`
  margin-top: 0px;
  flex-grow: 1;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px; /* 각 항목 사이 간격 설정 */
  margin-left: 40px;
`;

const DetailLabel = styled.div`
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  color: #000;
`;

const DetailAmount = styled.div`
  display: flex;
  align-items: center;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
  color: #000;
`;

const DetailLine = styled.img`
  width: 150px;
  margin: 0 10px;
  flex-grow: 1;
`;

const DetailMore = styled.span`
  align-self: flex-end;
  color: #aeaeae;
  font-family: Pretendard, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.24px;
  margin-left: 40px; /* 왼쪽에서 61px 떨어짐 */
`;

const ChartContainer = styled.div`
  width: 300px;
  height: 389px;
  padding: 20px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartTitle = styled.h2`
  font-family: Pretendard, sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const DoughnutChartContainer = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LegendItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const LegendColor = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin-right: 10px;
`;

const LegendText = styled.span`
  font-size: 14px;
  color: #000;
`;

const LegendPercentage = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export default HomePage;