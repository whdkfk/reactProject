'use client';

import styled from "styled-components";
import { useState } from "react";

interface GuestModalProps {
  onClose: () => void;
}

export default function GuestModal({ onClose }: GuestModalProps) {
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);

  const increase = (setter: React.Dispatch<React.SetStateAction<number>>) => () => setter(prev => prev + 1);
  const decrease = (value: number, setter: React.Dispatch<React.SetStateAction<number>>) => () => {
    if (value > 0) setter(prev => prev - 1);
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Section>
          <Label>
            <Title>성인</Title>
            <Sub>13세 이상</Sub>
          </Label>
          <Counter>
            <Button onClick={decrease(adults, setAdults)} disabled={adults <= 1}>-</Button>
            <Count>{adults}</Count>
            <Button onClick={increase(setAdults)}>+</Button>
          </Counter>
        </Section>

        <Section>
          <Label>
            <Title>어린이</Title>
            <Sub>2~12세</Sub>
          </Label>
          <Counter>
            <Button onClick={decrease(children, setChildren)} disabled={children <= 0}>-</Button>
            <Count>{children}</Count>
            <Button onClick={increase(setChildren)}>+</Button>
          </Counter>
        </Section>

        <Section>
          <Label>
            <Title>유아</Title>
            <Sub>2세 미만</Sub>
          </Label>
          <Counter>
            <Button onClick={decrease(infants, setInfants)} disabled={infants <= 0}>-</Button>
            <Count>{infants}</Count>
            <Button onClick={increase(setInfants)}>+</Button>
          </Counter>
        </Section>
      </Modal>
    </Overlay>
  );
}

const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  margin-left: 450px;
  margin-top: 15px;
`;

const Modal = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  width: 400px;
  box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const Sub = styled.span`
  font-size: 13px;
  color: gray;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background-color: #fff;
  font-size: 18px;
  color: gray;
  cursor: pointer;
  transition: 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  &:hover:not(:disabled) {
    background-color: #f7f7f7;
  }
`;

const Count = styled.span`
  font-size: 16px;
  width: 20px;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 10px 0;
  border: none;
  background-color: #FF385C;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
`;
