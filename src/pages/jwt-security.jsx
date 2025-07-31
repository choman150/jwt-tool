export default function JWTSecurityTips() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">🔐 JWT Security Best Practices</h1>

            <p className="text-gray-700 leading-relaxed mb-6">
                While JSON Web Tokens (JWTs) are a powerful and flexible way to manage authentication, they must be used securely. Here are important best practices to follow when working with JWTs in
                real-world applications.
            </p>

            <div className="space-y-6 text-gray-700">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">✅ Use Short Expiration Times</h2>
                    <p>Keep JWT lifetimes short to limit the window of opportunity if a token is ever compromised.</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">✅ Do Not Store Sensitive Data</h2>
                    <p>JWTs are only base64-encoded, not encrypted. Never include passwords, personal data, or API keys in the payload.</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">✅ Use HTTPS</h2>
                    <p>Always serve and transmit JWTs over HTTPS to prevent man-in-the-middle attacks.</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">✅ Validate Signatures</h2>
                    <p>Always verify a JWT's signature before trusting its contents. Never assume the token is valid without proper validation.</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">✅ Rotate Secrets Regularly</h2>
                    <p>Periodically update and rotate signing keys to reduce long-term risk if keys are ever exposed.</p>
                </div>
            </div>
        </div>
    );
}
