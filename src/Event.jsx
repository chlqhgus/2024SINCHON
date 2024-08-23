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
  width: 245px;
  padding: 20px;
  border: 1px solid #f3f3f3;
`;
