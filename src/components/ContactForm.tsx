import { User, Mail, Phone, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactForm() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2 relative">
             <img 
                src="https://picsum.photos/seed/contactimg/800/1000" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl" 
                alt="Support"
                referrerPolicy="no-referrer"
             />
             <div className="absolute top-10 right-10 w-40 h-40 bg-primary/90 backdrop-blur-sm rounded-full flex flex-col items-center justify-center text-white p-6 text-center shadow-2xl border-4 border-white">
                <span className="text-3xl font-black italic">24/7</span>
                <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">Support Available</span>
             </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-primary p-10 lg:p-16 rounded-xl shadow-2xl relative overflow-hidden">
               {/* Background Texture */}
               <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
               
               <div className="relative z-10 text-white mb-10">
                  <h6 className="font-bold uppercase tracking-widest text-xs mb-2 opacity-80">Get quick response</h6>
                  <h2 className="text-3xl lg:text-4xl font-black">Request for a Callback</h2>
               </div>

               <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors" size={18} />
                    <input 
                       type="text" 
                       placeholder="Your Name" 
                       className="w-full bg-white/10 border border-white/20 rounded-sm py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white focus:bg-white/20 transition-all font-medium"
                    />
                  </div>
                  
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors" size={18} />
                    <input 
                       type="email" 
                       placeholder="Your Email" 
                       className="w-full bg-white/10 border border-white/20 rounded-sm py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white focus:bg-white/20 transition-all font-medium"
                    />
                  </div>

                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors" size={18} />
                    <input 
                       type="text" 
                       placeholder="Your Phone" 
                       className="w-full bg-white/10 border border-white/20 rounded-sm py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white focus:bg-white/20 transition-all font-medium"
                    />
                  </div>

                  <div className="relative group">
                    <FileText className="absolute left-4 top-5 text-white/50 group-focus-within:text-white transition-colors" size={18} />
                    <textarea 
                       rows={4}
                       placeholder="Your Message" 
                       className="w-full bg-white/10 border border-white/20 rounded-sm py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white focus:bg-white/20 transition-all font-medium resize-none"
                    />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-secondary text-white py-5 rounded-sm font-black uppercase tracking-widest text-sm shadow-xl hover:bg-black transition-all"
                  >
                    Send Request
                  </motion.button>
               </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
