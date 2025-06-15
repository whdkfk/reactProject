import React from 'react';
import styled from 'styled-components';

type Place = {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
};

type ModalProps = {
  show: boolean;
  onClose: () => void;
  onSelect: (place: Place) => void;
};

const dummyPlaces: Place[] = [
  { id: 1, name: "서울", description: "대한민국의 수도", imgUrl: "/images/seoul.jpg" },
  { id: 2, name: "부산", description: "해운대가 유명한 도시", imgUrl: "/images/busan.jpg" },
  { id: 3, name: "제주도", description: "휴양지로 인기", imgUrl: "/images/jeju.jpg" },
  { id: 4, name: "강릉", description: "동해안의 대표 도시", imgUrl: "/images/gangneung.jpg" },
  { id: 5, name: "강릉", description: "동해안의 대표 도시", imgUrl: "/images/gangneung.jpg" },
  { id: 4, name: "강릉", description: "동해안의 대표 도시", imgUrl: "/images/gangneung.jpg" },
  { id: 4, name: "강릉", description: "동해안의 대표 도시", imgUrl: "/images/gangneung.jpg" },
  { id: 4, name: "강릉", description: "동해안의 대표 도시", imgUrl: "/images/gangneung.jpg" },
  { id: 4, name: "강릉", description: "동해안의 대표 도시", imgUrl: "/images/gangneung.jpg" },

];

export default function PlaceModal({ show, onClose, onSelect }: ModalProps) {
  if (!show) return null;

  const handlePlaceClick = (place: Place) => {
    onSelect(place);
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <Title>추천 여행지</Title>
        <PlaceList>
          {dummyPlaces.map(place => (
            <PlaceItem key={place.id} onClick={() => handlePlaceClick(place)}>
              <PlaceImage src={place.imgUrl} alt={place.name} />
              <PlaceInfo>
                <PlaceName>{place.name}</PlaceName>
                <PlaceDesc>{place.description}</PlaceDesc>
              </PlaceInfo>
            </PlaceItem>
          ))}
        </PlaceList>
      </ModalContainer>
    </Overlay>
  );
}

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -400px;
  margin-top: 15px;
`;

const ModalContainer = styled.div`
  background: white;
  width: 450px;
  max-width: 700;
  max-height: 65vh;
  border-radius: 35px;
  box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

const Title = styled.h2`
  margin: 0 0 15px 0;
  font-weight: 400;
  font-size: 14px;
`;

const PlaceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 57.5vh;
  overflow-y: auto;
`;

const PlaceItem = styled.li`
  display: flex;
  cursor: pointer;
  padding: 10px 5px;
  border-radius: 8px;
  align-items: center;
  gap: 15px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const PlaceImage = styled.img`
  width: 70px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
`;

const PlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlaceName = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

const PlaceDesc = styled.span`
  font-size: 13px;
  color: gray;
`;
