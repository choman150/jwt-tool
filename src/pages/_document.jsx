import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="monetag" content="aa6d902b00779634855e673864e8880a" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('vemtoutcheeg.com',9733016,document.createElement('script'))`,
                    }}
                ></script>

                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('gizokraijaw.net',9733080,document.createElement('script'))`,
                    }}
                ></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
