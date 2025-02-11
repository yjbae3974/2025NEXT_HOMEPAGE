import React, { useEffect } from "react";
import * as S from "styles/components/loading/style";
import { useMediaQuery } from "react-responsive";
import Spinner from "public/assets/Spinner.png";
import Image from "next/image";
export default function Loading() {
    const isDesktop = useMediaQuery({ minDeviceWidth: 820 });
    const isMobile = useMediaQuery({ maxWidth: 820 });
    return (
        <S.LoadingContainer>
            <S.LoadingWrapper>
                <Image src="/assets/new_logo(wh).svg" alt="" />
            </S.LoadingWrapper>

            {/* <S.SpinnerWrapper>
        <img src={Spinner.src}></img>
      </S.SpinnerWrapper> */}
            <S.Text>Loading...</S.Text>
        </S.LoadingContainer>
    );
}
