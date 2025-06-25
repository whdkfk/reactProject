'use client';

import styled from 'styled-components';
import { useEffect } from 'react';
//import Map from '@/components/Map';

export default function Detail({/*{ show, onClose, data }: DetailModalProps*/}) {
  // useEffect(() => {
  //   const handleEsc = (e: KeyboardEvent) => {
  //     if (e.key === 'Escape') onClose();
  //   };
  //   window.addEventListener('keydown', handleEsc);
  //   return () => window.removeEventListener('keydown', handleEsc);
  // }, [onClose]);                                     

  // if (!show) return null;

  return (
    <Overlay onClick={/*onClose*/}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <StayImage src={`images/room${data.id}.png`} alt={data.title} />sss
        <SubImage src={`images/room${data.id}.png`} alt={data.title} />
        <Sub2Image src={`images/room${data.id}.png`} alt={data.title} />
        <Sub3Image src={`images/room${data.id}.png`} alt={data.title} />
        <Title>{data.title}</Title>
        <Sub>슈퍼싱글 1개, 공용욕실</Sub>
        <Info>
          {/* <p><strong>숙박 기간:</strong> {data.dateRange}</p>
          <p><strong>숙박일 수:</strong> {data.nights}박</p>
          <p><strong>가격:</strong> {data.price}</p>
          <p><strong>평점:</strong> ⭐ {data.rating}</p>
          {data.isPreferred && <Badge>에어비앤비 추천</Badge>} */}
          <Main>
            <StarImg src="images/star.png" alt={data.title} />
            <OptionImg src="images/option.png" alt={data.title} />
          </Main>
          <SubTitle>위치</SubTitle>
          <Korea>서울, 한국</Korea>
          <SubTitle>위치</SubTitle>
          <Korea>서울, 한국</Korea>
          {/* <Map // 지도를 표시할 Container
            id="map"
            center={{
              // 지도의 중심좌표
              lat: 33.450701,
              lng: 126.570667,
            }}
            style={{
              // 지도의 크기
              width: "100%",
              height: "350px",
            }}
            level={3} // 지도의 확대 레벨
          /> */}
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;


const OptionImg = styled.img`
  width: 30vw;
  margin-left: -7px;
`;

const StarImg = styled.img`
  width: 38.5vw;
  margin-left: -7px;
  margin-top: 15px;
`;

const SubImage = styled.img`
  width: 15vw;
  height: 20vh;
  margin-left: 550px;
  margin-top: -525px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
`;

const Sub2Image = styled.img`
  width: 15vw;
  height: 20vh;
  margin-left: 550px;
  margin-top: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
`;

const Sub3Image = styled.img`
  width: 15vw;
  height: 20vh;
  margin-left: 550px;
  margin-top: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
`;

const StayImage = styled.img`
  width: 37vw;
  height: 64vh;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const Modal = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  width: 57.5vw;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const Sub = styled.p`
  margin-top: -8px;
  color: gray;
  margin-left: 2px;
`;

const Korea = styled.p`
  color: gray;
  margin-top: -5px;
`;

const Image = styled.div`
  width: 100%;
  height: 300px;
  background: lightgray;
  border-radius: 15px;
  margin-bottom: 20px;
`;

const Title = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const SubTitle = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const Info = styled.div`
  font-size: 16px;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
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
