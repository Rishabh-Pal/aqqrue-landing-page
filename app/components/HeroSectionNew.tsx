'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { DashboardAnimation } from './DashboardAnimation';
import { AnimatedText, GradientText } from './AnimatedText';
import { useRef } from 'react';

export function HeroSectionNew() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated grid background with parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" 
      />
      
      {/* Gradient orbs with parallax */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Headline with word-by-word animation */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <AnimatedText 
                text="Grow Your Restaurants" 
                className="text-white block mb-2"
                type="word"
              />
              <GradientText gradient="from-emerald-400 via-green-400 to-emerald-500">
                <AnimatedText 
                  text="Without Losing Financial Control" 
                  delay={0.4}
                  type="word"
                />
              </GradientText>
            </h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed"
            >
              The finance team that runs at the speed of your operations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg text-gray-400 mb-10 leading-relaxed"
            >
              Weekly P&Ls by location. Daily cash flow visibility. Actionable insights on food and labor costs.
            </motion.p>

            {/* CTAs with enhanced animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg overflow-hidden shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book a consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-zinc-800/50 backdrop-blur-sm text-white font-semibold rounded-lg border border-zinc-700 hover:border-emerald-500 hover:bg-zinc-800/80 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  View sample weekly location P&L
                </span>
              </motion.button>
            </motion.div>

            {/* Microcopy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-sm text-gray-500 font-medium"
            >
              Scale Your Restaurants with Confidence.
            </motion.p>
          </div>

          {/* Right Column - Dashboard Animation with parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
            className="relative perspective-1000"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: -5 }}
              transition={{ duration: 0.3 }}
              className="transform-gpu"
            >
              <DashboardAnimation />
            </motion.div>
            
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur-2xl -z-10 opacity-50" />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

