'use client';
import React from "react";
import List from "@/app/list";
import styled from 'styled-components';

function Page() {
  return (
    <Container>
      <List />
    </Container>
  );
}

export default Page;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 2%;
`