import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCursorStore } from '../store';
import { projects } from './Projects';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { type, active, projectIndex } = useCursorStore();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Project Image Reveal */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[90] hidden md:block overflow-hidden w-[350px] h-[300px] rounded-2xl shadow-2xl"
        animate={{
          x: mousePosition.x - 175,
          y: mousePosition.y - 150,
          scale: (active && type === 'project') ? 1 : 0,
          opacity: (active && type === 'project') ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      >
        <div 
          className="w-full h-full flex flex-col transition-transform duration-500" 
          style={{ transform: `translateY(-${(projectIndex || 0) * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 bg-[#1C1D20] p-6 flex items-center justify-center">
              <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main Cursor */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[100] hidden md:flex items-center justify-center rounded-full overflow-hidden
          ${active ? 'w-20 h-20 bg-[#455CE9] text-white mix-blend-normal' : 'w-4 h-4 bg-white mix-blend-difference'}`}
        animate={{
          x: mousePosition.x - (active ? 40 : 8),
          y: mousePosition.y - (active ? 40 : 8),
          scale: (isHovering && !active) ? 2.5 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      >
        <AnimatePresence>
          {active && type === 'project' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-sm font-medium"
            >
              View
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
