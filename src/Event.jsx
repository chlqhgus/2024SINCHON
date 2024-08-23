import styled from "styled-components";

const Event = ({ children, onClick }) => {
  return (
    <Container onClick={onClick} r>
      {children}
    </Container>
  );
};

export default Event;

const Container = styled.div`
  width: 200px;
  height: 40px;
  border: 1px solid #f3f3f3;
  align-item: center;
  padding:13px 20px;

  border-radius: 5px;
border-bottom: 1px #D5D5D5;

  color: #000;
  border-radius: 5px;
  background: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;
