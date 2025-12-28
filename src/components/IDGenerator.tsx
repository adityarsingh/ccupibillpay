"use client";

import { useState, useEffect } from "react";
import banksData from "../data/banks.json";

export default function IDGenerator() {
    const [cardNumber, setCardNumber] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [selectedBank, setSelectedBank] = useState("");
    const [generatedID, setGeneratedID] = useState("");
    const [error, setError] = useState("");

    // Get current bank details
    const currentBank = banksData.find(b => b.id === selectedBank);
    const inputType = currentBank?.inputType || "card_full";

    const handleGenerate = () => {
        setError("");
        setGeneratedID("");

        if (!selectedBank) return;

        if (inputType === "card_full") {
            if (!cardNumber) return;

            const cleanCard = cardNumber.replace(/\s/g, "");
            if (selectedBank === 'amex' && cleanCard.length !== 15) {
                setError("American Express cards must be 15 digits.");
                return;
            } else if (selectedBank !== 'amex' && cleanCard.length !== 16) {
                setError("Credit card number must be 16 digits.");
                return;
            }

            const prefix = currentBank?.prefix || "";
            const suffix = currentBank?.suffix || ""; // e.g. .cc for IDFC
            setGeneratedID(`${prefix}${cleanCard}${suffix}${currentBank?.handle}`);
        } else if (inputType === "mobile_last4") {
            if (!mobileNumber || !cardNumber) return;

            const cleanMobile = mobileNumber.replace(/\D/g, "");
            if (cleanMobile.length !== 10) {
                setError("Mobile number must be 10 digits.");
                return;
            }

            const cleanCard = cardNumber.replace(/\s/g, "");
            if (cleanCard.length !== 4) {
                setError("Please enter exactly the last 4 digits of your card.");
                return;
            }

            const prefix = currentBank?.prefix || "";
            setGeneratedID(`${prefix}${cleanMobile}${cleanCard}${currentBank?.handle}`);
        }
    };

    const handleCardInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value.replace(/\D/g, "");

        if (inputType === "card_full") {
            if (val.length > 16) val = val.slice(0, 16);
            // Add spaces
            val = val.replace(/(\d{4})(?=\d)/g, "$1 ");
        } else {
            // Just last 4 digits
            if (val.length > 4) val = val.slice(0, 4);
        }

        setCardNumber(val);
        setGeneratedID("");
        setError("");
    };

    const handleMobileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value.replace(/\D/g, "");
        if (val.length > 10) val = val.slice(0, 10);
        setMobileNumber(val);
        setGeneratedID("");
        setError("");
    };

    // Reset inputs when bank changes
    useEffect(() => {
        setCardNumber("");
        setMobileNumber("");
        setGeneratedID("");
        setError("");
    }, [selectedBank]);

    return (
        <div className="w-full max-w-md mx-auto p-6 md:p-8 rounded-2xl glass-panel relative overflow-hidden transition-all duration-300">
            {/* Decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] -z-10"></div>

            <h2 className="text-2xl font-bold mb-6 text-center">UPI Bill Pay ID Generator</h2>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1 text-muted-foreground">Select Bank</label>
                    <select
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none text-gray-200"
                    >
                        <option value="" disabled>Select your bank</option>
                        {banksData.map((bank) => (
                            <option key={bank.id} value={bank.id} className="bg-gray-900">
                                {bank.name}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedBank && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
                        {inputType === "mobile_last4" && (
                            <div>
                                <label className="block text-sm font-medium mb-1 text-muted-foreground">Registered Mobile Number</label>
                                <input
                                    type="text"
                                    value={mobileNumber}
                                    onChange={handleMobileInput}
                                    placeholder="98765 43210"
                                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 font-mono"
                                    maxLength={10}
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium mb-1 text-muted-foreground">
                                {inputType === "card_full" ? "Credit Card Number" : "Last 4 Digits of Credit Card"}
                            </label>
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={handleCardInput}
                                placeholder={inputType === "card_full" ? "0000 0000 0000 0000" : "1234"}
                                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 font-mono"
                                maxLength={inputType === "card_full" ? 19 : 4}
                            />
                        </div>
                    </div>
                )}

                <button
                    onClick={handleGenerate}
                    disabled={!selectedBank || (inputType === "card_full" ? !cardNumber : (!cardNumber || !mobileNumber))}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-900/20 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                    Generate UPI ID
                </button>

                {error && (
                    <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-center animate-in fade-in">
                        <p className="text-xs text-red-300">{error}</p>
                    </div>
                )}

                {generatedID && (
                    <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <p className="text-sm text-blue-300 mb-1">Your Bill Pay UPI ID</p>
                        <div className="flex items-center justify-center gap-2 group cursor-pointer" onClick={() => navigator.clipboard.writeText(generatedID)}>
                            <p className="text-xl md:text-2xl font-mono font-bold text-white tracking-wide break-all">
                                {generatedID}
                            </p>
                            <svg className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                        </div>
                        <p className="text-xs text-gray-500 mt-3">
                            *Please verify with your bank app before paying.
                        </p>
                    </div>
                )}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-center px-4">
                <p className="text-xs text-muted-foreground/60 leading-relaxed">
                    Disclaimer: This tool is for informational purposes only. Always verify the UPI ID format with your specific bank&apos;s official documentation before initiating payment. We are not affiliated with NPCI or any bank.
                </p>
            </div>
        </div>
    );
}
