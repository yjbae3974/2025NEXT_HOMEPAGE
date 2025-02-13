import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles} {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="ko">
                <Head>
                    {/* Preconnect & Preload (폰트 & CDN 리소스 최적화) */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
                    <link rel="preconnect" href="https://cdn.jsdelivr.net" />

                    {/* Canonical URL */}
                    <link rel="canonical" href="https://www.next-ku.com/" />

                    {/* Google Site Verification */}
                    <meta name="google-site-verification" content="YdrWjel7OcCUGNmuvaV86uwaB_ZEqJsOqOoV-rKi6vA" />

                    {/* SEO Meta Tags */}
                    <meta name="keywords" content="NEXT, 고려대학교, 창업, 멋쟁이사자처럼, 학회, 소프트웨어, 멋사" />
                    <meta
                        name="description"
                        content="고려대 소프트웨어 창업 학회 | NEXT 개발자 & 스타트업 창업의 허브 🚀 혁신적인 아이디어를 현실로 만들어 보세요."
                    />

                    {/* Lazy load external styles */}
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    />

                    {/* Favicon */}
                    <link rel="icon" href="/favicon.svg" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
