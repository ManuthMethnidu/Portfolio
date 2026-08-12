import MagneticButton from './MagneticButton';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50 text-white"
      >
        <div className="hidden md:block text-lg font-medium tracking-tight">
          © Code by AI
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <MagneticButton>
            <a href="#work" onClick={(e) => handleScroll(e, '#work')} className="hover:opacity-70 transition-opacity">Work</a>
          </MagneticButton>
          <MagneticButton>
            <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:opacity-70 transition-opacity">About</a>
          </MagneticButton>
          <MagneticButton>
            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:opacity-70 transition-opacity">Contact</a>
          </MagneticButton>
        </nav>
        <div className="md:hidden">
          <MagneticButton>
            <button onClick={() => setIsOpen(true)} aria-label="Open menu">
              <Menu className="w-8 h-8" />
            </button>
          </MagneticButton>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-[#1C1D20] text-white flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-end items-center mb-16">
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-8 text-4xl font-medium mt-16">
              <a href="#work" onClick={(e) => handleScroll(e, '#work')} className="hover:opacity-70 transition-opacity">Work</a>
              <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:opacity-70 transition-opacity">About</a>
              <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:opacity-70 transition-opacity">Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
