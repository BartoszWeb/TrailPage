import Head from "next/head";
import "../styles/resets.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { AppContexts } from "../contexts/AppContexts";
import { MainTemplate } from "../components/templates/MainTemplate";


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppContexts>
            <Head>
                <title>Trail - User Activity Analytics Tool</title>
                <meta name="description" content="Know your customers and boost your sales with Trail"/>
            </Head>
            <MainTemplate>
                <Component { ...pageProps } />
            </MainTemplate>
        </AppContexts>
    );
}

export default MyApp;