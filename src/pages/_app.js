// pages/_app.js
import Script from "next/script";
import "../styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import dynamic from "next/dynamic";
const AdsterraBanner = dynamic(() => import("../components/AdsterraBanner"), { ssr: false });

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
            <div className="ads-left">
                <AdsterraBanner adKey="ff4f45f0ca9219bb73234611494921ce" width={160} height={600} />
            </div>
            <div className="ads-right">
                <AdsterraBanner adKey="f5b56f45135fb8ff6407bd8c1ef4b6ef" width={160} height={300} />
            </div>
        </>
    );
}
