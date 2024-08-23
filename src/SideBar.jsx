import { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Event from "./Event";

const mockData = [
  { id: 1, name: "+ 새 행사 추가하기" },
  { id: 2, name: "12기 아기사자" },
  { id: 3, name: "2024 신촌해커톤" },
];

const SideBar = () => {
  const [show, setShow] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("행사명");

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const getColor = (path) => {
    return location.pathname.startsWith(path) ? "#344BFD" : "#aeaeae";
  };

  const getImageSrc = (path, defaultImage, activeImage) => {
    return location.pathname.startsWith(path) ? activeImage : defaultImage;
  };

  const getBackgroundColor = (path) => {
    return location.pathname.startsWith(path) ? "#ECEEFF" : "transparent";
  };

  const handleClick = () => {
    setShow(!show);
  };

  const handleEventSelect = (eventName, eventId) => {
    setSelectedEvent(eventName);
    setShow(false);
    navigate(`/dashboard/${eventId}`);
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

        <Category
          onClick={() => navigate(`/dashboard/${id}`)}
          style={{ backgroundColor: getBackgroundColor("/dashboard") }}
        >
          <ContentImage
            src={getImageSrc(`/dashboard`, "/graph.svg", "/colored_graph.svg")}
            alt="대시보드"
          />
          <CategoryName style={{ color: getColor("/dashboard") }}>
            대시보드
          </CategoryName>
        </Category>
        <Category
          onClick={() => navigate(`/budget/${id}`)}
          style={{ backgroundColor: getBackgroundColor("/budget") }}
        >
          <ContentImage
            src={getImageSrc(`/budget`, "/money.svg", "/colored_money.svg")}
            alt="예산 관리"
          />
          <CategoryName style={{ color: getColor("/budget") }}>
            예산 관리
          </CategoryName>
        </Category>
        <Category
          onClick={() => navigate(`/member/${id}`)}
          style={{ backgroundColor: getBackgroundColor("/member") }}
        >
          <ContentImage
            src={getImageSrc(`/member`, "/member.svg", "/colored_member.svg")}
            alt="부원 관리"
          />
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
  width: 280px;
  height: 982px;
  flex-shrink: 0;
  padding: 50px 40px 0 40px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  background-color: #ffffff;
`;

const Logo = styled.span`
  color: var(--buttons-primary, #344bfd);
  font-family: NanumSquareRound;
  font-size: 35px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -1.75px;
  padding-bottom: 30px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  gap: 12px;
  margin-right: 10px;
  width: 200px;
  height: 73px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const UnivText = styled.span`
  color: #262626;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.26px;
  margin-right: 15px;
`;

const Description = styled.p`
  color: #767676;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.16px;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 50px;
  padding-left: 17px;
  gap: 14px;
  border-radius: 8px;
`;

const CategoryName = styled.span`
  color: var(--unselect-text, #aeaeae);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.18px;
`;

const Content = styled.div`
  padding-top: 37px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
