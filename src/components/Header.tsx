'use client';
import styled from "styled-components";
import Image from 'next/image';
import { useRef, useState } from "react";
import New from '../app/assets/new.png';
import PlaceModal from "./TripModal";
import GuestModal from '@/components/GuestModal';


export default function Header() {
    const [select, setSelect] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [pos, setPos] = useState({ x: 560, y: 73 });
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [underlineLeft, setUnderlineLeft] = useState<number>(0);
    const [isModal1, setIsModal1] = useState<boolean>(false);
    const [isModal2, setIsModal2] = useState<boolean>(false);
    const [isModal3, setIsModal3] = useState<boolean>(false);

    const videoRef = useRef<HTMLVideoElement>(null);
    const videoRef2 = useRef<HTMLVideoElement>(null);
    const videoRef3 = useRef<HTMLVideoElement>(null);

    const handleClick = (index: number) => {
        setSelect(index);
        const positions = [
            { x: 560, y: 73 },   // 숙소
            { x: 670, y: 73 },  // 체험
            { x: 780, y: 73 },  // 서비스
        ];
        setPos(positions[index]);

        [videoRef, videoRef2, videoRef3].forEach((ref, i) => {
            if (ref.current) {
                if (i === index) {
                    ref.current.play();
                } else {
                    ref.current.pause();
                    ref.current.currentTime = 0;

                }
            }
        });
    };

    const closeModalHandler = (setModal: React.Dispatch<React.SetStateAction<boolean>>) => {
        setModal(false);
    };

    const handlePlaceClick = () => {
        setSelectedIndex(0);
        setUnderlineLeft(0);
        setIsModal1(true);
    };

    return (
        <StyledHeader>
            <Top>
                <ImgLogo src="/icons/logo.png?v=2" alt="logo" />
                <Nav>
                    <House onClick={() => handleClick(0)}>
                        <Video
                            ref={videoRef}
                            src="/videos/house.mov"
                            width="600"
                            controls={false}
                        />
                        <Label1 selected={select === 0}>숙소</Label1>
                    </House>
                    <UnderlineImg
                        src="/images/underline.png"
                        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
                        alt="underline"
                    />

                    <House onClick={() => handleClick(1)}>
                        <Video
                            ref={videoRef2}
                            src="/videos/balloon.mov"
                            width="600"
                            controls={false}
                        />
                        <ImgF>
                            <ImgNew src="/icons/new.png" alt="new" />
                            <Label selected={select === 1}>체험</Label>
                        </ImgF>
                    </House>
                    <House onClick={() => handleClick(2)}>
                        <Video
                            ref={videoRef3}
                            src="/videos/consierge.mov"
                            width="600"
                            controls={false}
                        />
                        <ImgF>
                            <ImgNew src="/icons/new.png" alt="new" />
                            <Label selected={select === 2}>서비스</Label>
                        </ImgF>
                    </House>
                </Nav>
                <RightBox>
                    <Hosting>호스팅하기</Hosting>
                    <Lang>
                        <ImgL src="/images/lang.png" alt="lang" />
                    </Lang>
                    <Ham>
                        <ImgH src="/images/ham.png" alt="ham" />
                    </Ham>
                </RightBox>
            </Top>
            <Search>
                <Box
                    onClick={handlePlaceClick}
                    onMouseEnter={() => setHoveredIndex(0)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                        backgroundColor: selectedIndex === 0 ? '#EBEBEB' : '#fff',
                        borderRadius: selectedIndex === 0 ? '50px' : '50px',
                        transition: 'background-color 0.3s ease',
                    }}
                >
                    <Trip>
                        <TripS>여행지</TripS>
                        <TripSearch>여행지 검색</TripSearch>
                    </Trip>
                </Box>

                <ImgLine $hide={hoveredIndex === 0 || hoveredIndex === 1} src="images/line.png" alt="line" />

                <Box
                    onClick={() => {
                        setSelectedIndex(1);
                        setUnderlineLeft(1); // 위치 조정
                    }}
                    onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                        backgroundColor: selectedIndex === 1 ? '#EBEBEB' : '#fff',
                        borderRadius: selectedIndex === 1 ? '50px' : '50px',
                        transition: 'background-color 0.3s ease',
                    }}
                >
                    <Check1>
                        <TripS>체크인</TripS>
                        <TripSearch>날짜 추가</TripSearch>
                    </Check1>
                </Box>

                <ImgLine $hide={hoveredIndex === 1 || hoveredIndex === 2} src="images/line.png" alt="line" />

                <Box
                    onClick={() => {
                        setSelectedIndex(2);
                        setUnderlineLeft(2); // 위치 조정
                    }}
                    onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                        backgroundColor: selectedIndex === 2 ? '#EBEBEB' : '#fff',
                        borderRadius: selectedIndex === 2 ? '50px' : '50px',
                        transition: 'background-color 0.3s ease',
                    }}
                >
                    <Check2>
                        <TripS>체크아웃</TripS>
                        <TripSearch>날짜 추가</TripSearch>
                    </Check2>
                </Box>

                <ImgLine $hide={hoveredIndex === 2 || hoveredIndex === 3} src="images/line.png" alt="line" />

                <Box
                    onClick={() => {
                        setSelectedIndex(3);
                        setUnderlineLeft(3);
                        setIsModal3(true);
                    }}
                    onMouseEnter={() => setHoveredIndex(3)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                        backgroundColor: selectedIndex === 3 ? '#EBEBEB' : '#fff',
                        borderRadius: selectedIndex === 3 ? '50px' : '50px',
                        transition: 'background-color 0.3s ease',
                    }}
                >
                    <TP>
                        <Pe>
                            <TripS>여행자</TripS>
                            <TripSearch>게스트 추가</TripSearch>
                        </Pe>
                        <SearchB>
                            <ImgS src="/images/search.png" alt="search" />
                        </SearchB>
                    </TP>
                </Box>
            </Search>

            {isModal1 && (
                <PlaceModal
                    show={isModal1}
                    onClose={() => setIsModal1(false)}
                    onSelect={() => { }}
                />
            )}
            {isModal3 && (
                <GuestModal onClose={() => setIsModal3(false)} />
            )}
        </StyledHeader>
    );
}

const Box = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

const StyledHeader = styled.div`
    width: 100%;
    height: 25%;
    background-color: #FBFBFB;
    padding: 1% 2.5%;
    border-bottom: solid 1px #EBEBEB;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Lang = styled.div`
    background-color: #F2F2F2;
    border-radius: 50%;
    height: 42px;
    width: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Hosting = styled.p`
    font-size: 15px;
    white-space: nowrap;

`

const TripSearch = styled.p`
    font-size: 14px;
    color: gray;
    font-weight: 400;
`

const TripS = styled.p`
    font-size: 12px;
    font-weight: 400;
`

const Ham = styled.div`
    background-color: #F2F2F2;
    border-radius: 50%;
    height: 42px;
    width: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ImgL = styled.img`
    height: 20px;
`
const UnderlineImg = styled.img`
  height: 25px;
  position: absolute;
  transition: all 0.3s ease; // 추가!
`;


const ImgLine = styled.img<{ $hide?: boolean }>`
    height: 40px;
    width: 15px;
    visibility: ${({ $hide }) => ($hide ? 'hidden' : 'visible')};
`;


const ImgS = styled.img`
    height: 30px;
    margin-left: 5px;
    display: flex;
`

const ImgH = styled.img`
    height: 20px;
`

const RightBox = styled.div`
    display: flex;
    gap: 13px;
    align-items: center;
`

const Top = styled.div`
    display: flex;
    gap: 390px;
`

const SearchB = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    background-color: #FF395C;
    border-radius: 50%;
`

const ImgLogo = styled.img`
    height: 70px;
`
const Search = styled.div`
    height: 8vh;
    width: 59vw;
    background-color: #fff;
    border: solid 1px #EBEBEB;
    border-radius: 50px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    margin-top: 20px;
    align-items: center;
`
const Trip = styled.div`
    width: 19vw;
    height: 8vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 30px;
    &:hover{
        background-color: #EBEBEB;
        border-radius: 50px;
    }
`

const Check1 = styled.div`
    width: 9.5vw;
    //background-color: #ccc;
    height: 7.75vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 15px;
    //border-radius: 50px;
    &:hover{
        background-color: #EBEBEB;
        border-radius: 50px;
    }
`

const Check2 = styled.div`
    width: 9.5vw;
    //background-color: #ccc;
    height: 7.75vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 15px;
    //border-radius: 50px;
    &:hover{
        background-color: #EBEBEB;
        border-radius: 70px;
    }
`
const Pe = styled.div`
    justify-content: center;
    flex-direction: column;
    display: flex;
    gap: 5px;
`


const TP = styled.div`
    width: 18vw;
    height: 8vh;
    align-items: center;
    //border-radius: 50px;
    display: flex;
    padding-left: 20px;
    gap: 110px;
    //background-color: #ccc;
    &:hover{
        background-color: #EBEBEB;
        border-radius: 50px;
    }
`

const ImgF = styled.div`
    height: 70px;
    display: flex;
    flex-direction: column;
`

const Label = styled.p<{ selected?: boolean }>`
    font-size: 16px;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    color: ${props => props.selected ? '#000' : 'gray'};
    font-weight: ${props => props.selected ? 500 : 400};
    font-size: 14px;
    margin-left: -10px;
    
    &:hover {
        color: #000;
    }
`

const Label1 = styled.p<{ selected?: boolean }>`
    font-size: 16px;
    margin: 0;
    padding: 0;
    margin-top: 25px;
    white-space: nowrap;
    color: ${props => props.selected ? '#000' : 'gray'};
    font-weight: ${props => props.selected ? 500 : 400};
    font-size: 14px;
    margin-left: -2px;
    
    &:hover {
        color: #000;
    }
`

const Nav = styled.div`
    display: flex;
    gap: 42px;
`

const House = styled.div`
    display: flex;
    width: 70px;
    height: 70px;
    flex-direction: row;
    margin-top: 8px;
    cursor: pointer;
`

const Video = styled.video`
    height: 65px;
    transition: transform 0.2s ease-in-out;

    ${House}:hover & {
        transform: scale(1.1);
    }
`

const ImgNew = styled.img`
    height: 25px;
    margin-left: -20px;
    transition: transform 0.2s ease-in-out;

    ${House}:hover & {
        transform: scale(1.1);
    }
`