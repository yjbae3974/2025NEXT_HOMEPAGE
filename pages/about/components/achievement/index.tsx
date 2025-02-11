import React, { useState, useEffect } from 'react';
import * as S from 'styles/about/components/achievement/styles';
import { useMediaQuery } from 'react-responsive';
import { Startups as StartupsItems } from 'constants/startups';
import AOS from 'aos';
import 'aos/dist/aos.css';
import blackLogo from 'public/assets/new_logo(bl).svg';
import Image from "next/image";
export const DESKTOP_TAB = {
    width: '100%',
    margin: '0 auto 2rem auto',
};

export default function Achievement() {
    const [loading, setLoading] = useState(true);
    const isDesktop = useMediaQuery({ minDeviceWidth: 820 });
    const isMobile = useMediaQuery({ maxWidth: 820 });

    useEffect(() => {
        AOS.init();
        if (isMobile != undefined && isDesktop != undefined) {
            setLoading(false);
        }
    }, []);
    return (
        <S.Container isMobile={isMobile}>
            <S.MainWrapper isMobile={isMobile}>
                <S.TextWrapper isMobile={isMobile}>
                    <p>
                        <span>
                            고려대학교 소프트웨어 창업학회
                            <Image
                                src={blackLogo}
                                alt="NEXT"
                                style={{
                                    height: '1em',
                                    verticalAlign: 'top',
                                    margin: '0 5px',
                                    display: 'inline-block',
                                }}
                            />
                            에서는
                        </span>
                    </p>
                    <p>
                        아이디어를 기반으로 모인 팀이 서비스를 직접 실현하고
                        <br />
                        <span>
                            <b>MVP를 제작하여 빠른 시장 검증</b>
                        </span>
                        을 통해 다양한 스타트업이 탄생했습니다
                    </p>
                </S.TextWrapper>
                <S.ImageWrapper isMobile={isMobile} className="mount">
                    {StartupsItems.map(({ name, src }) => (
                        <S.ImageElementWrapper key={name} data-aos="fade" isMobile={isMobile}>
                            <Image src={src} alt={name} />
                        </S.ImageElementWrapper>
                    ))}
                </S.ImageWrapper>
            </S.MainWrapper>
        </S.Container>
    );
}
