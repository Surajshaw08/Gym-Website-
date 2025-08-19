
import { MapPin, Mail, Phone, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-black via-gray-900 to-black text-gray-300 border-t border-orange-500/20 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Motto */}
        <div className="flex flex-col gap-3">
          <div className="text-orange-500 font-extrabold text-2xl tracking-wider">Bodyshape</div>
          <div className="text-sm text-gray-400">Unleash your inner athlete</div>
          <div className="flex gap-3 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><Facebook className="w-5 h-5 hover:text-orange-400 transition" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><Instagram className="w-5 h-5 hover:text-orange-400 transition" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><Youtube className="w-5 h-5 hover:text-orange-400 transition" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter"><Twitter className="w-5 h-5 hover:text-orange-400 transition" /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <div className="font-semibold text-orange-400 mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-orange-400 transition">About</a></li>
            <li><a href="/service" className="hover:text-orange-400 transition">Service</a></li>
            <li><a href="/contact" className="hover:text-orange-400 transition">Contact</a></li>
            <li><a href="/join" className="hover:text-orange-400 transition">Join Us</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <div className="font-semibold text-orange-400 mb-3">Contact</div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-400" /> 123 Fitness Ave, Wellness City</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-orange-400" /> <a href="mailto:info@bodyshapegym.com" className="hover:text-orange-400">info@bodyshapegym.com</a></li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange-400" /> <a href="tel:+1234567890" className="hover:text-orange-400">+1 (234) 567-890</a></li>
          </ul>
        </div>
        {/* Opening Hours */}
        <div>
          <div className="font-semibold text-orange-400 mb-3">Opening Hours</div>
          <ul className="space-y-2 text-sm">
            <li>Mon-Fri: 5:00am - 11:00pm</li>
            <li>Sat-Sun: 6:00am - 9:00pm</li>
            <li className="text-orange-400 font-semibold mt-2">24/7 for Premium Members</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-10 border-t border-gray-800 pt-6 text-xs text-center text-gray-500">
        &copy; {new Date().getFullYear()} Bodyshape Gym. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
