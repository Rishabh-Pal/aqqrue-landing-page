'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle, TrendingDown, FileQuestion, MessageSquare, DollarSign, Calendar } from 'lucide-react';

const problems = [
  {
    icon: Calendar,
    text: 'Food and labor costs move every week, but reporting shows up once a month',
  },
  {
    icon: DollarSign,
    text: "Toast, DoorDash & Uber Eats deposits don't match sales",
  },
  {
    icon: FileQuestion,
    text: 'Your CPA focuses on taxes, not day-to-day finance ops',
  },
  {
    icon: MessageSquare,
    text: 'Managers text receipts, invoices, and POS screenshots from 4 different apps',
  },
  {
    icon: TrendingDown,
    text: "You know one location is leaking cash - but can't see where",
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-semibold text-sm">The Problem</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Running a restaurant is hard. Running multiple locations{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
              without real-time financial visibility is chaos.
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            If this is you, we should talk:
          </p>
        </motion.div>

        {/* Problems List */}
        <div className="space-y-4 mb-12">
          {problems.map((problem, index) => (
            <ProblemItem
              key={index}
              problem={problem}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl px-8 py-6">
            <p className="text-xl md:text-2xl text-white font-semibold mb-2">
              Restaurants operate{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                daily
              </span>
              , not monthly.
            </p>
            <p className="text-lg text-gray-400">
              Your accounting should too.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemItem({ problem, index, isInView }: { problem: typeof problems[0]; index: number; isInView: boolean }) {
  const Icon = problem.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ x: 8, transition: { duration: 0.2 } }}
      className="group"
    >
      <div className="flex items-start gap-4 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-red-500/30 hover:bg-zinc-900/50 transition-all duration-300">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center group-hover:border-red-500/50 transition-colors duration-300"
        >
          <Icon className="w-6 h-6 text-red-400" />
        </motion.div>

        {/* Text */}
        <div className="flex-1 pt-2">
          <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
            {problem.text}
          </p>
        </div>

        {/* Decorative dot */}
        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500/50 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}

