import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="/assets/favicon.ico"/>
                    <link rel="preload" href="/fonts/lato-v22-latin-regular.woff2" as="font" type="font/woff2"
                          crossOrigin=""/>
                    <link rel="preload" href="/fonts/lato-v22-latin-300.woff2" as="font" type="font/woff2"
                          crossOrigin=""/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }

    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App { ...props } />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        { initialProps.styles }
                        { sheet.getStyleElement() }
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
}