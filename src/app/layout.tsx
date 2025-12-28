import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UPI Bill Pay | Pay Credit Card Bills UPI",
  description: "Generate UPI IDs for credit card limits, check bank handles, and view ecosystem stats.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`min-h-screen bg-background text-foreground selection:bg-blue-500/30 font-sans`} suppressHydrationWarning>
        {/* Ambient background effects */}
        <div className="fixed inset-0 z-[-1] bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
        <div className="fixed inset-0 z-[-1] bg-background/90 backdrop-blur-3xl"></div>

        {children}
      </body>
    </html>
  );
}
