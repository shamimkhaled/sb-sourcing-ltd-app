import { Search, Scissors, ClipboardCheck, Package, Ship, Handshake } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Supplier Credibility',
    description: 'S.B Sourcing developing team take great care to ensure the quality, desired weight, construction and color, we evaluate the capacity and capability of every factory.',
    icon: <Handshake size={32} />
  },
  {
    title: 'Sourcing',
    description: 'We maintain strong exclusive relationships with many of the yarn and fabric mills and the accessories suppliers locally and globally.',
    icon: <Search size={32} />
  },
  {
    title: 'Sampling',
    description: 'We develop and provide samples as per buyers\' design, fabric quality, weight, shrinkage, color fastness, specifications etc. within 7-10 days.',
    icon: <Scissors size={32} />
  },
  {
    title: 'Quality Control / Assurance',
    description: 'Our Quality Controllers visit the factory regularly to make sure we meet our buyer\'s requirements. Personnel are stationed at all manufacturing sites.',
    icon: <ClipboardCheck size={32} />
  },
  {
    title: 'Packaging',
    description: 'Only approved goods are packed and buyer is assured of getting quality merchandise. All packing instructions of the buyer are strictly respected.',
    icon: <Package size={32} />
  },
  {
    title: 'Shipment/Cargo Handling',
    description: 'All shipping documents are reviewed and verified as per buyer instruction. All cargo is handled by reputable forwarders to ensure on-time delivery.',
    icon: <Ship size={32} />
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Services</span>
          <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-6 text-secondary">
             What we do
          </h2>
          <p className="text-gray-600">
             We S.B Sourcing is a leading 100% export-oriented readymade clothing supplier and apparel sourcing agent based in Dhaka, Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#fcf8f5] p-10 rounded-sm border-b-4 border-transparent hover:border-primary transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                 {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 overflow-hidden inline-block grayscale group-hover:grayscale-0 transition-all">
                 <a href="#" className="text-xs font-black uppercase tracking-widest text-primary border-b border-primary pb-1">View Service</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
