import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

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
            <Html>
                <Head>
                    {/* Canonical URL */}
                    <link rel="canonical" href="<https://next-recruit.s3.ap-northeast-2.amazonaws.com/>" />

                    {/* Open Graph (Facebook, LinkedIn, etc.) */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="<https://next-recruit.s3.ap-northeast-2.amazonaws.com/>" />
                    <meta property="og:title" content="NEXT | 고려대학교 소프트웨어 창업학회" />
                    <meta
                        property="og:description"
                        content="🚀 Accelerate Your Potential! 고려대학교 멋쟁이사자처럼 NEXT에서 함께 성장하세요!"
                    />
                    <meta
                        property="og:image"
                        content="<https://next-recruit.s3.ap-northeast-2.amazonaws.com/assets/mail-main.png>"
                    />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />

                    {/* Twitter Meta Tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="NEXT | 고려대학교 소프트웨어 창업학회" />
                    <meta
                        name="twitter:description"
                        content="🚀 Accelerate Your Potential! 고려대학교 멋쟁이사자처럼 NEXT에서 함께 성장하세요!"
                    />
                    <meta
                        name="twitter:image"
                        content="<https://next-recruit.s3.ap-northeast-2.amazonaws.com/assets/mail-main.png>"
                    />
                    <meta name="twitter:url" content="<https://next-recruit.s3.ap-northeast-2.amazonaws.com/>" />

                    {/* SEO Meta Tags */}
                    <meta
                        name="keywords"
                        content="NEXT, 고려대학교, 소프트웨어창업학회, 멋쟁이사자처럼, 넥스트, 소프트웨어, 멋사"
                    />
                    <meta
                        name="description"
                        content="고려대학교 소프트웨어창업학회 NEXT에서는 혁신적인 아이디어를 현실로 만들어갈 창업가 인재를 모집합니다."
                    />

                    {/* Google Site Verification */}
                    <meta name="google-site-verification" content="YdrWjel7OcCUGNmuvaV86uwaB_ZEqJsOqOoV-rKi6vA" />

                    {/* Stylesheets */}
                    <link
                        href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
                        rel="stylesheet"
                        type="text/css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
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
