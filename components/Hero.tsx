'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { NeonButton } from './ui/NeonButton';
import { Apple } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Hero() {
  const router = useRouter();
  const handleDemoClick = ()=>{
    router.push('/dashboard');
  }
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-12 z-40 pt-20">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-fit mb-6 px-4 py-2 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm flex items-center gap-2"
        >
          <Apple className="w-4 h-4 text-white" />
          <span className="text-monee-green-neon text-xs font-semibold tracking-wide">25M+ App Store Download</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 font-sans"
        >
          Powering Your <br />
          <span className="text-monee-green-neon text-shadow-glow">Digital</span> Transactions.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-monee-grey text-lg md:text-xl max-w-md mb-8 leading-relaxed"
        >
          From daily payments to business transfers, manage all your finances with confidence and clarity in one place.
        </motion.p>

        {/* CTA */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5 }}
        >
          <NeonButton className="mb-20" onClick={handleDemoClick}>
            Explore-&gt;
          </NeonButton>
        </motion.div>
      </div>

      {/* Right Content - 3D Assets */}
      <div className="absolute right-0 md:right-40 top-0 w-full md:w-[50%] h-full z-10 pointer-events-none md:pointer-events-auto border-l border-white/5">
        {/* Glow effect behind the sphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-monee-green/20 blur-[120px] rounded-full" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          {/* Using the generated 3D asset image. 
              NOTE: User needs to ensure main_hero_3d_assets.png is in public/ folder.
          */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain object-right bg-transparent mr-8"
          >
            <source src="/landing-final.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      {/* Background Grid Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute bottom-0 w-full h-[30vh] perspective-grid" />
         <div className="absolute top-0 w-full h-[30vh] perspective-grid rotate-180" />
      </div>
      
    </section>
  );
}
