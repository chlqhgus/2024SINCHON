import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { instance } from "./api/instance";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardPage = () => {
  const [recentData, setRecentData] = useState([]);
  const [moneyData, setMoneyData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("fundi/dashboard/1", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI0NDc3MjM3LCJpYXQiOjE3MjQ0NDEyMzcsImp0aSI6IjFlMGE1ZDU0MDFmZTRhYjM5YjVjNmVjNWZlMGIzN2RlIiwidXNlcl9pZCI6Mn0.9DGUzOXOzK786J1-qk4UaET4-0-V-TosOaPu3FRv8Zw",
          },
        });
        if (response.status === 201) {
          console.log(response.data);
          setRecentData(response.data.data.top_moneylists);
          setMoneyData(response.data.moneydata);
          setCategoryData(response.data.categorydata);
        }
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);

  console.log(categoryData);

  const data = {
    labels: ["활동지원금", "간식비", "홍보비"],
    datasets: [
      {
        data: [
          categoryData?.subsidy_percentage,
          categoryData?.snack_percentage,
          categoryData?.promotion_percentage,
        ], // 각각의 비율
        backgroundColor: ["#F4A79D", "#344BFD", "#F68D2B"],
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

  const progressBar = (moneyData?.totalexpense / moneyData?.total) * 100;
  return (
    <MainContainer>
      <Header>
        <Subtitle>멋쟁이사자처럼</Subtitle>
        <MainTitle>
          <span
            style={{
              color: "#344BFD",
              fontFamily: "Pretendard",
              fontSize: "35px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              letterSpacing: "-0.7px",
            }}
          >
            2024 신촌해커톤
          </span>
          의 예산 내역이에요.
        </MainTitle>
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
            {moneyData?.total?.toLocaleString()} <span>원</span>
          </BudgetAmount>
          <ProgressBarContainer>
            <ProgressBar>
              <Progress style={{ width: `${progressBar}%` }} />
            </ProgressBar>
            <ProgressTextContainer>
              <ProgressText>
                지출 {moneyData?.totalexpense?.toLocaleString()} 원
              </ProgressText>
              <ProgressText>
                수입 {moneyData?.totalearn?.toLocaleString()} 원
              </ProgressText>
            </ProgressTextContainer>
          </ProgressBarContainer>
          <Midline src="/midline.svg" alt="midline" />
          <RecentExpensesHeader>
            <RecentExpensesTitle>최근 지출 내역</RecentExpensesTitle>
            <DetailMore>자세히보기</DetailMore>
          </RecentExpensesHeader>
          <DetailContainer>
            <DetailItem>
              <DetailLabel>{recentData[0]?.list}</DetailLabel>
              <DetailLine src="/line.svg" alt="line" />
              <DetailAmount>
                {recentData[0]?.expense ? "-" : ""}
                {recentData[0]?.money.toLocaleString()} 원
              </DetailAmount>
            </DetailItem>
            <DetailItem>
              <DetailLabel>{recentData[1]?.list}</DetailLabel>
              <DetailLine src="/line.svg" alt="line" />
              <DetailAmount>
                {recentData[1]?.expense ? "-" : ""}
                {recentData[1]?.money.toLocaleString()} 원
              </DetailAmount>
            </DetailItem>
            <DetailItem>
              <DetailLabel>{recentData[2]?.list}</DetailLabel>
              <DetailLine src="/line.svg" alt="line" />
              <DetailAmount>
                {recentData[2]?.expense ? "-" : ""}
                {recentData[2]?.money.toLocaleString()} 원
              </DetailAmount>
            </DetailItem>
          </DetailContainer>
        </BudgetSection>
        <ChartSection>
          <ChartTitle>사용처 TOP3</ChartTitle>
          <ChartContainer>
            <Doughnut data={data} options={options} />
          </ChartContainer>
          <LegendContainer>
            <LegendItem>
              <LegendColorTextWrapper>
                <LegendColor color="#F4A79D" />
                <LegendText>활동지원금</LegendText>
              </LegendColorTextWrapper>
              <LegendPercentage>
                {categoryData?.subsidy_percentage}%
              </LegendPercentage>
            </LegendItem>
            <LegendItem>
              <LegendColorTextWrapper>
                <LegendColor color="#344BFD" />
                <LegendText>홍보비</LegendText>
              </LegendColorTextWrapper>
              <LegendPercentage>
                {categoryData?.snack_percentage}%
              </LegendPercentage>
            </LegendItem>
            <LegendItem>
              <LegendColorTextWrapper>
                <LegendColor color="#FFBE3C" />
                <LegendText>간식비</LegendText>
              </LegendColorTextWrapper>
              <LegendPercentage>
                {categoryData?.promotion_percentage}%
              </LegendPercentage>
            </LegendItem>
          </LegendContainer>
        </ChartSection>
      </ContentContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin-left: 3%;
  padding: 40px;
`;

const Header = styled.div`
  margin-bottom: 40px;
`;

const Subtitle = styled.h4`
  padding-top: 70px;
  color: #000;

  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const MainTitle = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.52px;
  padding: 10px 0px;
`;

const Description = styled.p`
  padding-top: 20px;
  padding-bottom: 10px;
  color: #a7a7a7;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.3px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const BudgetSection = styled.div`
  width: 700px;
  padding: 30px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BudgetHeader = styled.h2`
  font-family: Pretendard, sans-serif;
  font-size: 15px;
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
