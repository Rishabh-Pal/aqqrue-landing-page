'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, Zap } from 'lucide-react';
import { AnimatedText, GradientText } from './AnimatedText';

const features = [
  {
    icon: Calendar,
    title: 'Weekly location P&Ls',
    subtitle: 'Know how every location performed — every week.',
    description: 'Revenue → Food cost → Labor → Net profit, by location.',
    gradient: 'from-blue-500 to-cyan-500',
    iconGradient: 'from-blue-400 to-cyan-400',
  },
  {
    icon: Zap,
    title: 'Day 2 month-end close. Always.',
    subtitle: 'Always closed by Day 2. No exceptions.',
    description: "Because decisions can't wait until the 20th of the month.",
    gradient: 'from-emerald-500 to-green-500',
    iconGradient: 'from-emerald-400 to-green-400',
  },
  {
    icon: Clock,
    title: '5 minute average response time.',
    subtitle: "Finance questions shouldn't take days.",
    description: 'Your dedicated controller responds within 5 minutes.',
    gradient: 'from-purple-500 to-pink-500',
    iconGradient: 'from-purple-400 to-pink-400',
  },
];

export function PromiseSectionNew() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Background effects with parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black" 
      />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header with animated text */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            <AnimatedText text="The Aqqrue Promise" type="word" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400"
          >
            Clarity. Speed. Accountability.{' '}
            <GradientText gradient="from-emerald-400 to-green-400">
              Every single day.
            </GradientText>
          </motion.p>
        </div>

        {/* Feature Cards with enhanced animations */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-500 overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />

                {/* Icon with gradient background */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.iconGradient} mb-6 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 mb-4 font-medium">
                  {feature.subtitle}
                </p>
                
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated border */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.15 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money-back guarantee badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-full"
          >
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-400 font-semibold text-lg">
              100% Money-Back Guarantee
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}

