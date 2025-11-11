'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle, DollarSign, FileQuestion, TrendingDown, Clock } from 'lucide-react';
import { AnimatedText, GradientText } from './AnimatedText';

const problems = [
  {
    icon: TrendingDown,
    text: "You know one location is leaking cash - but can't see where",
  },
  {
    icon: Clock,
    text: 'Your books close on the 20th. Decisions need to happen on the 5th.',
  },
  {
    icon: DollarSign,
    text: "Toast, DoorDash & Uber Eats deposits don't match sales",
  },
  {
    icon: FileQuestion,
    text: 'You ask your bookkeeper a question. They respond 3 days later.',
  },
  {
    icon: AlertCircle,
    text: 'Food cost is climbing, but you have no idea which items are the problem.',
  },
];

export function ProblemSectionNew() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Background effects */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black" 
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Alert badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span className="text-red-400 font-semibold text-sm">Sound familiar?</span>
          </div>
        </motion.div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            <AnimatedText text="The Problem with" type="word" />
            <br />
            <GradientText gradient="from-red-400 via-orange-400 to-red-500">
              <AnimatedText text="Traditional Accounting" delay={0.4} type="word" />
            </GradientText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Multi-location restaurant operators face unique challenges that traditional bookkeepers simply can't solve.
          </motion.p>
        </div>

        {/* Problem Cards */}
        <div className="space-y-4">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ x: 12, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative p-6 bg-gradient-to-r from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm rounded-xl border border-zinc-800 hover:border-red-900/50 transition-all duration-300 overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Left accent bar */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-orange-500"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                />

                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 p-3 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg border border-red-500/30"
                  >
                    <problem.icon className="w-6 h-6 text-red-400" />
                  </motion.div>

                  {/* Text */}
                  <p className="text-lg text-gray-300 leading-relaxed pt-2 group-hover:text-white transition-colors duration-300">
                    {problem.text}
                  </p>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-white mb-2">
            There's a better way.
          </p>
          <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 font-semibold">
            Let us show you.
          </p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}

