import styled from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <Sidebar>
        <Logo>FunDI</Logo>
        <Card>
          <Image src="src/bg.png" alt="" />
          <Text>
            <UnivText>멋쟁이사자처럼</UnivText>
            <Description>2024 tlschs</Description>
          </Text>
          <ArrowImg src="/arrow.svg" alt="화살표" />
        </Card>
        <div>
          <span>대시보드</span>
          <span>예산 관리</span>
          <span>부원 관리</span>
        </div>
      </Sidebar>
      <div> 안녕</div>
    </Container>
  );
};

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
