'use client';
import Header from '@/components/Header';
import DummyStayList from '@/components/DummyStayList';
import { useState } from 'react';

export default function HomePage() {
  const [selectedPlace, setSelectedPlace] = useState('');
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [searchParams, setSearchParams] = useState({
    selectedPlace: '',
    checkInDate: null as Date | null,
    checkOutDate: null as Date | null,
  });

  return (
    <>
      <Header
      selectedPlace={selectedPlace}
      setSelectedPlace={setSelectedPlace}
      checkInDate={checkInDate}
      setCheckInDate={setCheckInDate}
      checkOutDate={checkOutDate}
      setCheckOutDate={setCheckOutDate}
      onSearch={() =>
        setSearchParams({
          selectedPlace,
          checkInDate,
          checkOutDate,
        })
      }
    />

    <DummyStayList
      selectedPlace={searchParams.selectedPlace}
      checkInDate={searchParams.checkInDate}
      checkOutDate={searchParams.checkOutDate}
    />
    </>
  );
}
