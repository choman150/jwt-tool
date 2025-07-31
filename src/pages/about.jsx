export default function About() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">📘 About This JWT Tool</h1>
            <p className="text-gray-700 leading-relaxed mb-4">
                This JWT Encoder / Decoder is a free and browser-based tool for creating and analyzing JSON Web Tokens (JWT). This tool is built using modern web technologies and the open-source{" "}
                <a className="text-blue-600 underline" href="https://github.com/panva/jose" target="_blank" rel="noopener noreferrer">
                    jose
                </a>{" "}
                library, it offers a safe way to encode or decode tokens without sending any data over the network.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
                Whether you're a developer learning how JWTs work, or debugging authentication systems in production, this tool gives you a fast and reliable way to inspect token contents in real
                time.
            </p>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-sm text-blue-900">
                ✅ <strong>Client-side only</strong>: All operations are done locally in your browser.
                <br />✅ <strong>Secure</strong>: No data is stored or transmitted.
                <br />✅ <strong>Open Source</strong>: You can review and contribute to the code.
            </div>
        </div>
    );
}
