/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.next-ku.com", // 실제 도메인
    generateRobotsTxt: true, // robots.txt 자동 생성
    sitemapSize: 5000, // 한 개의 sitemap 파일에 들어갈 최대 URL 수 (기본값: 5000)
    changefreq: "daily", // 검색 엔진에 URL 변경 빈도 알림
    priority: 0.7, // 기본 우선순위 (홈페이지는 자동으로 1.0으로 설정됨)
};
