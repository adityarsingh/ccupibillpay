export default function Guide() {
    const steps = [
        {
            title: "Generate UPI ID",
            desc: "Enter your 16-digit credit card number and select your bank above to get your unique bill payment UPI ID.",
            icon: "1"
        },
        {
            title: "Open Any UPI App",
            desc: "Go to Google Pay, PhonePe, Paytm, or any BHIM UPI app and select 'Pay to UPI ID'.",
            icon: "2"
        },
        {
            title: "Enter & Verify",
            desc: "Paste the generated ID (e.g., 1234... @apl). The name usually appears as 'Bank Card Bill' or similar.",
            icon: "3"
        },
        {
            title: "Pay Bill",
            desc: "Enter the bill amount and complete the payment. It's settled instantly by NPCI BBPS.",
            icon: "4"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-transparent to-black/20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
                    <p className="text-gray-400">Simple steps to clear your dues instantly</p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative group">
                            <div className="absolute top-0 left-6 bottom-0 w-px bg-white/5 md:hidden"></div>

                            <div className="relative z-10 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors h-full">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
