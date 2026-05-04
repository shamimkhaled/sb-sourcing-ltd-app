import { useState } from 'react';
import { User, Mail, Phone, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import callbackImage from '../assets/img/request-callback.png';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://formsubmit.co/ajax/shopon@sbsourcing-bd.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'New Callback Request - S.B Sourcing',
          _template: 'table',
          _captcha: 'false',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      if (!response.ok) {
        throw new Error('Request failed');
      }
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-stretch">
          <div className="relative flex w-full lg:w-1/2 lg:self-stretch">
             <img
                src={callbackImage}
                className="aspect-[16/10] w-full rounded-2xl object-cover object-center shadow-2xl ring-1 ring-black/10 lg:min-h-[min(520px,100%)] lg:flex-1 lg:aspect-auto"
                alt="Your connection to support — request a scheduled callback"
             />
             <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-primary/90 backdrop-blur-sm rounded-full flex flex-col items-center justify-center text-white p-3 sm:p-4 lg:p-6 text-center shadow-2xl border-4 border-white">
                <span className="text-lg sm:text-2xl lg:text-3xl font-black italic">24/7</span>
                <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold uppercase tracking-widest leading-tight">Support Available</span>
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

               <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors" size={18} />
                    <input 
                       type="text" 
                       value={formData.name}
                       onChange={(e) => handleChange('name', e.target.value)}
                       placeholder="Your Name" 
                       required
                       className="w-full bg-white/10 border border-white/20 rounded-sm py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white focus:bg-white/20 transition-all font-medium"
                    />
                  </div>
                  
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors" size={18} />
                    <input 
                       type="email" 
                       value={formData.email}
                       onChange={(e) => handleChange('email', e.target.value)}
                       placeholder="Your Email" 
                       required
                       className="w-full bg-white/10 border border-white/20 rounded-sm py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white focus:bg-white/20 transition-all font-medium"
                    />
                  </div>

                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors" size={18} />
                    <input 
                       type="text" 
                       value={formData.phone}
                       onChange={(e) => handleChange('phone', e.target.value)}
                       placeholder="Your Phone" 
                       required
                       className="w-full bg-white/10 border border-white/20 rounded-sm py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white focus:bg-white/20 transition-all font-medium"
                    />
                  </div>

                  <div className="relative group">
                    <FileText className="absolute left-4 top-5 text-white/50 group-focus-within:text-white transition-colors" size={18} />
                    <textarea 
                       rows={4}
                       value={formData.message}
                       onChange={(e) => handleChange('message', e.target.value)}
                       placeholder="Your Message" 
                       required
                       className="w-full bg-white/10 border border-white/20 rounded-sm py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white focus:bg-white/20 transition-all font-medium resize-none"
                    />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === 'sending'}
                    className="w-full bg-secondary text-white py-5 rounded-sm font-black uppercase tracking-widest text-sm shadow-xl hover:bg-black transition-all"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Request'}
                  </motion.button>
                  {status === 'success' && (
                    <p className="text-green-100 font-semibold text-sm">
                      Request sent successfully to shopon@sbsourcing-bd.com.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-100 font-semibold text-sm">
                      Something went wrong. Please try again.
                    </p>
                  )}
               </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
