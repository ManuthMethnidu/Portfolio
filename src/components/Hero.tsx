import { motion, useScroll, useTransform, useSpring, useVelocity, useAnimationFrame, useMotionValue } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { useRef } from 'react';

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "20vh"]);
  
  const baseX = useMotionValue(0);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false
  });

  const directionFactor = useRef<number>(-1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * 2 * (delta / 1000);
    
    if (velocityFactor.get() < 0) {
      directionFactor.current = 1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = -1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const marqueeX = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  return (
    <motion.section 
      ref={container}
      className="relative min-h-screen w-full overflow-hidden bg-[#1C1D20] text-white flex flex-col justify-end"
    >
      <motion.div style={{ y }} className="w-full h-full absolute inset-0 pointer-events-none z-0">
        <img 
          src="/pic.png" 
          alt="Manuth Methnidu" 
          className="w-full h-full object-cover object-bottom opacity-80 scale-110 translate-y-8 md:translate-y-16" 
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1000&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#1C1D20] to-transparent"></div>
      </motion.div>

      {/* Foreground Content container */}
      <div className="relative z-10 w-full flex flex-col justify-end min-h-screen pb-4 md:pb-8 pointer-events-none">
        
        {/* Hanger SVG Container on the left */}
        <div className="hidden md:block absolute left-0 top-[40%] -translate-y-1/2 w-[240px] h-[96.8px] md:w-[300px] md:h-[121px] z-20 pointer-events-auto">
           <svg className="absolute inset-0 w-full h-full text-[#1C1D20] fill-current" viewBox="0 0 300 121" xmlns="http://www.w3.org/2000/svg">
              <path d="M239.633657,0 C272.770742,1.0182436e-15 299.633657,26.862915 299.633657,60 C299.633657,93.137085 272.770742,120 239.633657,120 L0,120 L0,0 L239.633657,0 Z M239.633657,18.7755102 C216.866,18.7755102 198.409167,37.232343 198.409167,60 C198.409167,82.767657 216.866,101.22449 239.633657,101.22449 C262.401314,101.22449 280.858147,82.767657 280.858147,60 C280.858147,37.232343 262.401314,18.7755102 239.633657,18.7755102 Z" />
           </svg>
           <p className="absolute left-[30px] md:left-[40px] top-1/2 -translate-y-1/2 text-xs md:text-base font-light text-white leading-tight">
              <span className="block">Located</span>
              <span className="block">in</span>
              <span className="block">Sri Lanka</span>
           </p>
           <div className="digital-ball">
              <div className="overlay"></div>
              <div className="globe">
                 <div className="globe-wrap">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle-hor"></div>
                    <div className="circle-hor-middle"></div>
                 </div>
              </div>
           </div>
        </div>

        {/* Text Container */}
        <div className="w-full px-8 md:px-16 flex flex-col md:flex-row justify-end items-end mb-8 md:mb-16">
          <div className="flex flex-col">
            <ArrowDownRight className="w-12 h-12 mb-4" />
            <h2 className="text-2xl md:text-4xl font-medium tracking-tight">
              Student, Builder<br/>Freelance Designer & Developer
            </h2>
          </div>
        </div>
        
        {/* Marquee */}
        <div className="w-full overflow-hidden flex whitespace-nowrap">
          <motion.div style={{ x: marqueeX }} className="flex w-max items-center">
            {[...Array(4)].map((_, i) => (
              <h1 
                key={i}
                className="text-[15vw] md:text-[12vw] leading-none font-medium tracking-tighter pr-8 m-0 flex items-center select-none"
              >
                Manuth Methnidu <span className="text-gray-500 mx-4 md:mx-8">—</span>
              </h1>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
