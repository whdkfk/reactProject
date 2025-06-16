'use client';

import styled from 'styled-components';
import { useEffect } from 'react';

interface DetailModalProps {
  show: boolean;
  onClose: () => void;
  data: {
    title: string;
    dateRange: string;
    price: string;
    nights: number;
    rating: number;
    isPreferred: boolean;
  };
}

export default function Detail({ show, onClose, data }: DetailModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!show) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Image />
        <Title>{data.title}</Title>
        <Info>
          <p><strong>숙박 기간:</strong> {data.dateRange}</p>
          <p><strong>숙박일 수:</strong> {data.nights}박</p>
          <p><strong>가격:</strong> {data.price}</p>
          <p><strong>평점:</strong> ⭐ {data.rating}</p>
          {data.isPreferred && <Badge>에어비앤비 추천</Badge>}
        </Info>
      </Modal>
    </Overlay>
  );
}


const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Image = styled.div`
  width: 100%;
  height: 300px;
  background: lightgray;
  border-radius: 15px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Info = styled.div`
  font-size: 16px;
  line-height: 1.6;
`;

const Badge = styled.div`
  margin-top: 10px;
  display: inline-block;
  background-color: #ff385c;
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 13px;
`;
