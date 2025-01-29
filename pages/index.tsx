import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery({ minDeviceWidth: 1000 });
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <div>
      <Head>
        <title>NEXT</title>
        <meta name="description" content="고려대학교 소프트웨어창업학회 NEXT" />
        <meta name="description" content="🚀Acclerate Your Potential! NEXT(고려대학교 멋쟁이사자처럼)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>헤더 반응 테스트용. 사라질 페이지. /home에서 시작할 예정</h2>
      <div style={{ width: "100%", height: "300vh", background: "grey" }}></div>
    </div>
  );
}
