'use client';
import styled from 'styled-components';

interface StayCardProps {
  id: number;
  isPreferred: boolean;
  title: string;
  dateRange: string;
  price: string;
  nights: number;
  rating: number;
}

export default function Card({
  id,
  isPreferred,
  title,
  dateRange,
  price,
  nights,
  rating
}: StayCardProps) {
  return (
    <CardWrapper>
      <ImageContainer>
        <StayImage src={`images/room${id}.png`} alt={title} />
        {isPreferred && <Badge>게스트 선호</Badge>}
        <Heart>♡</Heart>
      </ImageContainer>
      <TextWrapper>
        <Title>{title}</Title>
        <Date>{dateRange}</Date>
        <Price>
          <span>{price}</span> · {nights}박 · ★ {rating.toFixed(2)}
        </Price>
      </TextWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 184px;
  border-radius: 12px;
  overflow: hidden;
  font-family: sans-serif;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 180px;
  height: 178px;
  border-radius: 20px;
  overflow: hidden;
`;

const StayImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: white;
  color: black;
  font-size: 11px;
  padding: 8px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Heart = styled.div`
  position: absolute;
  top: 8px;
  right: 10px;
  font-size: 25px;
  color: white;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const TextWrapper = styled.div`
  padding: 8px;
`;

const Title = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
`;

const Date = styled.div`
  font-size: 13px;
  color: #717171;
  margin-bottom: 2px;
`;

const Price = styled.div`
  font-size: 13px;
  color: gray;
`;
