"use client";

import statsData from "../data/stats.json";

export default function Stats() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    UPI Ecosystem Growth
                </h2>
                <p className="text-muted-foreground mt-2">
                    Powering Digital India • Updated {statsData.lastUpdated}
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {statsData.metrics.map((metric, idx) => (
                    <div
                        key={idx}
                        className="group relative p-6 rounded-2xl glass-panel hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-2 z-10 relative">
                            {metric.label}
                        </p>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 z-10 relative">
                            {metric.value}
                        </h3>

                        <div className="flex items-center gap-2 z-10 relative">
                            <span className={`text-xs px-2 py-1 rounded-full ${metric.trend === 'up' ? 'bg-green-500/20 text-green-300' : 'bg-gray-500/20 text-gray-300'}`}>
                                {metric.trend === 'up' ? '▲' : '•'} {metric.trendValue}
                            </span>
                        </div>

                        <p className="text-[10px] text-gray-600 mt-4 text-right">
                            Source: {metric.source}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
