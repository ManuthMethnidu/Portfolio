import MagneticButton from './MagneticButton';
import { ArrowDownRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <footer ref={container} id="contact" className="bg-[#1C1D20] text-white pt-16 px-8 md:px-16 pb-8 rounded-t-[40px] mt-[-40px] relative z-20 overflow-hidden">
      <motion.div style={{ y }} className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 border-b border-gray-700 pb-12">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gray-800 overflow-hidden shrink-0">
                <img 
                  src="https://media1.tenor.com/m/1l_H2a0qNPEAAAAd/cat-dance.gif" 
                  alt="Avatar" 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    e.currentTarget.src = "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif";
                  }}
                />
              </div>
              <h2 className="text-[10vw] md:text-[6vw] leading-none font-medium tracking-tighter">
                Let's work
              </h2>
            </div>
            <h2 className="text-[10vw] md:text-[6vw] leading-none font-medium tracking-tighter ml-0 md:ml-20">
              together
            </h2>
            <ArrowDownRight className="w-12 h-12 mt-8 text-gray-400" />
          </div>
          
          <div className="mt-16 md:mt-24 flex flex-col items-center">
            <MagneticButton className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg md:text-xl font-medium hover:bg-blue-700 transition-colors cursor-pointer">
              <a href="mailto:methnidumanuth@gmail.com" className="w-full h-full flex items-center justify-center">Get in touch</a>
            </MagneticButton>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <MagneticButton>
            <a href="mailto:methnidumanuth@gmail.com" className="px-8 py-4 rounded-full border border-gray-600 hover:bg-white hover:text-[#1C1D20] transition-colors text-lg inline-block">
              methnidumanuth@gmail.com
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="https://wa.me/94714212210" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full border border-gray-600 hover:bg-white hover:text-[#1C1D20] transition-colors text-lg inline-block">
              +94 71 421 2210
            </a>
          </MagneticButton>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-end pt-8">
          <div className="flex flex-col gap-4 mb-12 md:mb-0">
            <div>
              <p className="text-gray-400 uppercase tracking-widest text-xs mb-2">Version</p>
              <p>2026 © Edition</p>
            </div>
          </div>
          
          <div>
            <p className="text-gray-400 uppercase tracking-widest text-xs mb-2 text-left md:text-right">Socials</p>
            <ul className="flex flex-wrap gap-6">
              <li>
                <a href="https://github.com/ManuthMethnidu" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">GitHub</a>
              </li>
              <li>
                <a href="https://www.youtube.com/@EnterAltBreak" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">YouTube</a>
              </li>
              <li>
                <a href="https://instagram.com/enter_alt_break/" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">Instagram</a>
              </li>
              <li>
                <a href="https://guns.lol/EnterAltBreak" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">Guns.lol</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/manuthmethnidu" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
