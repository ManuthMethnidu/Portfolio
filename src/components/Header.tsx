import MagneticButton from './MagneticButton';
import { Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50 text-white"
    >
      <div className="text-lg font-medium tracking-tight">
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
          <Menu className="w-8 h-8" />
        </MagneticButton>
      </div>
    </motion.header>
  );
}
