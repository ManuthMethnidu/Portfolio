import { motion } from 'motion/react';
import MagneticButton from './MagneticButton';

export default function Intro() {
  const text = "Helping friends and building things that might be cool or not.";
  const words = text.split(" ");
  
  return (
    <section id="about" className="py-24 md:py-48 px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="flex-1 text-2xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight">
           {words.map((word, i) => (
             <span key={i} className="mr-2 md:mr-3 overflow-hidden inline-flex align-bottom pb-1 md:pb-2">
               <motion.span
                 initial={{ y: "100%" }}
                 whileInView={{ y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6, delay: i * 0.02, ease: [0.33, 1, 0.68, 1] }}
                 className="inline-block"
               >
                 {word}
               </motion.span>
             </span>
           ))}
        </div>
        
        <div className="md:w-1/3 flex flex-col justify-between items-start">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-700 mb-12"
          >
            I am a student currently doing my A/Ls in Sri Lanka. The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
          </motion.p>
          
          <MagneticButton className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#1C1D20] text-white flex items-center justify-center text-lg font-medium hover:bg-gray-800 transition-colors">
            About me
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
