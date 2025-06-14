'use client';
import styled from "styled-components";
import Image from 'next/image';
import { useRef, useState } from "react";
import New from '../app/assets/new.png';


export default function Header() {
    const [select, setSelect] = useState<number | null>(null);

    const videoRef = useRef<HTMLVideoElement>(null);
    const videoRef2 = useRef<HTMLVideoElement>(null);
    const videoRef3 = useRef<HTMLVideoElement>(null);

    const handleClick = (index: number) => {
        setSelect(index);

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
                        <ImgL src="/images/lang.png" alt="lang"/>
                    </Lang>
                    <Ham>
                        <ImgH src="/images/ham.png" alt="ham"/>
                    </Ham>
                </RightBox>
            </Top>
        </StyledHeader>
    );
}

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

const ImgLogo = styled.img`
    height: 70px;
`
const Search = styled.div`
    height: 70px;
    width: 59vw;
    background-color: #fff;
    border: solid 1px lightgray;
    border-radius: 50px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    margin-top: 15px;
`
const Trip = styled.div`
    height: 60px;
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