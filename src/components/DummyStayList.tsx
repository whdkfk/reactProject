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
    title: '서울의 아파트',
    dateRange: '3월 6일~8일',
    price: '₩159,765',
    nights: 2,
    rating: 4.94,
    address: '서울특별시 마포구 망원동',
  },
  {
    id: 2,
    isPreferred: false,
    title: '강남 중심의 모던 룸',
    dateRange: '3월 10일~12일',
    price: '₩189,000',
    nights: 2,
    rating: 4.87,
    address: '서울특별시 강남구',
  },
  {
    id: 3,
    isPreferred: true,
    title: '한강 뷰 호텔',
    dateRange: '4월 2일~4일',
    price: '₩210,500',
    nights: 2,
    rating: 4.98,
    address: '부산광역시 해운대구',
  },
  {
    id: 4,
    isPreferred: true,
    title: '제주 오션뷰 펜션',
    dateRange: '6월 1일~3일',
    price: '₩180,000',
    nights: 2,
    rating: 4.91,
    address: '제주특별자치도 제주시',
  },
  {
    id: 1,
    isPreferred: true,
    title: '서울의 아파트',
    dateRange: '3월 6일~8일',
    price: '₩159,765',
    nights: 2,
    rating: 4.94,
    address: '서울특별시 마포구 망원동',
  },
  {
    id: 1,
    isPreferred: true,
    title: '서울의 아파트',
    dateRange: '3월 6일~8일',
    price: '₩159,765',
    nights: 2,
    rating: 4.94,
    address: '서울특별시 마포구 망원동',
  },
  {
    id: 1,
    isPreferred: true,
    title: '서울의 아파트',
    dateRange: '3월 6일~8일',
    price: '₩159,765',
    nights: 2,
    rating: 4.94,
    address: '서울특별시 마포구 망원동',
  },
  {
    id: 1,
    isPreferred: true,
    title: '서울의 아파트',
    dateRange: '3월 6일~8일',
    price: '₩159,765',
    nights: 2,
    rating: 4.94,
    address: '서울특별시 마포구 망원동',
  },
  {
    id: 1,
    isPreferred: true,
    title: '서울의 아파트',
    dateRange: '3월 6일~8일',
    price: '₩159,765',
    nights: 2,
    rating: 4.94,
    address: '서울특별시 마포구 망원동',
  }
  // ... 더미 데이터 추가 가능
];

export default function DummyStayList({
  selectedPlace,
  checkInDate,
  checkOutDate,
}: DummyStayListProps) {
  const [selectedStay, setSelectedStay] = useState<Stay | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  const filteredDummy = useMemo(() => {
    return dummy.filter((stay) => {
      const matchesPlace =
        !selectedPlace || stay.address.includes(selectedPlace);
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

// Styled components
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
