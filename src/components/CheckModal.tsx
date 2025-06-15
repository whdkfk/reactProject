'use client';

import styled from "styled-components";
import { useState } from "react";
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isBefore, isSameDay, isWithinInterval } from "date-fns";

interface CalendarModalProps {
  show: boolean;
  onClose: () => void;
  onSelect: (checkIn: Date | null, checkOut: Date | null) => void;
  focus: 'checkin' | 'checkout' | null;
}

export default function CheckModal({ show, onClose, onSelect }: CalendarModalProps) {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const handleDateClick = (date: Date) => {
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(date);
      setCheckOut(null);
      onSelect(date, null);
    } else if (isBefore(date, checkIn)) {
      setCheckIn(date);
      onSelect(date, null);
    } else {
      setCheckOut(date);
      onSelect(checkIn, date);
    }
  };

  if (!show) return null;

  const today = new Date();
  const monthStart = startOfMonth(today);
  const nextMonthStart = startOfMonth(addMonths(today, 1));

  const renderMonth = (startDate: Date) => {
    const days = eachDayOfInterval({ start: startOfMonth(startDate), end: endOfMonth(startDate) });
    return (
      <MonthContainer>
        <MonthTitle>{format(startDate, "yyyy년 MM월")}</MonthTitle>
        <Weekdays>
          {["일", "월", "화", "수", "목", "금", "토"].map(day => <Weekday key={day}>{day}</Weekday>)}
        </Weekdays>
        <Dates>
          {days.map((date: Date) => {
            const selected = (checkIn && isSameDay(date, checkIn)) || (checkOut && isSameDay(date, checkOut));
            const inRange = checkIn && checkOut && isWithinInterval(date, { start: checkIn, end: checkOut });
            return (
              <DateCell key={date.toString()} selected={selected ?? false} inRange={inRange ?? false} onClick={() => handleDateClick(date)}>
                {format(date, 'd')}
              </DateCell>
            );
          })}
        </Dates>
      </MonthContainer>
    );
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CalendarWrapper>
          {renderMonth(monthStart)}
          {renderMonth(nextMonthStart)}
        </CalendarWrapper>
      </Modal>
    </Overlay>
  );
}


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 1000;
`;

const Modal = styled.div`
  background: white;
  padding: 30px;
  border-radius: 35px;
  box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.1);
  width: 700px;
  height: 45vh;
  margin-top: 200px;
  margin-left: 380px;
`;

const CalendarWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const MonthContainer = styled.div`
  width: 100%;
`;

const MonthTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Weekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 14px;
  color: gray;
  margin-bottom: 5px;
`;

const Weekday = styled.div`
  text-align: center;
`;

const Dates = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const DateCell = styled.div<{ selected: boolean, inRange: boolean }>`
  text-align: center;
  padding: 8px 0;
  margin: 2px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({ selected, inRange }) =>
    selected ? '#000' : inRange ? '#eee' : 'transparent'};
  color: ${({ selected }) => (selected ? 'white' : 'black')};

  &:hover {
    background-color: #ddd;
  }
`;
