export default function HowTo() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">🛠️ How to Use the JWT Tool</h1>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">🔓 Decode a JWT</h2>
            <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li>Paste your JWT token into the input area under the Decode section.</li>
                <li>
                    Click the <strong>Decode</strong> button to view the decoded Header and Payload.
                </li>
                <li>The results will appear instantly in a readable JSON format.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">🔐 Encode a JWT</h2>
            <ul className="list-disc pl-5 text-gray-700">
                <li>Enter your desired Header and Payload in valid JSON format.</li>
                <li>Provide a secure secret key to sign the token.</li>
                <li>
                    Click the <strong>Encode</strong> button to generate your JWT.
                </li>
                <li>Copy the resulting token and use it for your application testing.</li>
            </ul>
        </div>
    );
}
