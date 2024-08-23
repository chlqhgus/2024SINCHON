import React, { useState } from "react";
import styled from "styled-components";

const MemberPage = () => {
  const [name, setName] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [members, setMembers] = useState([
    { name: "안연아", paid: true },
    { name: "최보현", paid: true },
    { name: "박솔", paid: false },
    { name: "박민서", paid: true },
    { name: "이정은", paid: true },
    { name: "변희민", paid: true },
    { name: "신촌톤", paid: false },
  ]);

  const handleRegister = () => {
    if (name) {
      setMembers([...members, { name, paid: isPaid }]);
      setName("");
      setIsPaid(false);
    }
  };

  return (
    <Container>
      <Content>
        <Title>부원 등록</Title>
        <Description>
          행사에 참여하는 부원의 개인 정보를 등록하여, <br />각 부원의 참가비 및
          회비 납부 상태를 확인하실 수 있습니다.
        </Description>

        {/* 부원 등록 폼 */}
        <RegisterContainer>
          <NameContainer>
            <Label>이름</Label>
            <InputField
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </NameContainer>
          <PaymentContainer>
            <Label>회비 납부 여부</Label>
            <OXContainer>
              <OXButton selected={isPaid} onClick={() => setIsPaid(true)}>
                O
              </OXButton>
              <OXButton selected={!isPaid} onClick={() => setIsPaid(false)}>
                <span>X</span>
              </OXButton>
            </OXContainer>
          </PaymentContainer>
          <RegisterButton onClick={handleRegister}>등록하기</RegisterButton>
        </RegisterContainer>

        {/* 부원 목록 */}
        <MemberListContainer>
          <HeaderContainer>
            <MemberListTitle>부원 명단</MemberListTitle>
            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="확인하고 싶은 부원 이름을 검색하세요"
              />
              <SearchIcon src="/search.svg" alt="search icon" />
            </SearchContainer>
          </HeaderContainer>
          <MemberList>
            {members.map((member, index) => (
              <MemberItem key={index}>
                <MemberName>{member.name}</MemberName>
                <MemberStatus paid={member.paid}>
                  {member.paid ? "납부완료" : "미납"}
                </MemberStatus>
              </MemberItem>
            ))}
          </MemberList>
        </MemberListContainer>
      </Content>
    </Container>
  );
};

export default MemberPage;

// 전체 페이지 레이아웃
const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f9f9f9;
  padding-left: 10px;
`;

// 콘텐츠 영역 레이아웃
const Content = styled.div`
  flex: 1;
  padding: 40px;
`;

// 페이지 제목 스타일
const Title = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
  padding-top: 57px;
`;

// 페이지 설명 텍스트 스타일
const Description = styled.p`
  padding-top: 20px;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  color: #a7a7a7;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.3px;
  margin-bottom: 40px;
  color: #a7a7a7;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.3px;
`;

// 부원 등록 폼 레이아웃
const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 16px 24px;
  border-radius: 20px;
  margin-bottom: 32px;
  gap: 20px;
  justify-content: space-between;
`;

// 이름 입력 필드와 라벨을 묶는 컨테이너
const NameContainer = styled.div`
  display: flex;
  gap: 5px;
`;

// 회비 납부 여부와 OX 버튼을 묶는 컨테이너
const PaymentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* O와 X 사이 간격 조정 */
`;

// 입력 필드 스타일
const InputField = styled.input`
  padding: 12px;
  width: 176px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #eee;
  &:focus {
    outline: none;
    border-bottom: 1px solid #333;
  }
`;

// 라벨 스타일
const Label = styled.label`
  font-size: 18px;
  color: #000;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

// OX 버튼을 묶는 컨테이너
const OXContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  gap: 3px;
`;

// OX 버튼 스타일
const OXButton = styled.button`
  background-color: ${(props) => (props.selected ? "#e0e0e0" : "transparent")};
  color: ${(props) => (props.selected ? "#344BFD" : "#000")};
  border: none;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// 등록 버튼 스타일
const RegisterButton = styled.button`
  padding: 12px 24px;
  background-color: #344bfd;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #1d3bfd;
  }
`;

// 부원 목록 컨테이너
const MemberListContainer = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const MemberListTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;

// 검색 필드와 아이콘을 묶는 컨테이너
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  padding: 12px 20px;
  border-radius: 30px; /* 둥근 모서리 */
  margin-bottom: 24px;
  width: 325px;
  height: 48px;
  flex-shrink: 0;
`;

// 검색 입력 필드 스타일
const SearchInput = styled.input`
  flex: 1;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: #999;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
  }
`;

// 검색 아이콘 스타일 (search.svg 사용)
const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;

// 부원 목록 레이아웃
const MemberList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

// 개별 부원 항목 스타일
const MemberItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 8px 20px;
  border-radius: 12px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
`;

// 부원 이름 텍스트 스타일
const MemberName = styled.span`
  font-size: 16px;
  color: #000;
  margin-right: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
`;

// 부원 납부 상태 스타일
const MemberStatus = styled.span`
  font-size: 14px;
  color: ${(props) => (props.paid ? "green" : "red")};
  background-color: ${(props) => (props.paid ? "#eaffea" : "#ffeaea")};
  padding: 4px 8px;
  border-radius: 8px;
  font-family: Pretendard;

  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.13px;
`;
