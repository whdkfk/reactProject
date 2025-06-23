"use client";

import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  address: string;
}

const KakaoMap = ({ address }: KakaoMapProps) => {
  const [coordinates, setCoordinates] = useState({ lat: 33.450701, lng: 126.570667 });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.kakao) {
      const geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.addressSearch(address, (result: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const { x, y } = result[0];
          setCoordinates({ lat: parseFloat(y), lng: parseFloat(x) });
        } else {
          console.error(address);
        }
      });
    }
  }, [address]);

  return (
    <Map center={coordinates} style={{ width: "100%", height: "476px" }} level={3}>
      <MapMarker position={coordinates}></MapMarker>
    </Map>
  );
};

export default KakaoMap;