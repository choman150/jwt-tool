// pages/_app.js
import Script from "next/script";
import "../styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>JWT Encoder / Decoder</title>
                <meta name="description" content="Online tool to encode and decode JSON Web Tokens (JWT). Secure, fast, and browser-based." />
                <meta name="keywords" content="JWT, JSON Web Token, JWT Encoder, JWT Decoder, JWT Online Tool, JWT Generator, JWT Debugger, jose, JWT HS256, decode JWT online, encode JWT token" />
                <meta property="og:title" content="JWT Encoder / Decoder" />
                <meta property="og:description" content="Encode and decode JWT tokens in your browser. Powered by jose and open-source." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://jwt.choman150.click/" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="ko_KR" />
                <meta name="author" content="choman150" />
                {/* <meta name="google-adsense-account" content="ca-pub-7141076584440289" /> */}
                <link rel="canonical" href="https://jwt.choman150.click" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="monetag" content="aa6d902b00779634855e673864e8880a" />
            </Head>
            <main className="p-6 max-w-5xl mx-auto" role="main">
                <Menu />
                <Component {...pageProps} />
                <Script src="https://fpyf8.com/88/tag.min.js" data-zone="164321" async data-cfasync="false" strategy="afterInteractive" />
                <Footer />
            </main>
            <Analytics />
            <SpeedInsights />
        </>
    );
}
