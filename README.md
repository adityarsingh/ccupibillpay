# UPI Bill Pay Tool 💳

A premium, privacy-focused web application to help users generate UPI IDs for credit card bill payments.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🚀 Features

- **Secure ID Generation**: Instantly generate UPI IDs for major Indian banks (HDFC, SBI, ICICI, Amex, Axis, etc.).
- **Privacy First**: All processing happens client-side. No card data is stored or transmitted.
- **Visual Analytics**: Interactive dashboard showing UPI ecosystem growth stats.
- **Bank Directory**: Searchable database of supported banks and their bill pay handles.
- **Responsive Design**: Built with a "dark mode first" premium aesthetic using Tailwind CSS v4.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: TypeScript
- **Deployment**: Static Export (Ready for GitHub Pages / Vercel)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/upi-bill-pay.git
   cd upi-bill-pay
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment

### GitHub Pages
This project is configured for static export (`output: 'export'` in `next.config.ts`).

1. Go to **Settings > Pages** in your GitHub repository.
2. Select **GitHub Actions** as the source.
3. Push your code, and the included workflow (if setup) or manual build will deploy to the `gh-pages` branch.

### Vercel / Netlify
Connect your repository to Vercel or Netlify. The settings are auto-detected.

## 🛡️ Disclaimer

This tool is for **informational purposes only**. 
- Always verify the generated UPI ID with your bank's official app or documentation.
- We are not affiliated with NPCI or any specific bank.
- Transfers are at your own risk.

## 📄 License

MIT License - feel free to use this code for personal or commercial projects.
