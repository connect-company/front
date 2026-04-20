"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

interface KakaoMapProps {
  lat: number;
  lng: number;
  name: string;
}

export const KakaoMap = ({ lat, lng, name }: KakaoMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markerRef = useRef<any>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current) return;
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(lat, lng);
        mapInstanceRef.current = new window.kakao.maps.Map(mapRef.current, {
          center: position,
          level: 3,
          scrollwheel: false,
        });
        markerRef.current = new window.kakao.maps.Marker({ position });
        markerRef.current.setMap(mapInstanceRef.current);

        window.kakao.maps.event.addListener(mapInstanceRef.current, "click", () => {
          const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
          if (isMobile) {
            window.location.href = `kakaomap://look?p=${lat},${lng}`;
            setTimeout(() => {
              window.open(`https://map.kakao.com/link/to/${name},${lat},${lng}`, "_blank");
            }, 800);
          } else {
            window.open(`https://map.kakao.com/link/to/${name},${lat},${lng}`, "_blank");
          }
        });
      });
    };

    if (window.kakao?.maps) {
      initMap();
      return;
    }

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`;
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);
  }, [lat, lng]);

  useEffect(() => {
    if (!mapInstanceRef.current || !markerRef.current) return;
    const position = new window.kakao.maps.LatLng(lat, lng);
    mapInstanceRef.current.setCenter(position);
    markerRef.current.setPosition(position);
  }, [lat, lng]);

  return <div ref={mapRef} className="w-full h-full" />;
};
