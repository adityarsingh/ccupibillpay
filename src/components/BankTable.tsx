"use client";

import { useState } from "react";
import banksData from "../data/banks.json";

export default function BankTable() {
    const [search, setSearch] = useState("");

    const filteredBanks = banksData.filter((bank) =>
        bank.name.toLowerCase().includes(search.toLowerCase()) ||
        bank.handle.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white">Supported Banks</h2>
                    <p className="text-gray-400 text-sm mt-1">
                        Find the bill pay handle for your credit card issuer
                    </p>
                </div>
                <div className="relative w-full md:w-64">
                    {/* Search Icon */}
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <input
                        type="text"
                        placeholder="Search bank or handle..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm text-gray-200 placeholder:text-gray-600"
                    />
                </div>
            </div>

            <div className="rounded-xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-gray-400 uppercase tracking-wider font-medium text-xs">
                            <tr>
                                <th className="px-6 py-4">Bank Name</th>
                                <th className="px-6 py-4">UPI Handle</th>
                                <th className="px-6 py-4 hidden md:table-cell">Example Format</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            {filteredBanks.length > 0 ? (
                                filteredBanks.map((bank) => (
                                    <tr key={bank.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-200">
                                            {bank.name}
                                        </td>
                                        <td className="px-6 py-4 text-blue-300 font-mono">
                                            {bank.handle}
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 hidden md:table-cell font-mono text-xs">
                                            {bank.example}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                                        No banks found matching &quot;{search}&quot;
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
