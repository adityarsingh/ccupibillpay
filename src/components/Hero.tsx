export default function Hero() {
    return (
        <div className="relative pt-32 pb-20 px-4">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background -z-10"></div>

            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-white/10 text-blue-300 text-xs font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Simplifying Bill Payments
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                    Pay Credit Card Bills via <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                        UPI ID
                    </span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                    Find your bank&apos;s unique UPI handle format and pay your credit card bills instantly from any UPI app like GPay, PhonePe, or Paytm.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                    {/* Visual cues for apps */}
                    <div className="flex items-center -space-x-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos or just text badges */}
                    </div>
                </div>
            </div>
        </div>
    );
}
