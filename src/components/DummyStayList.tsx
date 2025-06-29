'use client';
import styled from 'styled-components';
import { useState, useMemo } from 'react';
import Card from '@/components/Card';
import Detail from '@/components/Detail';

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

interface DummyStayListProps {
  selectedPlace: string | null;
  checkInDate: Date | null;
  checkOutDate: Date | null;
}

const dummy: Stay[] = [
  {
    id: 1,
    isPreferred: true,
    title: '부산의 아파트',
    dateRange: '6월 6일~8일',
    price: '₩159,765',
    nights: 2,
    rating: 4.94,
    address: '부산광역시 마포구 망원동',
  },
  {
    id: 2,
    isPreferred: false,
    title: '광안리 중심의 모던 룸',
    dateRange: '6월 6일~8일',
    price: '₩189,000',
    nights: 2,
    rating: 4.87,
    address: '광안리해수욕장, 부산',
  },
  {
    id: 3,
    isPreferred: true,
    title: '광안리 뷰 호텔',
    dateRange: '6월 6일~8일',
    price: '₩210,500',
    nights: 2,
    rating: 4.98,
    address: '광안리해수욕장, 부산',
  },
  {
    id: 4,
    isPreferred: true,
    title: '제주 오션뷰 펜션',
    dateRange: '6월 6일~8일',
    price: '₩180,000',
    nights: 2,
    rating: 4.91,
    address: '서귀포시, 제주도',
  },
  {
    id: 5,
    isPreferred: true,
    title: '전주의 아파트',
    dateRange: '6월 6일~8일',
    price: '₩159,765',
    nights: 2,
    rating: 4.94,
    address: '전주',
  },
  {
    id: 6,
    isPreferred: true,
    title: '오사카 주택',
    dateRange: '6월 6일~8일',
    price: '₩159,765',
    nights: 2,
    rating: 4.94,
    address: '오사카시, 일본',
  },
  {
    id: 7,
    isPreferred: true,
    title: '제주 마당 주택',
    dateRange: '6월 6일~8일',
    price: '₩159,765',
    nights: 2,
    rating: 4.94,
    address: '서귀포시, 제주도',
  },
  {
    id: 8,
    isPreferred: true,
    title: '강릉 아파트',
    dateRange: '6월 6일~8일',
    price: '₩159,765',
    nights: 2,
    rating: 4.94,
    address: '강릉시, 강원도',
  },
  {
    id: 9,
    isPreferred: true,
    title: '속초시 숙소',
    dateRange: '6월 6일~8일',
    price: '₩159,765',
    nights: 2,
    rating: 4.94,
    address: '속초시, 강원도',
  },
  {
    id: 10,
    isPreferred: true,
    title: '전주 호텔',
    dateRange: '6월 6일~8일',
    price: '₩159,765',
    nights: 2,
    rating: 4.94,
    address: '전주, 전라북도',
  }
];

export default function DummyStayList({
  selectedPlace,
  checkInDate,
  checkOutDate,
}: DummyStayListProps) {
  const [selectedStay, setSelectedStay] = useState<Stay | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  const filteredDummy = useMemo(() => {
    const isValidDateRange = (() => {
      if (!checkInDate || !checkOutDate) return true;
      const start = new Date(checkInDate.getFullYear(), 5, 6);
      const end = new Date(checkInDate.getFullYear(), 5, 8);
  
      return checkInDate >= start && checkInDate <= end && checkOutDate >= start && checkOutDate <= end;
    })();
  
    if (!isValidDateRange) {
      return [];
    }
  
    return dummy.filter((stay) => {
      const matchesPlace = !selectedPlace || stay.address.includes(selectedPlace);
      return matchesPlace;
    });
  }, [selectedPlace, checkInDate, checkOutDate]);
  

  return (
    <Wrapper>
      <h3>추천 숙소</h3>
      {filteredDummy.length === 0 ? (
        <p>조건에 맞는 숙소가 없습니다.</p>
      ) : (
        <CardContainer>
          {filteredDummy.map((stay) => (
            <Card
              key={stay.id}
              {...stay}
              onClick={() => {
                setSelectedStay(stay);
                setShowDetail(true);
              }}
            />
          ))}
        </CardContainer>
      )}

      {showDetail && selectedStay && (
        <Detail
          show={showDetail}
          onClose={() => setShowDetail(false)}
          data={selectedStay}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px 30px;
  display:flex;
  flex-direction: column;
  gap: 15px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;
