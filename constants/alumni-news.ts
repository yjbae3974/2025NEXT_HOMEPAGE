import { ALUMNI_NEWS_INFORMATION_TYPE } from './../types/people/alumni-news-information';

export const GENERATIONS = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    ELEVEN: 11,
    TWELVE: 12,
};

// 현재 미사용
// export enum OCCUPATIONS {
//     DEVELOPER = '개발자',
//     ENTREPRENEUR = '창업가',
//     PM = 'PM',
//     CONSULTANT = '컨설턴트',
// }

export const ALUMNI_NEWS_INFORMATION: ALUMNI_NEWS_INFORMATION_TYPE[] = [
    {
        gen: GENERATIONS.SIX,
        thumbnailImgSrc: '/assets/유현재.png',
        comment: '미래를 함께 설계하는 최고의 인재풀',
        url: 'https://www.instagram.com/p/DFmnzw6hHvC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        name: '유현재',
    },
    {
        gen: GENERATIONS.EIGHT,
        thumbnailImgSrc: '/assets/류지현.png',
        comment: 'NEXT는 새로운 도약을 위한 디딤돌',
        url: 'https://www.instagram.com/p/DFmn1B7hOB_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        name: '류지현',
    },
    {
        gen: GENERATIONS.SEVEN,
        thumbnailImgSrc: '/assets/최주원.png',
        comment: '창업을 결심하게 된 든든한 발판',
        url: 'https://www.instagram.com/p/DFmnxRwBdaH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        name: '최주원',
    },
    {
        gen: GENERATIONS.THREE,
        thumbnailImgSrc: '/assets/이강희.png',
        comment: '주제척인 삶의 방향성을 가르쳐준 곳',
        url: 'https://www.instagram.com/p/DFmoZbdBFWO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        name: '이강희',
    },
    {
        gen: GENERATIONS.TWO,
        thumbnailImgSrc: '/assets/최예빈.png',
        comment: 'NEXT는 스스로의 가능성을 확장하는 곳',
        url: 'https://www.instagram.com/p/DFmoRvvhX5_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        name: '최예빈',
    },

    {
        gen: GENERATIONS.EIGHT,
        thumbnailImgSrc: '/assets/김범진.png',
        comment: '창업이라는 막연한 꿈이 개발이라는 실천의 기회로',
        url: 'https://www.instagram.com/p/DFmoNsJBcwo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        name: '김범진',
    },
    {
        gen: GENERATIONS.ELEVEN,
        thumbnailImgSrc: '/assets/최성호.png',
        comment: '도전과 성장으로 빛난 창업여장의 출발점',
        url: 'https://www.instagram.com/p/DFmoGOfhEPm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        name: '최성호',
    },
    {
        gen: GENERATIONS.TWELVE,
        thumbnailImgSrc: '/assets/김정현.png',
        comment: ' NEXT는 폭발적 성장을 위한 로켓',
        url: 'https://www.instagram.com/p/DFmn2QqhfBp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        name: '김정현',
    },
    {
        gen: GENERATIONS.TWELVE,
        thumbnailImgSrc: '/assets/임도현.png',
        comment: '창업의 꿈을 현실로 만든 인연과 혁신의 장',
        url: 'https://www.instagram.com/p/DFmlgZ9hPmB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        name: '임도현',
    },
];
