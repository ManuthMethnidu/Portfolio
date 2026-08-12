/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Lazy load heavy components to reduce initial JS execution and unused JS
const Hero = lazy(() => import('./components/Hero'));
const Intro = lazy(() => import('./components/Intro'));
const Projects = lazy(() => import('./components/Projects'));
const Footer = lazy(() => import('./components/Footer'));
const Header = lazy(() => import('./components/Header'));
const CustomCursor = lazy(() => import('./components/CustomCursor'));
const BackToTop = lazy(() => import('./components/BackToTop'));

const anim = {
  initial: {
    y: 0
  },
  exit: {
    y: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
  }
}

const Loader = () => {
  const [index, setIndex] = useState(0);
  const words = [
    "Hello", "Bonjour", "स्वागत हे", "Ciao", "Olá", "おい", "Hallå", "Guten tag", "Hallo", "Ayubowan"
  ];

  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 250);
    return () => clearTimeout(timeout);
  }, [index, words.length]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#141516] text-white overflow-visible"
      variants={anim}
      initial="initial"
      exit="exit"
    >
      <motion.div 
        className="text-4xl md:text-5xl font-medium flex items-center relative z-10 h-16"
      >
        <span className="w-3 h-3 rounded-full bg-white mr-4"></span>
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
        <span className="w-3 h-3 rounded-full bg-white ml-4"></span>
      </motion.div>
      
      <svg className="absolute top-full left-0 w-full h-[300px]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path 
          initial={{ d: "M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z" }}
          exit={{ 
            d: [
              "M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z",
              "M 0 0 L 100 0 L 100 0 Q 50 100 0 0 Z",
              "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z"
            ],
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
          }}
          fill="#141516" 
        />
      </svg>
    </motion.div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let lenis: any;
    let rafId: number;

    import('lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    });

    // Preload components to avoid lag when loading completes
    setTimeout(() => {
      import('./components/Hero');
      import('./components/Intro');
      import('./components/Projects');
      import('./components/Footer');
      import('./components/Header');
      import('./components/CustomCursor');
      import('./components/BackToTop');
    }, 500);

    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 3500);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#1C1D20] text-white min-h-screen selection:bg-[#1C1D20] selection:text-white font-sans overflow-x-hidden">
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>
      
      {!loading && (
        <motion.main 
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          className="w-full flex flex-col bg-[#1C1D20]"
        >
          <Suspense fallback={null}>
            <Header />
            <Hero />
            <div className="bg-white text-[#1C1D20] w-full overflow-hidden">
               <Intro />
               <Projects />
            </div>
            <Footer />
          </Suspense>
        </motion.main>
      )}
    </div>
  )
}

