export default function Contact() {
    return (
        <div className="max-w-2xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">📬 Contact</h1>
            <p className="text-gray-700 leading-relaxed mb-4">If you have questions, suggestions, or feedback about this tool, feel free to contact us using the email address below.</p>
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-sm text-gray-800">
                📧 <strong>Email:</strong>{" "}
                <a href="mailto:choman150@gmail.com" className="text-blue-600 underline">
                    choman150@gmail.com
                </a>
            </div>
        </div>
    );
}
