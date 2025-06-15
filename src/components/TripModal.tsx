import React from 'react';
import styled from 'styled-components';

type Place = {
  id: number;
  name: string;
  description: string;
};

type ModalProps = {
  show: boolean;
  onClose: () => void;
  onSelect: (place: Place) => void;
};

const dummyPlaces: Place[] = [
  { id: 1, name: "근처 체험 찾기", description: "가까운 곳에서 즐길 수 있는 체험을 찾아보세요."},
  { id: 2, name: "부산", description: "부산 숙소가 저장된 위시리스트에 기반한 추천"},
  { id: 3, name: "광안리해수욕장, 부산", description: "해변으로 인기 있는 곳"},
  { id: 4, name: "강릉시, 강원도", description: "자연을 만끽하기 좋은 곳"},
  { id: 5, name: "속초시, 강원도", description: "호수가 유명한 곳"},
  { id: 6, name: "오사카시, 일본", description: "관광 명소: 오사카성"},
  { id: 7, name: "전주, 전라북도", description: "최고급 다이닝을 즐기기 좋은 곳"},
  { id: 8, name: "서귀포시, 제주도", description: "동해안의 대표 도시"},

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
              <PlaceImage src={`/images/trip${place.id}.png`} alt={place.name} />
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
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 999;
`;


const ModalContainer = styled.div`
  background: white;
  width: 450px;
  max-width: 700;
  max-height: 65vh;
  border-radius: 35px;
  box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-top: 200px;
  margin-left: 295px;
`;

const Title = styled.h2`
  margin: 0 0 15px 5px;
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
  width: 60px;
  height: 55px;
  /* border-radius: 8px; */
  object-fit: cover;
`;

const PlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const PlaceName = styled.span`
  font-size: 15px;
`;

const PlaceDesc = styled.span`
  font-size: 13px;
  color: gray;
  font-weight: 400;
`;
