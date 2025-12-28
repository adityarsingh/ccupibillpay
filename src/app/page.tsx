import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import IDGenerator from "@/components/IDGenerator";
import BankTable from "@/components/BankTable";
import Guide from "@/components/Guide";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">

      {/* Decorative top blur */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <Hero />

      <section className="w-full relative z-10 -mt-10 px-4 mb-24">
        <IDGenerator />
      </section>

      <Stats />

      <BankTable />

      <Guide />

      <FAQ />

      <footer className="w-full border-t border-white/5 bg-black/20 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Disclaimer: This tool is for informational purposes only. Always verify the UPI ID format with your specific bank&apos;s official documentation before initiating payment.
            <br />We are not affiliated with NPCI or any bank.
          </p>
          <p className="text-xs text-gray-600">
            © 2025 UPI Bill Pay. Built for Digital India.
          </p>
        </div>
      </footer>
    </main>
  );
}
