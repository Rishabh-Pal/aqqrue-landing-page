'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Sparkles } from 'lucide-react';

const locations = ['Downtown Austin', 'South Congress', 'Domain Northside'];

const tableData = {
  'Downtown Austin': [
    { category: 'Revenue', amount: '$48,250', lastWeek: '$45,100', vsLastWeek: '+7.0%', vsLastMonth: '+12.3%', trend: 'up' },
    { category: 'Food Cost', amount: '$14,475', lastWeek: '$13,530', vsLastWeek: '+7.0%', vsLastMonth: '+8.5%', trend: 'up' },
    { category: 'Labor Cost', amount: '$16,905', lastWeek: '$16,164', vsLastWeek: '+4.6%', vsLastMonth: '+6.2%', trend: 'up' },
    { category: 'Operating Expenses', amount: '$8,205', lastWeek: '$8,118', vsLastWeek: '+1.1%', vsLastMonth: '+2.8%', trend: 'up' },
    { category: 'Net Profit', amount: '$8,665', lastWeek: '$7,288', vsLastWeek: '+18.9%', vsLastMonth: '+24.5%', trend: 'up' },
  ],
  'South Congress': [
    { category: 'Revenue', amount: '$52,800', lastWeek: '$51,200', vsLastWeek: '+3.1%', vsLastMonth: '+8.7%', trend: 'up' },
    { category: 'Food Cost', amount: '$15,840', lastWeek: '$15,360', vsLastWeek: '+3.1%', vsLastMonth: '+7.2%', trend: 'up' },
    { category: 'Labor Cost', amount: '$18,480', lastWeek: '$17,920', vsLastWeek: '+3.1%', vsLastMonth: '+5.8%', trend: 'up' },
    { category: 'Operating Expenses', amount: '$8,976', lastWeek: '$8,704', vsLastWeek: '+3.1%', vsLastMonth: '+4.2%', trend: 'up' },
    { category: 'Net Profit', amount: '$9,504', lastWeek: '$9,216', vsLastWeek: '+3.1%', vsLastMonth: '+11.3%', trend: 'up' },
  ],
  'Domain Northside': [
    { category: 'Revenue', amount: '$41,500', lastWeek: '$43,200', vsLastWeek: '-3.9%', vsLastMonth: '-2.1%', trend: 'down' },
    { category: 'Food Cost', amount: '$12,450', lastWeek: '$12,960', vsLastWeek: '-3.9%', vsLastMonth: '-1.8%', trend: 'down' },
    { category: 'Labor Cost', amount: '$14,525', lastWeek: '$15,120', vsLastWeek: '-3.9%', vsLastMonth: '-2.5%', trend: 'down' },
    { category: 'Operating Expenses', amount: '$7,055', lastWeek: '$7,344', vsLastWeek: '-3.9%', vsLastMonth: '-1.2%', trend: 'down' },
    { category: 'Net Profit', amount: '$7,470', lastWeek: '$7,776', vsLastWeek: '-3.9%', vsLastMonth: '-3.8%', trend: 'down' },
  ],
};

export function DashboardAnimation() {
  const [activeLocation, setActiveLocation] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const locationTimer = setInterval(() => {
      setActiveLocation((prev) => (prev + 1) % locations.length);
    }, 4000);

    const overlayTimer = setInterval(() => {
      setShowOverlay((prev) => !prev);
    }, 8000);

    return () => {
      clearInterval(locationTimer);
      clearInterval(overlayTimer);
    };
  }, []);

  const currentData = tableData[locations[activeLocation] as keyof typeof tableData];

  return (
    <div className="relative w-full">
      {/* Main Dashboard */}
      <motion.div
        className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Location Tabs */}
        <div className="flex gap-2 p-4 bg-zinc-900/80 border-b border-zinc-800">
          {locations.map((location, index) => (
            <motion.button
              key={location}
              onClick={() => setActiveLocation(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeLocation === index
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/50'
                  : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {location}
            </motion.button>
          ))}
        </div>

        {/* AI Insight */}
        <motion.div
          className="mx-4 mt-4 p-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-emerald-400">AI Insight:</span>{' '}
              Labor costs increased 4.6% due to overtime hours on Friday and Saturday.
            </p>
          </div>
        </motion.div>

        {/* Table */}
        <div className="p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLocation}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="overflow-x-auto"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 px-2 text-gray-400 font-medium">Category</th>
                    <th className="text-right py-3 px-2 text-gray-400 font-medium">Amount</th>
                    <th className="text-right py-3 px-2 text-gray-400 font-medium">Last Week</th>
                    <th className="text-right py-3 px-2 text-gray-400 font-medium">Δ vs Last Week</th>
                    <th className="text-right py-3 px-2 text-gray-400 font-medium">Δ vs Last Month</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((row, index) => (
                    <motion.tr
                      key={row.category}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors"
                    >
                      <td className="py-3 px-2 text-white font-medium">{row.category}</td>
                      <td className="py-3 px-2 text-right text-white font-semibold">{row.amount}</td>
                      <td className="py-3 px-2 text-right text-gray-400">{row.lastWeek}</td>
                      <td className="py-3 px-2 text-right">
                        <span className={`flex items-center justify-end gap-1 ${
                          row.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
                        }`}>
                          {row.trend === 'up' ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          {row.vsLastWeek}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <span className={`flex items-center justify-end gap-1 ${
                          row.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
                        }`}>
                          {row.trend === 'up' ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          {row.vsLastMonth}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* AI Query Overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-2xl"
          >
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 max-w-2xl w-full mx-4 shadow-2xl">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>AI Query</span>
                </div>
                <p className="text-white text-lg font-medium">
                  Compare performance across my locations this week
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <h4 className="text-emerald-400 font-semibold mb-3">Performance Summary</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400 mb-1">Best Performer</div>
                      <div className="text-white font-semibold">South Congress</div>
                      <div className="text-emerald-400 text-xs">+3.1% revenue</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1">Highest Profit</div>
                      <div className="text-white font-semibold">South Congress</div>
                      <div className="text-emerald-400 text-xs">$9,504</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1">Needs Attention</div>
                      <div className="text-white font-semibold">Domain Northside</div>
                      <div className="text-red-400 text-xs">-3.9% revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

