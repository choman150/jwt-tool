import dynamic from "next/dynamic";
const JWTTool = dynamic(() => import("@/components/JWTTool"), { ssr: false });

export default function Home() {
    return (
        <div className="px-4 py-8 max-w-5xl mx-auto">
            <section className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">JWT Encoder / Decoder</h1>
                <p className="text-lg text-gray-600">Securely encode and decode JSON Web Tokens in your browser. Fast, free, and private.</p>
            </section>

            <section className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-blue-800 mb-2">🔓 Decode a JWT</h2>
                    <p className="text-gray-700 text-sm">Paste your JWT token to instantly decode and view the Header and Payload. No server communication.</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-green-800 mb-2">🔐 Encode a JWT</h2>
                    <p className="text-gray-700 text-sm">Enter custom Header, Payload, and Secret to generate a signed JWT using HS256.</p>
                </div>
            </section>

            <section className="mb-16">
                <JWTTool />
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Use This Tool?</h2>
                <ul className="space-y-3 text-gray-700 list-disc list-inside">
                    <li>
                        <strong>✅ 100% client-side:</strong> Nothing is sent to a server.
                    </li>
                    <li>
                        <strong>✅ Open-source:</strong> Built with the secure{" "}
                        <a className="text-blue-600 underline" href="https://github.com/panva/jose" target="_blank" rel="noopener noreferrer">
                            jose
                        </a>{" "}
                        library.
                    </li>
                    <li>
                        <strong>✅ Developer friendly:</strong> Great for learning, debugging, and testing JWT-based systems.
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Example JWT</h2>
                <pre className="bg-gray-100 p-4 text-sm rounded overflow-x-auto break-words whitespace-pre-wrap">
                    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.L7RBBoQ4Jx59NTeRduLG2MRTI4RbdEo9ps2QpJctdSc
                </pre>
            </section>
        </div>
    );
}
