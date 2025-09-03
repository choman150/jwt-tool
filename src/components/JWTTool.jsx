"use client";

import { useState } from "react";
import { SignJWT, jwtVerify, decodeJwt } from "jose";
import Script from "next/script";
import dynamic from "next/dynamic";
const AdsterraBanner = dynamic(() => import("../components/AdsterraBanner"), { ssr: false });

export default function JWTTool() {
    const [token, setToken] = useState("");
    const [decoded, setDecoded] = useState(null);
    const [header, setHeader] = useState('{"alg":"HS256","typ":"JWT"}');
    const [payload, setPayload] = useState('{"sub":"1234567890","name":"John Doe","iat":1516239022}');
    const [secret, setSecret] = useState("your-256-bit-secret");
    const [encoded, setEncoded] = useState("");

    // secret를 Uint8Array로 변환
    function toUint8Array(secret) {
        return new TextEncoder().encode(secret);
    }

    const decodeJWT = () => {
        try {
            const decodedToken = decodeJwt(token); // 서명 검증 없이 decode
            setDecoded(decodedToken);
        } catch (e) {
            setDecoded({ error: "Invalid token: " + e.message });
        }
    };
    // JWT encode (HS256)
    const encodeJWT = async () => {
        try {
            const parsedHeader = JSON.parse(header); // 헤더는 jose에서 자동 처리됨
            const parsedPayload = JSON.parse(payload);
            const secretKey = toUint8Array(secret);

            const jwt = await new SignJWT(parsedPayload).setProtectedHeader(parsedHeader).sign(secretKey);

            setEncoded(jwt);
        } catch (e) {
            setEncoded(`Encoding error`);
        }
    };

    return (
        <>
            <div className="space-y-6">
                <section>
                    <h2 className="font-semibold mb-2">🔓 Decode JWT</h2>
                    <textarea className="w-full border rounded p-2 text-sm" rows={4} placeholder="Paste your JWT token here..." value={token} onChange={(e) => setToken(e.target.value)} />
                    <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded" onClick={decodeJWT}>
                        Decode
                    </button>
                    {decoded && <pre className="mt-2 bg-gray-100 p-2 rounded text-xs overflow-x-auto">{JSON.stringify(decoded, null, 2)}</pre>}
                </section>

                <hr />
                <div className="ads-center">
                    <AdsterraBanner adKey="e5914e254014a8a5806f4748a3569462" width={728} height={90} />
                </div>

                <section>
                    <h2 className="font-semibold mb-2">🔐 Encode JWT</h2>
                    <label className="block text-sm mb-1">Header (JSON)</label>
                    <textarea className="w-full border rounded p-2 text-sm" rows={2} value={header} onChange={(e) => setHeader(e.target.value)} />
                    <label className="block text-sm mt-3 mb-1">Payload (JSON)</label>
                    <textarea className="w-full border rounded p-2 text-sm" rows={4} value={payload} onChange={(e) => setPayload(e.target.value)} />
                    <label className="block text-sm mt-3 mb-1">Secret</label>
                    <input className="w-full border rounded p-2 text-sm" type="text" value={secret} onChange={(e) => setSecret(e.target.value)} />
                    <button className="mt-3 px-4 py-1 bg-green-600 text-white rounded" onClick={encodeJWT}>
                        Encode
                    </button>
                    {encoded && <pre className="mt-2 bg-gray-100 p-2 rounded text-xs break-words whitespace-pre-wrap">{encoded}</pre>}
                </section>
            </div>
        </>
    );
}
