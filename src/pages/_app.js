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
            <main className="p-6 max-w-5xl mx-auto" role="main">
                <Menu />
                <Component {...pageProps} />
                <Footer />
            </main>
            <Analytics />
            <SpeedInsights />
        </>
    );
}
