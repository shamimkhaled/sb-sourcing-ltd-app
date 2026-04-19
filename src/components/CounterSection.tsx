import { Globe, Users, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const stats = [
  {
    value: 50,
    suffix: '+',
    label: 'World wide Business Automation',
    icon: <Globe size={40} />
  },
  {
    value: 20,
    suffix: 'K',
    label: 'World wide Business Partners',
    icon: <Users size={40} />
  },
  {
    value: 30,
    suffix: '%',
    label: 'World wide Business Profit',
    icon: <TrendingUp size={40} />
  }
];

function Counter({ value, duration = 2 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalSteps = 60;
      const increment = end / totalSteps;
      const stepDuration = (duration * 1000) / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function CounterSection() {
  return (
    <section className="bg-secondary text-white overflow-hidden relative">
      <div className="flex flex-col lg:flex-row">
        {stats.map((stat, index) => (
          <div 
             key={index}
             className={`flex-1 py-16 px-8 flex items-center gap-6 border-b lg:border-b-0 lg:border-r border-white/10 last:border-0 relative group overflow-hidden`}
          >
            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-0 opacity-20" />
            
            <div className="relative z-10 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
               {stat.icon}
            </div>
            
            <div className="relative z-10 flex flex-col">
               <div className="text-4xl lg:text-5xl font-black flex items-center gap-1 leading-none mb-2">
                 <Counter value={stat.value} />
                 <span>{stat.suffix}</span>
               </div>
               <div className="text-gray-400 font-bold uppercase tracking-widest text-xs group-hover:text-white transition-colors">
                 {stat.label}
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
