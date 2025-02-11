import { ItemProps } from './../../../node_modules/rc-overflow/es/Item.d';
import styled, { css, keyframes } from 'styled-components';
import { THEME } from 'styles/theme';

export const Container2 = styled.div<{ isMobile: boolean }>`
    position: relative;
    width: 100%;
    max-width: 150rem;
    min-height: 100vh;

    margin: 0 auto;
    padding: 3rem 0%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const CardDiv = styled.div`
    width: 40rem;
    height: 33rem;

    margin: 0 2rem 5rem 2rem;

    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    /* margin-bottom: 5rem; */
    background-color: #f2f2f2;
    padding: 2rem 5rem;
    border-radius: 30px;
    /* @media screen and (max-width: 500px) {
    width: 50rem;
  } */
`;

export const CardTopDiv = styled.div`
    /* width: 700px; */
    width: 41.1764 rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const GenerationDiv = styled.div`
    width: 70px;
    height: 30px;

    gap: 10px;
    flex-shrink: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    background: #f7941e;

    color: #fff;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
`;

export const LinkToUrl = styled.a`
    padding: 0;
    margin: 0;
    cursor: pointer;
`;
export const OccupationDiv = styled.div`
    width: 70px;
    height: 30px;

    margin: 0px 7px;
    gap: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;
    border-radius: 5px;
    border: 2px solid #f7941e;
    background: #fff;

    color: #f7941e;
    text-align: center;

    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const LogoImgDiv = styled.div`
    width: 84px;
    height: 43px;
    & img {
        width: 100%;
    }
`;

const starsAnimation = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 1000px 1000px;
  }
`;

export const ThumbnailImgDiv = styled.div`
    width: 300px;
    height: 170px;
    background: radial-gradient(circle at center, #1a1a2e, #0f0f1e, #060606); /* ✅ 우주 느낌의 그라데이션 */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    margin: 2rem;
    border-radius: 12px; /* 둥근 모서리 추가 */
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
        transition: all 0.3s ease-in-out;
    }

    // /* 별 반짝이는 효과 */
    // &:before {
    //     content: '';
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     background: url('https://www.transparenttextures.com/patterns/stardust.png'); /* 별 패턴 */
    //     background-size: 500%;
    //     opacity: 0.5;
    //     animation: ${starsAnimation} 20s linear infinite;
    // }

    // /* 은하 느낌 추가 */
    // &:after {
    //     content: '';
    //     position: absolute;
    //     width: 200px;
    //     height: 200px;
    //     background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0) 60%);
    //     top: -50px;
    //     left: -50px;
    //     opacity: 0.6;
    //     filter: blur(30px);
    // }
`;

export const CommentDiv = styled.div`
    color: #000;
    width: 250px;
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 1rem;
`;
