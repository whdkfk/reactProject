'use client';
import Card from '@/components/Card';
import styled from 'styled-components';
import Detail from '@/components/Detail';
import { useState } from 'react';

interface Stay {
    id: number;
    isPreferred: boolean;
    title: string;
    dateRange: string;
    price: string;
    nights: number;
    rating: number;
    address: string;
}

const dummy: Stay[] = [
    {
        id: 1,
        isPreferred: true,
        title: '서울의 아파트',
        dateRange: '3월 6일~8일',
        price: '₩159,765',
        nights: 2,
        rating: 4.94,
        address: "부산광역시 해운대구 센텀1로 17"
    },
    {
        id: 2,
        isPreferred: false,
        title: '강남 중심의 모던 룸',
        dateRange: '3월 10일~12일',
        price: '₩189,000',
        nights: 2,
        rating: 4.87,
        address: "부산광역시 해운대구 센텀1로 17"
    },
    {
        id: 3,
        isPreferred: true,
        title: '한강 뷰 호텔',
        dateRange: '4월 2일~4일',
        price: '₩210,500',
        nights: 2,
        rating: 4.98,
        address: "부산광역시 해운대구 센텀1로 17"
    },
    {
        id: 4,
        isPreferred: true,
        title: '한강 뷰 호텔',
        dateRange: '4월 2일~4일',
        price: '₩210,500',
        nights: 2,
        rating: 4.98,
        address: "부산광역시 해운대구 센텀1로 17"
    },
    {
        id: 5,
        isPreferred: true,
        title: '한강 뷰 호텔',
        dateRange: '4월 2일~4일',
        price: '₩210,500',
        nights: 2,
        rating: 4.98,
        address: "부산광역시 해운대구 센텀1로 17"
    },
    {
        id: 6,
        isPreferred: true,
        title: '한강 뷰 호텔',
        dateRange: '4월 2일~4일',
        price: '₩210,500',
        nights: 2,
        rating: 4.98,
        address: "부산광역시 해운대구 센텀1로 17"
    },
    {
        id: 7,
        isPreferred: true,
        title: '한강 뷰 호텔',
        dateRange: '4월 2일~4일',
        price: '₩210,500',
        nights: 2,
        rating: 4.98,
        address: "부산광역시 해운대구 센텀1로 17"
    },
    {
        id: 3,
        isPreferred: true,
        title: '한강 뷰 호텔',
        dateRange: '4월 2일~4일',
        price: '₩210,500',
        nights: 2,
        rating: 4.98,
        address: "부산광역시 해운대구 센텀1로 17"
    },
    {
        id: 3,
        isPreferred: true,
        title: '한강 뷰 호텔',
        dateRange: '4월 2일~4일',
        price: '₩210,500',
        nights: 2,
        rating: 4.98,
        address: "부산광역시 해운대구 센텀1로 17"
    }
];

export default function DummyStayList() {
    const [selectedStay, setSelectedStay] = useState<Stay | null>(null);
    const [showDetail, setShowDetail] = useState(false);

    return (
        <OuterWrapper>
            <Content>
                <Seoul>
                    <h3>서울의 인기 숙소</h3>
                    <Container>
                        {dummy.map((stay, index) => (
                            <Card key={index} {...stay} onClick={() => {
                                setSelectedStay(stay);
                                setShowDetail(true);
                            }} />
                        ))}
                    </Container>
                </Seoul>
                <This>
                    <h3>이번 주말에 예약 가능한 제주도 숙소</h3>
                    <Container>
                        {dummy.map((stay, index) => (
                            <Card key={index} {...stay} onClick={() => {
                                setSelectedStay(stay);
                                setShowDetail(true);
                            }} />
                        ))}
                    </Container>
                </This>
                {showDetail && selectedStay && (
                    <Detail
                        show={showDetail}
                        onClose={() => setShowDetail(false)}
                        data={selectedStay}
                    />
                )}
            </Content>
        </OuterWrapper>
    );
}




const OuterWrapper = styled.div`
  overflow-x: hidden;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 10px;
  gap: 10px;
  width: 100%;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    flex: 0 0 auto;
  }

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
`;


const Seoul = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const This = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;


const Content = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;
  flex-direction: column;

  h3{
    margin-left: 10px;
    font-weight: 500;
    font-size: 20px;
  }
`;