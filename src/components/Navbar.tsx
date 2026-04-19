import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'Home', path: '/' },
  {
    name: 'About Us',
    path: '#',
    children: [
      { name: 'Company Profile', path: '/company-profile' },
      { name: 'Mission, Vision & Values', path: '/mission-vision-values' },
      { name: 'Chairman/MD Message', path: '/chairman-md-message' },
      { name: 'Our Capabilities', path: '/our-capabilities' },
    ],
  },
  { name: 'Our Service', path: '/our-service' },
  {
    name: 'Products',
    path: '#',
    children: [
      {
        name: 'Knit',
        path: '#',
        children: [
          { name: 'Knit – Men’s', path: '/knit-mens' },
          { name: 'Knit – Women’s', path: '/knit-womens' },
          { name: 'Knit – Kid’s', path: '/knit-kids' },
        ],
      },
      {
        name: 'Woven',
        path: '#',
        children: [
          { name: 'Woven – Men’s', path: '/woven-mens' },
          { name: 'Woven – Women’s', path: '/woven-womens' },
          { name: 'Woven – Kid’s', path: '/woven-kids' },
        ],
      },
      {
        name: 'Sweater',
        path: '#',
        children: [
          { name: 'Sweater – Men’s', path: '/sweater-mens' },
          { name: 'Sweater – Women’s', path: '/sweater-womens' },
          { name: 'Sweater – Kid’s', path: '/sweater-kids' },
        ],
      },
    ],
  },
  { name: 'Machineries', path: '/production-machineries' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* Top Banner */}
      <div className={cn(
        "bg-secondary text-white py-2 text-xs transition-all duration-300 overflow-hidden",
        isScrolled ? "h-0 opacity-0" : "h-auto opacity-100"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center whitespace-nowrap">
          <div className="flex gap-6">
            <span className="flex items-center gap-1"><Phone size={14} className="text-primary" /> +88 01619 153138</span>
            <span className="flex items-center gap-1"><Mail size={14} className="text-primary" /> shopon@sbsourcing-bd.com</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <MapPin size={14} className="text-primary" /> Mohammadia Housing Limited, Mohammedpur, Dhaka
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={cn(
        "bg-white transition-all duration-300",
        isScrolled ? "shadow-md py-2" : "border-b border-gray-100 py-4"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center">
              <div className="relative w-12 h-12 flex items-center justify-center font-black text-2xl group">
                 <span className="text-secondary absolute -left-1 -top-1 translate-x-1 translate-y-1">S</span>
                 <span className="text-primary relative z-10">B</span>
                 <div className="absolute inset-0 border-2 border-primary/20 rounded-lg -rotate-12 group-hover:rotate-0 transition-transform" />
              </div>
              <div className="ml-2 leading-none">
                <div className="flex items-baseline">
                  <span className="text-2xl font-black text-secondary tracking-tighter">S.B</span>
                  <span className="text-2xl font-black text-primary tracking-tighter ml-1">SOURCING</span>
                </div>
                <div className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-0.5">Exporter & Manufacturer</div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "text-sm font-bold uppercase tracking-wide py-2 flex items-center gap-1 transition-colors",
                    location.pathname === item.path ? "text-primary border-b-2 border-primary" : "text-secondary hover:text-primary"
                  )}
                >
                  {item.name}
                  {(item.children) && <ChevronDown size={14} />}
                </Link>

                {/* General Dropdown */}
                {item.children && (
                  <div className={cn(
                    "absolute left-0 mt-0 w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-primary pt-2",
                  )}>
                    {item.children.map((child) => (
                      <div key={child.name} className="relative group/sub">
                        <Link
                          to={child.path}
                          className="block px-6 py-3 text-sm font-semibold hover:bg-gray-100 hover:text-primary transition-colors flex justify-between items-center"
                        >
                          {child.name}
                          {'children' in child && <ChevronDown size={14} className="-rotate-90" />}
                        </Link>
                        
                        {/* Nested Dropdown for Products */}
                        {'children' in child && (
                           <div className="absolute left-full top-0 w-64 bg-white shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible border-l border-gray-100 transition-all duration-200">
                             {child.children?.map(subChild => (
                               <Link
                                 key={subChild.path}
                                 to={subChild.path}
                                 className="block px-6 py-3 text-sm font-semibold hover:bg-gray-100 hover:text-primary transition-colors"
                               >
                                 {subChild.name}
                               </Link>
                             ))}
                           </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact-us"
              className="bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wide transition-all shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact Us
            </Link>
          </div>


          {/* Mobile Menu Button */}
          <button className="lg:hidden text-secondary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-50 last:border-0">
                    <div className="flex justify-between items-center py-3">
                      <Link to={item.path} className="text-secondary font-bold uppercase tracking-wide text-sm">{item.name}</Link>
                      {item.children && (
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className={cn("transition-transform duration-200", activeDropdown === item.name && "rotate-180")}
                        >
                          <ChevronDown size={20} />
                        </button>
                      )}
                    </div>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-gray-50 pl-4 py-2"
                      >
                        {item.children.map((child) => (
                          <div key={child.name}>
                            {child.path === '#' ? (
                              <div className="py-2">
                                <div className="text-primary font-bold text-xs uppercase mb-1">{child.name}</div>
                                <div className="flex flex-col gap-2 pl-4">
                                  {'children' in child && child.children?.map(subChild => (
                                    <Link key={subChild.path} to={subChild.path} className="text-sm font-semibold text-gray-600 border-l border-gray-200 pl-3">{subChild.name}</Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <Link to={child.path} className="block py-2 text-sm font-semibold text-gray-600">{child.name}</Link>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <Link to="/contact-us" className="block w-full text-center bg-primary text-white py-3 rounded-sm font-bold uppercase tracking-wide text-sm mt-4">Contact Us</Link>
              </div>
            </motion.div>

          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
