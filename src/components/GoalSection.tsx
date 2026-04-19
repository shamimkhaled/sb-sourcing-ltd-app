import { Target, ShieldCheck, Smile } from 'lucide-react';
import { motion } from 'motion/react';

const goals = [
  {
    title: 'Develop Strong Supplier Relationships',
    icon: <ShieldCheck size={40} />,
    image: 'https://picsum.photos/seed/goal1/600/400',
    delay: 0
  },
  {
    title: 'Ensure Product Quality',
    icon: <Target size={40} />,
    image: 'https://picsum.photos/seed/goal2/600/400',
    delay: 0.1
  },
  {
    title: 'Enhance Customer Satisfaction',
    icon: <Smile size={40} />,
    image: 'https://picsum.photos/seed/goal3/600/400',
    delay: 0.2
  }
];

export default function GoalSection() {
  return (
    <section className="py-20 bg-[#f5f2ed]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Our Goal</span>
          <h2 className="text-3xl lg:text-4xl font-black mt-4 mb-6 text-secondary italic">
            "Quality, Precision, Commitment – Delivering Excellence Every Time."
          </h2>
          <p className="text-gray-600">
            As a manufacturer, our goal is to deliver exceptional quality, timely production, 
            and innovative solutions, ensuring complete satisfaction for our global clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: goal.delay }}
              className="group relative h-[400px] overflow-hidden rounded-2xl shadow-lg"
            >
              <img 
                src={goal.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={goal.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-xl shadow-primary/30">
                  {goal.icon}
                </div>
                <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                  {goal.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
