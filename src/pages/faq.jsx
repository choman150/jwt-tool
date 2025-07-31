export default function FAQ() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">❓ Frequently Asked Questions</h1>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Is this tool secure?</h2>
                <p className="text-gray-700 leading-relaxed">Yes. Everything you enter stays in your browser and is never uploaded or logged.</p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">What algorithms are supported?</h2>
                <p className="text-gray-700 leading-relaxed">
                    This tool supports HS256 (HMAC with SHA-256), the most commonly used algorithm for JWTs. It uses the jose library for cryptographic operations.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Can I verify a JWT signature?</h2>
                <p className="text-gray-700 leading-relaxed">At the moment, this tool supports encoding and decoding. Signature verification and we plan to add more features soon.</p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">Does it work offline?</h2>
                <p className="text-gray-700 leading-relaxed">Yes! Once the page is loaded, you can use the tool even without an internet connection.</p>
            </div>
        </div>
    );
}
