'use client';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { mock } from '../app/api/mock'; // 경로는 상황에 맞게 조절

interface RegisterProps {
  show: boolean;
  onClose: () => void;
}

export default function Register({ show, onClose }: RegisterProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

const handleRegister = async () => {
  if (password !== confirm) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }

  try {
    await mock('/register', { username, password });
    alert('회원가입 성공!');
    onClose();
  } catch (error: any) {
    alert(error.response?.data?.message || '회원가입 실패');
  }
};


  if (!show) return null;

  return (
    <Backdrop onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>회원가입</Title>
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
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <Button onClick={handleRegister}>회원가입</Button>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </Modal>
    </Backdrop>
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
  margin-top: 10px;
  cursor: pointer;
`;
