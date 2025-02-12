import * as S from 'styles/activities/components/project/index';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';
import SliderSlick from 'components/sliderSlick/index';
import { ProjectItem } from 'constants/project';
import hackathon_codeit from 'public/images/activities/project/hackathon_codeit.jpg';
import ideathon from 'public/images/activities/project/ideathon.png';
import product_day from 'public/images/activities/project/product_day.jpg';

export default function Curriculrum() {
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
        <>
            {!loading && (
                <S.Container className="mount" isMobile={isMobile}>
                    <S.MainContainer isMobile={isMobile}>
                        <S.SessionWrapper isMobile={isMobile}>
                            <S.SessionTitleBox isMobile={isMobile}>
                                <p>아이디어톤</p>
                            </S.SessionTitleBox>
                            <S.SessionSemiTitleBox isMobile={isMobile}>
                                <p>5월 초</p>
                            </S.SessionSemiTitleBox>
                            <S.SessionInfoBox isMobile={isMobile}>
                                다양한 아이디어를 함께 고민하고 발전시켜 나가는 시간입니다. <br />
                                창의적인 발상과 팀원 간의 협업을 통해 새로운 가능성을 모색하며, <br />
                                간단한 아이디어부터 구체적인 계획까지 도출하는 경험을 쌓습니다.
                            </S.SessionInfoBox>
                            <S.SessionImgBox isMobile={isMobile}>
                                <img src={ideathon.src} alt="아이디어어톤" />
                            </S.SessionImgBox>
                        </S.SessionWrapper>
                        <S.SessionWrapper isMobile={isMobile}>
                            <S.SessionTitleBox isMobile={isMobile}>
                                <p>5월 중순</p>
                            </S.SessionTitleBox>
                            <S.SessionSemiTitleBox isMobile={isMobile}>
                                <p>무박 해커톤</p>
                            </S.SessionSemiTitleBox>
                            <S.SessionInfoBox isMobile={isMobile}>
                                꿈꿔왔던 아이템을 개발 세션을 통해 배운 도구들로 직접 만들어봅니다. <br />
                                제한된 시간 안에 아이디어를 선정하고 배포하는 것을 목표로 하며, <br />
                                창업가로서의 협업 경험을 쌓습니다.
                            </S.SessionInfoBox>
                            <S.SessionImgBox isMobile={isMobile}>
                                <img src={hackathon_codeit.src} alt="무박해커톤" />
                            </S.SessionImgBox>
                        </S.SessionWrapper>
                        <S.SessionWrapper isMobile={isMobile}>
                            <S.SessionTitleBox isMobile={isMobile}>
                                <p>프로덕트 데이</p>
                            </S.SessionTitleBox>
                            <S.SessionSemiTitleBox isMobile={isMobile}>
                                <p>5-6월</p>
                            </S.SessionSemiTitleBox>
                            <S.SessionInfoBox isMobile={isMobile}>
                                4주동안 새로운 팀원들과 소통하며 단순한 서비스 구현을 넘어 <br />
                                실제 프로덕트 완성과 운영에 집중합니다. <br />
                                <br />
                            </S.SessionInfoBox>
                            <S.SessionImgBox isMobile={isMobile}>
                                <img src={product_day.src} alt="프로덕트 데이" />
                            </S.SessionImgBox>
                        </S.SessionWrapper>
                        {/* <S.ProjectExampleWrapper>
              <S.ProjectTextBox>NEXT 프로젝트 예시</S.ProjectTextBox>
              <S.SlideWrapper>
                <SliderSlick slideItemGroup={ProjectItem} slideShowGroup={2} />
              </S.SlideWrapper>
            </S.ProjectExampleWrapper> */}
                    </S.MainContainer>
                </S.Container>
            )}
        </>
    );
}
