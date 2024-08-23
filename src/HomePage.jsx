import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { instance } from "./api/instance";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await instance.post("api/login/", {
        username: id,
        password: password,
      });
      if (response.status === 200) {
        navigate("/dashboard/1");
      }
    } catch {
      alert(
        "ID, 비밀번호를 잘못 입력했거나 등록되지 않은 ID입니다. 확인 후 다시 입력해주세요!"
      );
    }
  };

  return (
    <Wrapper>
      <Container>
        <Logo>FunDI</Logo>
        <InputField
          type="text"
          placeholder="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="pw"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </Container>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #344bfd;
  margin-bottom: 40px;
`;

const InputField = styled.input`
  width: 300px;
  padding: 16px;
  margin-bottom: 20px;
  border: none;
  border-radius: 25px;
  background-color: #f5f5ff;
  font-size: 16px;
  color: #333;
  &::placeholder {
    color: #cfcfcf;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

const LoginButton = styled.button`
  width: 300px;
  padding: 16px;
  border: none;
  border-radius: 25px;
  background-color: #344bfd;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #2c3fda;
  }
`;
