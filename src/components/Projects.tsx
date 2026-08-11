import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useCursorStore } from '../store';

export const projects = [
  {
    title: "Nexa E-Sports",
    type: "Design & Development",
    year: "2026",
    link: "https://n3xa.netlify.app/",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "DFD Master",
    type: "Development",
    year: "2026",
    link: "https://dfd.methnidu.dpdns.org",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Maths Carnival",
    type: "Design & Development",
    year: "2026",
    link: "https://maths.methnidu.dpdns.org",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Projects() {
  const { setCursorState } = useCursorStore();

  return (
    <section id="work" className="py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto relative">
        <h5 className="text-gray-500 uppercase tracking-widest text-sm mb-12 font-medium">Recent work</h5>
        
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group border-t border-gray-300 py-12 flex flex-col md:flex-row justify-between items-start md:items-center relative"
              onMouseEnter={() => setCursorState({ active: true, type: 'project', projectIndex: index })}
              onMouseLeave={() => setCursorState({ active: false, type: 'default', projectIndex: null })}
            >
              
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 md:mb-0 group-hover:pl-4 transition-all duration-500 group-hover:text-gray-400">
                {project.title}
              </h2>
              
              <div className="flex items-center gap-8 text-lg text-gray-600 group-hover:text-gray-400 transition-colors duration-500">
                <p>{project.type}</p>
                <div className="hidden md:flex items-center gap-4">
                  <p>{project.year}</p>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
          <div className="border-t border-gray-300"></div>
        </div>
        
        <div className="mt-24 flex justify-center">
          <motion.a
            href="https://github.com/ManuthMethnidu"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border border-gray-300 text-lg font-medium hover:bg-[#1C1D20] hover:text-white transition-colors flex items-center gap-2"
          >
            More work
          </motion.a>
        </div>
      </div>
    </section>
  );
}
