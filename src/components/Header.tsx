'use client';
import styled from "styled-components";
import Image from 'next/image';
import { useRef, useState } from "react";
import PlaceModal from "./TripModal";
import GuestModal from '@/components/GuestModal';
import CheckModal from '@/components/CheckModal';
import Login from './Login';


interface Place {
    name: string;
}

interface HeaderProps {
    selectedPlace: string;
    setSelectedPlace: (place: string) => void;
    checkInDate: Date | null;
    setCheckInDate: (date: Date | null) => void;
    checkOutDate: Date | null;
    setCheckOutDate: (date: Date | null) => void;
    onSearch: () => void;
}


export default function Header({
    selectedPlace,
    setSelectedPlace,
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    onSearch,
}: HeaderProps) {

    const [select, setSelect] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [pos, setPos] = useState({ x: 550, y: 73 });
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [isModal1, setIsModal1] = useState(false);
    const [isModal2, setIsModal2] = useState(false);
    const [isModal3, setIsModal3] = useState(false);
    const [dateFocus, setDateFocus] = useState<'checkin' | 'checkout' | null>(null);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [userName, setUserName] = useState('');


    const handlePlaceSelect = (place: Place) => {
        setSelectedPlace(place.name);
        setSelectedIndex(null);
    };

    const videoRef = useRef<HTMLVideoElement>(null);
    const videoRef2 = useRef<HTMLVideoElement>(null);
    const videoRef3 = useRef<HTMLVideoElement>(null);
    const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

    const handleClick = (index: number) => {
        setSelect(index);
        const positions = [
            { x: 550, y: 73 },
            { x: 670, y: 73 },
            { x: 770, y: 73 }
        ];
        setPos(positions[index]);

        videoRefs.forEach((ref, i) => {
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

    const handlePlaceClick = () => {
        setSelectedIndex(0);
        setIsModal1(true);
    };


    return (
        <StyledHeader>
            <Top>
                <ImgLogo src="/icons/logo.png?v=2" alt="logo" height={70} />
                <Nav>
                    <House onClick={() => handleClick(0)}>
                        <Video
                            ref={videoRef}
                            src="/videos/house.mov"
                            width={600}
                            height={25}
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
                            width={600}
                            height={25}
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
                            width={600}
                            height={25}
                            controls={false}
                        />
                        <ImgF>
                            <ImgNew src="/icons/new.png" alt="new" />
                            <Label selected={select === 2}>서비스</Label>
                        </ImgF>
                    </House>
                </Nav>
                <RightBox>
                    {!isLogin ? (
                        <Hosting onClick={() => setIsLoginModalOpen(true)}>로그인하기</Hosting>
                    ) : (
                        <Hosting>{userName}님</Hosting>
                    )}
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
                        borderRadius: '50px',
                        transition: 'background-color 0.3s ease',
                    }}
                >
                    <Trip>
                        <TripS>여행지</TripS>
                        <TripSearch>{selectedPlace || '여행지 검색'}</TripSearch>
                    </Trip>
                </Box>

                <ImgLine $hide={hoveredIndex === 0 || hoveredIndex === 1} src="images/line.png" alt="line" />

                <Box
                    onClick={() => {
                        setSelectedIndex(1);
                        setIsModal2(true);
                        setDateFocus('checkin');
                    }}
                    onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                        backgroundColor: selectedIndex === 1 ? '#EBEBEB' : '#fff',
                        borderRadius: '50px',
                        transition: 'background-color 0.3s ease',
                    }}
                >
                    <Check1>
                        <TripS>체크인</TripS>
                        <TripSearch>{checkInDate ? checkInDate.toLocaleDateString() : '날짜 추가'}</TripSearch>
                    </Check1>
                </Box>

                <ImgLine $hide={hoveredIndex === 1 || hoveredIndex === 2} src="images/line.png" alt="line" />

                <Box
                    onClick={() => {
                        setSelectedIndex(2);
                        setIsModal2(true);
                        setDateFocus('checkout');
                    }}
                    onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                        backgroundColor: selectedIndex === 2 ? '#EBEBEB' : '#fff',
                        borderRadius: '50px',
                        transition: 'background-color 0.3s ease',
                    }}
                >
                    <Check2>
                        <TripS>체크아웃</TripS>
                        <TripSearch>{checkOutDate ? checkOutDate.toLocaleDateString() : '날짜 추가'}</TripSearch>
                    </Check2>
                </Box>

                <ImgLine $hide={hoveredIndex === 2 || hoveredIndex === 3} src="images/line.png" alt="line" />

                <Box
                    onClick={() => {
                        setSelectedIndex(3);
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

                        <SearchB
                            onClick={(e) => {
                                e.stopPropagation();
                                onSearch();
                            }}
                        >
                            <ImgS src="/images/search.png" alt="search" />
                        </SearchB>
                    </TP>
                </Box>
            </Search>

            {isModal1 && (
                <PlaceModal
                    show={isModal1}
                    onClose={() => {
                        setIsModal1(false);
                        setSelectedIndex(null);
                    }}
                    onSelect={handlePlaceSelect}
                />
            )}
            {isModal2 && (
                <CheckModal
                    show={isModal2}
                    onClose={() => {
                        setIsModal2(false);
                        setSelectedIndex(null);
                    }}
                    focus={dateFocus}
                    onSelect={(checkIn, checkOut) => {
                        setCheckInDate(checkIn);
                        setCheckOutDate(checkOut);
                    }}
                />
            )}
            {isModal3 && (
                <GuestModal
                    show={isModal3}
                    onClose={() => {
                        setIsModal3(false);
                        setSelectedIndex(null);
                    }}
                />
            )}
            {isLoginModalOpen && (
                <Login
                    show={isLoginModalOpen}
                    onClose={() => {
                        setIsLoginModalOpen(false);
                        setSelectedIndex(null);
                    }}
                    onLoginSuccess={(name: string) => {
                        setUserName(name);
                        setIsLogin(true);
                        setIsLoginModalOpen(false);
                      }}                      
                />
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
    cursor: pointer;
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
  transition: all 0.3s ease;
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