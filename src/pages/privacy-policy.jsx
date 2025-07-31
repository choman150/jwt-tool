export default function PrivacyPolicy() {
    return (
        <div className="max-w-2xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">🔒 Privacy Policy</h1>
            <p className="text-gray-700 leading-relaxed mb-4">We value your privacy. This tool does not collect, store, or transmit any data you input or generate.</p>
            <p className="text-gray-700 leading-relaxed mb-4">
                All encoding and decoding of JWTs happens directly in your browser using JavaScript and the jose library. No data is sent to any server, and no information is logged or tracked.
            </p>
            <p className="text-gray-700 leading-relaxed">
                By using this tool, you agree that you are responsible for the JWTs and secrets you use. Avoid using real secrets or personally identifiable information (PII)..
            </p>
        </div>
    );
}
