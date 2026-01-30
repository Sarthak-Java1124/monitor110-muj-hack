'use client';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { FooterMetrics } from '@/components/FooterMetrics';
import { NeonButton } from '@/components/ui/NeonButton';

export default function About() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-monee-black selection:bg-monee-green selection:text-black">
      <Navbar />
      
      {/* Background Grids */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute bottom-0 w-full h-[40vh] perspective-grid opacity-30" />
         <div className="absolute top-0 w-full h-[40vh] perspective-grid rotate-180 opacity-30" />
      </div>

      <div className="relative z-10 pt-32 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              We are <span className="text-monee-green-neon text-shadow-glow">Monee</span>.
            </h1>
            <p className="text-xl md:text-2xl text-monee-grey max-w-2xl leading-relaxed border-l-2 border-monee-green pl-6">
              Building the financial infrastructure for a transparent, digital-first future.
            </p>
          </motion.div>
        </section>

        {/* Mission Grid */}
        <section className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glass-card p-10 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We believe financial systems should be invisible, instantaneous, and accessible. 
              By combining cutting-edge blockchain technology with intuitive design, we're removing barriers to global wealth.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3, duration: 0.8 }}
             className="relative h-full min-h-[300px] flex items-center justify-center rounded-2xl overflow-hidden border border-white/10"
          >
             {/* Abstract Visual */}
             <div className="absolute inset-0 bg-gradient-to-br from-monee-green/20 to-transparent" />
             <div className="text-9xl font-bold text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                TRUST
             </div>
             <NeonButton>
                Join the Revolution
             </NeonButton>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="mb-32">
            <h2 className="text-sm font-mono text-monee-green uppercase tracking-widest mb-12">Global Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { label: "Transactions", value: "2.4B+" },
                    { label: "Countries", value: "142" },
                    { label: "Reliability", value: "99.9%" },
                    { label: "Team", value: "250+" }
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                        <div className="text-gray-500 text-sm uppercase">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </section>
      </div>
      
      <FooterMetrics />
    </main>
  );
}
