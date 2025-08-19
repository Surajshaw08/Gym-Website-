import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-5xl bg-gray-900/80 rounded-3xl shadow-2xl border border-orange-500/20 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center p-10 gap-8 bg-gradient-to-br from-black via-gray-900 to-black">
          <h1 className="text-5xl font-bold text-orange-500 mb-2">Contact Us</h1>
          <p className="text-lg text-gray-300 mb-6">We'd love to hear from you! Reach out with any questions, feedback, or to schedule a visit.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-7 h-7 text-orange-400" />
              <a href="mailto:info@bodyshapegym.com" className="text-orange-300 hover:underline">info@bodyshapegym.com</a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-7 h-7 text-orange-400" />
              <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-7 h-7 text-orange-400" />
              <span>123 Fitness Ave, Wellness City, Country</span>
            </div>
          </div>
          <div className="mt-10 text-xs text-gray-500">Follow us on social media for updates and offers!</div>
        </div>
        {/* Right: Contact Form */}
        <div className="flex flex-col justify-center p-10 bg-black/60">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-orange-400">Name</label>
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-orange-400">Email</label>
              <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-orange-400">Message</label>
              <textarea placeholder="Your Message" className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" rows={5}></textarea>
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition text-lg shadow-lg">
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
