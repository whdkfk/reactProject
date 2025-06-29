'use client';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import Register from './Register';
import { mock } from '../app/api/mock';

interface LoginProps {
  show: boolean;
  onClose: () => void;
  onLoginSuccess?: (name: string) => void;
}


export default function Login({ show, onClose, onLoginSuccess }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await mock('/login', { username, password });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
      }
      alert('로그인 성공!');
      if (onLoginSuccess) {
        onLoginSuccess(username);
      }
      onClose();
    } catch (error: any) {
      alert(error.response?.data?.message || '로그인 실패');
    }
  };
  


  if (!show) return null;

  return (
    <>
      <Backdrop onClick={onClose}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <Title>로그인</Title>
          <Input
            type="text"
            placeholder="아이디를 입력하세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>로그인</Button>
          <SubActions>
            <CloseButton onClick={onClose}>닫기</CloseButton>
            <SignupButton onClick={() => setIsSignupOpen(true)}>회원가입하기</SignupButton>
          </SubActions>
        </Modal>
      </Backdrop>

      <Register show={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </>
  );
}


const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 350px;
  padding: 30px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  background-color: #FF395C;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: gray;
  font-size: 14px;
  cursor: pointer;
`;

const SignupButton = styled.button`
  background: none;
  border: none;
  color: #007BFF;
  font-size: 14px;
  cursor: pointer;
`;

const SubActions = styled.div`
  display: flex;
  justify-content: space-between;
`;
