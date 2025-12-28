export default function FAQ() {
    const faqs = [
        {
            q: "Is it safe to share my credit card number?",
            a: "This tool runs entirely in your browser. We do not store, save, or transmit your card number anywhere. The UPI ID generation happens locally."
        },
        {
            q: "What is the transaction limit?",
            a: "As of 2025, the limit for credit card bill payments via UPI is generally ₹5 Lakh per transaction, but this depends on your bank and UPI app limits."
        },
        {
            q: "Which banks are supported?",
            a: "Most major Indian banks including HDFC, SBI, Axis, ICICI, Kotak, and Yes Bank support direct UPI ID payments. See the table above for a full list."
        },
        {
            q: "How long does settlement take?",
            a: "Payments made via valid UPI bill pay handles are typically settled instantly or within T+1 working days depending on the BBPS network."
        }
    ];

    return (
        <section className="py-24 px-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                            <h3 className="text-lg font-medium text-white mb-2">{item.q}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
