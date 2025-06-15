'use client';

import styled from "styled-components";
import { useState } from "react";

interface GuestModalProps {
    show: boolean;
    onClose: () => void;
  }
  

export default function GuestModal({ show, onClose}: GuestModalProps) {
    if (!show) return null;

    const [adults, setAdults] = useState<number>(1);
    const [children, setChildren] = useState<number>(0);
    const [infants, setInfants] = useState<number>(0);
    const [animals, setAnimals] = useState<number>(0);

    const increase = (setter: React.Dispatch<React.SetStateAction<number>>) => () =>
        setter(prev => prev + 1);
    const decrease = (value: number, setter: React.Dispatch<React.SetStateAction<number>>) => () => {
        if (value > 0) setter(prev => prev - 1);
    };

    return (
        <Overlay onClick={onClose}>
            <Modal onClick={(e) => e.stopPropagation()}>
                {[
                    { label: "성인", sub: "13세 이상", value: adults, setValue: setAdults, min: 1 },
                    { label: "어린이", sub: "2~12세", value: children, setValue: setChildren, min: 0 },
                    { label: "유아", sub: "2세 미만", value: infants, setValue: setInfants, min: 0 },
                    { label: "반려동물", sub: "보조동물을 동반하시나요?", value: animals, setValue: setAnimals, min: 0 }
                ].map(({ label, sub, value, setValue, min }, index, array) => (
                    <Section key={label} isLast={index === array.length - 1}>
                        <Label>
                            <Title>{label}</Title>
                            <Sub>{sub}</Sub>
                        </Label>
                        <Counter>
                            <Button onClick={decrease(value, setValue)} disabled={value <= min}>-</Button>
                            <Count>{value}</Count>
                            <Button onClick={increase(setValue)}>+</Button>
                        </Counter>
                    </Section>
                ))}

            </Modal>
        </Overlay>
    );
}

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 999;
`;

const Modal = styled.div`
  background: #fff;
  padding: 45px;
  width: 400px;
  height: 47vh;
  border-radius: 35px;
  box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.1);
  margin-top: 200px;
  margin-left: 750px;
`;

const Section = styled.div<{ isLast: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: ${({ isLast }) => (isLast ? "none" : "1px solid #EBEBEB")};
`;


const Label = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.span`
  font-size: 16px;
`;

const Sub = styled.span`
  font-size: 14px;
  color: gray;
  font-weight: 400;
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