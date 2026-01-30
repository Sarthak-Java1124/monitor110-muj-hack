'use client';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'User Registered', value: '74K+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Money Protected', value: '100K' },
];

export function FooterMetrics() {
  return (
    <div className="absolute bottom-12 left-6 md:left-12 flex flex-col md:flex-row gap-8 md:gap-16 z-40">
      {metrics.map((metric, index) => (
        <motion.div
           key={metric.label}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
           className="flex flex-col"
        >
          <span className="text-white font-bold text-2xl md:text-3xl tracking-tight">{metric.value}</span>
          <span className="text-monee-grey text-xs md:text-sm uppercase tracking-wider">{metric.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
