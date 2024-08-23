import { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Event from "./Event";

const mockData = [
  { id: 1, name: "행사1" },
  { id: 2, name: "행사2" },
  { id: 3, name: "행사3" },
  { id: 4, name: "행사4" },
];

const SideBar = () => {
  const [show, setShow] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("행사명");

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const getColor = (path) => {
    return location.pathname.startsWith(path) ? "#0565ff" : "#aeaeae";
  };

  const handleClick = () => {
    setShow(!show);
  };

  const handleEventSelect = (eventName, eventId) => {
    setSelectedEvent(eventName);
    setShow(false);
    navigate(`/${eventId}`);
  };

  return (
    <Sidebar>
      <Logo>FunDI</Logo>
      <div>
        <Card onClick={handleClick}>
          <Image src="/bg.png" alt="" />
          <Text>
            <UnivText>멋쟁이사자처럼</UnivText>
            <Description>{selectedEvent}</Description>
          </Text>
          <img src="/arrow.svg" alt="화살표" />
        </Card>
        {show && (
          <Dropdown>
            {mockData.map((element) => (
              <Event
                key={element.id}
                onClick={() => handleEventSelect(element.name, element.id)}
              >
                {element.name}
              </Event>
            ))}
          </Dropdown>
        )}
      </div>

      <Content>
        <Category onClick={() => navigate(`/${id}`)}>
          <ContentImage src="/graph.svg" alt="대시보드" />
          <CategoryName style={{ color: getColor("/") }}>대시보드</CategoryName>
        </Category>
        <Category onClick={() => navigate(`/budget/${id}`)}>
          <ContentImage src="/money.svg" alt="예산 관리" />
          <CategoryName style={{ color: getColor("/budget") }}>
            예산 관리
          </CategoryName>
        </Category>
        <Category onClick={() => navigate(`/member/${id}`)}>
          <ContentImage src="/member.svg" alt="부원 관리" />
          <CategoryName style={{ color: getColor("/member") }}>
            부원 등록
          </CategoryName>
        </Category>
      </Content>
    </Sidebar>
  );
};

export default SideBar;

const Sidebar = styled.div`
  width: 350px;
  height: 100vh;
  padding: 72px 30px 0 30px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Logo = styled.span`
  font-size: 25px;
  color: #0565ff;
  font-weight: 800;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 245px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f3f3f3;
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

const Category = styled.div`
  display: flex;
  gap: 10px;
`;

const CategoryName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #aeaeae;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ContentImage = styled.img`
  width: 20px;
  height: 20px;
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
