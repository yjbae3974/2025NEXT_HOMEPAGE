import GlobalStyle from "styles/GlobalStyle";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { useRouter, Router } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import Loading from "components/loading/index";
import * as gtag from "lib/gtag";
import Head from "next/head";
import Header from "components/header";
import Script from "next/script";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const defaultTitle = "NEXT - 고려대 멋사 | 고려대학교 소프트웨어 창업학회";
const defaultDescription =
    "고려대 소프트웨어 창업학회 NEXT에서는 혁신적인 아이디어를 현실로 만들어갈 창업가 인재를 모집합니다.";
const defaultImage = "https://next-recruit.s3.ap-northeast-2.amazonaws.com/assets/mail-main.png";
const defaultUrl = "https://www.next-ku.com/";

export default function App({ Component, pageProps }: AppProps<{ session: Session }>) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const start = () => {
            // NProgress.start();
            setLoading(true);
        };
        const end = () => {
            // NProgress.done();
            setLoading(false);
        };

        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);

        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);
    // GA 설정 시작
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: any) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        router.events.on("hashChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
            router.events.off("hashChangeComplete", handleRouteChange);
        };
    }, [router.events]);
    // GA 설정 끝
    return (
        <SessionProvider session={pageProps.session}>
            <RecoilRoot>
                <ChakraProvider>
                    <GlobalStyle>
                        <Head>
                            // 추후 동적으로 meta tag 업데이트 가능
                            {/* Open Graph (Facebook, LinkedIn, etc.) */}
                            <meta property="og:type" content="website" />
                            <meta property="og:url" content="https://www.next-ku.com/" />
                            <meta property="og:title" content="고려대 소프트웨어 창업 학회 | NEXT (고려대 멋사)" />
                            <meta
                                property="og:description"
                                content="고려대 소프트웨어 창업 학회 | NEXT에서 개발자 & 스타트업 창업의 허브 🚀 혁신적인 아이디어를 현실로 만들어 보세요."
                            />
                            <meta
                                property="og:image"
                                content="https://next-recruit.s3.ap-northeast-2.amazonaws.com/assets/mail-main.png"
                            />
                            <meta property="og:image:width" content="1200" />
                            <meta property="og:image:height" content="630" />
                            {/* Twitter Meta Tags */}
                            <meta name="twitter:card" content="summary_large_image" />
                            <meta name="twitter:title" content="고려대 소프트웨어 창업 학회 | NEXT (고려대 멋사)" />
                            <meta
                                name="twitter:description"
                                content="고려대 소프트웨어 창업 학회 | NEXT에서 개발자 & 스타트업 창업의 허브 🚀 혁신적인 아이디어를 현실로 만들어 보세요."
                            />
                            <meta
                                name="twitter:image"
                                content="https://next-recruit.s3.ap-northeast-2.amazonaws.com/assets/mail-main.png"
                            />
                            <meta name="twitter:url" content="https://www.next-ku.com/" />
                            {/* SEO Meta Tags */}
                            <meta
                                name="keywords"
                                content="NEXT, 고려대학교, 창업, 멋쟁이사자처럼, 학회, 소프트웨어, 멋사"
                            />
                            <meta
                                name="description"
                                content="고려대 소프트웨어 창업 학회 | NEXT에서 개발자 & 스타트업 창업의 허브 🚀 혁신적인 아이디어를 현실로 만들어 보세요."
                            />
                        </Head>
                        <Header></Header>
                        {/* GA 설정 시작 */}
                        <Script
                            strategy="afterInteractive"
                            src="https://www.googletagmanager.com/gtag/js?id=G-EH9Q3YYL1L"
                        />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-EH9Q3YYL1L');
                `}
                        </Script>
                        {/* GA 설정 끝 */}
                        {loading ? <Loading /> : <Component {...pageProps} />}
                        {/* <Loading /> */}
                    </GlobalStyle>
                </ChakraProvider>
            </RecoilRoot>
        </SessionProvider>
    );
}
