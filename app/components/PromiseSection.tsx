'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, Zap } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Weekly location P&Ls',
    subtitle: 'Know how every location performed — every week.',
    description: 'Revenue → Food cost → Labor → Net profit, by location.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Day 2 month-end close. Always.',
    subtitle: 'Always closed by Day 2. No exceptions.',
    description: "Because decisions can't wait until the 20th of the month.",
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    icon: Clock,
    title: '5 minute average response time.',
    subtitle: "Finance questions shouldn't take days.",
    description: 'Your dedicated controller responds within 5 minutes.',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export function PromiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Aqqrue Promise
          </h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Clarity. Speed. Accountability.{' '}
            <span className="text-emerald-400 font-semibold">Every single day.</span>
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Guarantee Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-2xl px-8 py-6">
            <p className="text-lg text-white mb-2">
              <span className="font-bold text-emerald-400">If we miss the mark</span> - the month is free.
            </p>
            <p className="text-sm text-gray-400">No fine print.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, isInView }: { feature: typeof features[0]; index: number; isInView: boolean }) {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
      
      <div className="relative h-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all duration-300">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg`}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
          {feature.title}
        </h3>
        
        <p className="text-lg text-gray-300 mb-3 font-medium">
          {feature.subtitle}
        </p>
        
        <p className="text-gray-400 leading-relaxed">
          {feature.description}
        </p>

        {/* Decorative corner accent */}
        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full rounded-tr-2xl transition-opacity duration-500`} />
      </div>
    </motion.div>
  );
}

