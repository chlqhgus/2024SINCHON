import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardPage = () => {
  const data = {
    labels: ["활동지원금", "홍보비", "간식비"],
    datasets: [
      {
        data: [60, 20, 20], // 각각의 비율
        backgroundColor: ["#344BFD", "#F4A79D", "#F68D2B"],
      },
    ],
  };

  const options = {
    cutout: "70%", // 도넛 차트의 내부 원 크기
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
    <MainContainer>
      <Header>
        <Subtitle>멋쟁이사자처럼</Subtitle>
        <MainTitle>2024 신촌해커톤의 예산 내역이에요.</MainTitle>
        <Description>
          2024 신촌해커톤의 원활한 진행을 위해 배정된 예산입니다. <br />
          주요 항목으로는 참가자 지원, 홍보 활동, 행사 운영비 등이 있으며, 각
          항목은 해커톤의 성공적인 개최를 위한 필수 요소들을 반영한 것입니다 :)
        </Description>
      </Header>
      <ContentContainer>
        <BudgetSection>
          <BudgetHeader>잔여 예산</BudgetHeader>
          <BudgetAmount>
            1,243,800 <span>원</span>
          </BudgetAmount>
          <ProgressBarContainer>
            <ProgressBar>
              <Progress style={{ width: "40%" }} />
            </ProgressBar>
            <ProgressTextContainer>
              <ProgressText>지출 256,200 원</ProgressText>
              <ProgressText>수입 1,500,000 원</ProgressText>
            </ProgressTextContainer>
          </ProgressBarContainer>
          <Midline src="/midline.svg" alt="midline" />
          <RecentExpensesHeader>
            <RecentExpensesTitle>최근 지출 내역</RecentExpensesTitle>
            <DetailMore>자세히보기</DetailMore>
          </RecentExpensesHeader>
          <DetailContainer>
            <DetailItem>
              <DetailLabel>동아리 홍보 포스터 제작</DetailLabel>
              <DetailLine src="/line.svg" alt="line" />
              <DetailAmount>-140,000 원</DetailAmount>
            </DetailItem>
            <DetailItem>
              <DetailLabel>정기 모임 간식비</DetailLabel>
              <DetailLine src="/line.svg" alt="line" />
              <DetailAmount>-42,300 원</DetailAmount>
            </DetailItem>
            <DetailItem>
              <DetailLabel>동아리 입회비</DetailLabel>
              <DetailLine src="/line.svg" alt="line" />
              <DetailAmount>500,000 원</DetailAmount>
            </DetailItem>
          </DetailContainer>
        </BudgetSection>
        <ChartSection>
          <ChartTitle>사용처 TOP3</ChartTitle>
          <ChartContainer>
            <Doughnut data={data} options={options} />
            <ChartTextContainer>
              {data.datasets[0].data.map((percentage, index) => (
                <PercentageCircle
                  key={index}
                  style={{
                    top: `${index * 30 + 10}%`,
                    left: index === 0 ? "60%" : "20%",
                  }}
                >
                  <PercentageText>{`${percentage}%`}</PercentageText>
                </PercentageCircle>
              ))}
            </ChartTextContainer>
          </ChartContainer>
          <LegendContainer>
            <LegendItem>
              <LegendColorTextWrapper>
                <LegendColor color="#4F77FF" />
                <LegendText>활동지원금</LegendText>
              </LegendColorTextWrapper>
              <LegendPercentage>60%</LegendPercentage>
            </LegendItem>
            <LegendItem>
              <LegendColorTextWrapper>
                <LegendColor color="#FFA5A5" />
                <LegendText>홍보비</LegendText>
              </LegendColorTextWrapper>
              <LegendPercentage>20%</LegendPercentage>
            </LegendItem>
            <LegendItem>
              <LegendColorTextWrapper>
                <LegendColor color="#FFBE3C" />
                <LegendText>간식비</LegendText>
              </LegendColorTextWrapper>
              <LegendPercentage>20%</LegendPercentage>
            </LegendItem>
          </LegendContainer>
        </ChartSection>
      </ContentContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 40px;
`;

const Header = styled.div`
  margin-bottom: 40px;
`;

const Subtitle = styled.h4`
  font-family: Pretendard, sans-serif;
  font-size: 18px;
  color: #767676;
  font-weight: 400;
`;

const MainTitle = styled.h1`
  font-family: Pretendard, sans-serif;
  font-size: 36px;
  color: #4f77ff;
  font-weight: 700;
  margin: 10px 0;
`;

const Description = styled.p`
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  color: #767676;
  font-weight: 400;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BudgetSection = styled.div`
  width: 60%;
  padding: 30px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BudgetHeader = styled.h2`
  font-family: Pretendard, sans-serif;
  font-size: 24px;
  color: #000;
  font-weight: 700;
  margin-bottom: 10px;
`;

const BudgetAmount = styled.div`
  font-family: Pretendard, sans-serif;
  font-size: 36px;
  color: #000;
  font-weight: 700;
  margin-bottom: 20px;

  span {
    font-size: 18px;
  }
`;

const ProgressBarContainer = styled.div`
  margin-bottom: 30px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #4f77ff;
  border-radius: 5px;
`;

const ProgressTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProgressText = styled.span`
  font-family: Pretendard, sans-serif;
  font-size: 12px;
  color: #767676;
  font-weight: 400;
`;

const Midline = styled.img`
  width: 100%;
  margin: 20px 0;
`;

const RecentExpensesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

const RecentExpensesTitle = styled.h3`
  font-family: Pretendard, sans-serif;
  font-size: 18px;
  color: #000;
  font-weight: 700;
`;

const DetailMore = styled.a`
  font-family: Pretendard, sans-serif;
  font-size: 12px;
  color: #aeaeae;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`;

const DetailContainer = styled.div`
  margin-bottom: 20px;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  color: #000;
  font-weight: 400;
  margin-bottom: 40px;
  position: relative;
`;

const DetailLabel = styled.span`
  position: absolute;
  left: 0;
`;

const DetailLine = styled.img`
  width: 235px;
  flex-shrink: 0;
  position: absolute;
  left: 150px;
`;

const DetailAmount = styled.span`
  font-weight: 700;
  right: 0;
  position: absolute;
`;

const ChartSection = styled.div`
  width: 35%;
  padding: 30px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ChartTitle = styled.h3`
  font-family: Pretendard, sans-serif;
  font-size: 18px;
  color: #000;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ChartContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto 20px;
`;

const ChartTextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PercentageCircle = styled.div`
  position: absolute;
  width: 31.495px;
  height: 31.495px;
  background-color: #eceaf8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`;

const PercentageText = styled.div`
  color: #000;
  font-family: Inter, sans-serif;
  font-size: 10px;
  font-weight: 700;
`;

const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LegendItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const LegendColorTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const LegendColor = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin-right: 5px;
`;

const LegendText = styled.span`
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  color: #767676;
`;

const LegendPercentage = styled.span`
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 700;
  color: #404040;
`;

export default DashboardPage;
