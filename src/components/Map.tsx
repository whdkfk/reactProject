"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    naver: any;
  }
}

const Map = () => {
  const [naverLoaded, setNaverLoaded] = useState(false);

  useEffect(() => {
    if (!naverLoaded) return;

    const mapOptions = {
      center: new window.naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    };

    new window.naver.maps.Map("map", mapOptions);
  }, [naverLoaded]);

  return (
    <>
      <Script
        src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=3e0jo40lcj"
        onLoad={() => setNaverLoaded(true)} // 로드 완료 시 상태 변경
      />
    </>
  );
};

export default Map;
