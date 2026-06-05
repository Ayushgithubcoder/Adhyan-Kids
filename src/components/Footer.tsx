import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-[#150D07] text-slate-300 pt-16 pb-8 border-t border-slate-800 dark:border-[#23180E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-md">
                  <img
                    src="/images/logo_trans.png"
                    alt="Adhyan Kidz Logo"
                    className="object-contain w-8 h-8"
                  />
                </div>
                <img
                  src="/images/banner_trans.png"
                  alt="Adhyan Kidz"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Modipuram's premium play school dedicated to fostering early education through safety, care, child-centric values, and play-based learning models.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-blue hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-pink hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-orange hover:text-white transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Contacts */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                <span>Modipuram, Sardhana, Meerut, Uttar Pradesh, 250110, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-brand-pink shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-brand-blue shrink-0" />
                <a href="mailto:info@adhyankidz.com" className="hover:text-white transition-colors">info@adhyankidz.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Office Timings:</p>
                  <p className="text-slate-400 text-xs mt-0.5">Monday - Saturday: 8:00 AM - 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Google Maps Embed */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3">
              Find Our Campus
            </h4>
            <div className="w-full h-44 rounded-2xl overflow-hidden border-2 border-slate-800 shadow-inner relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.587884391696!2d77.7152885!3d29.0492424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6f007a9cae9f%3A0xfc0c524d7cefe536!2sAdhyan%20kidz!5e0!3m2!1sen!2sin!4v1717522500000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/MhWLAWeYvDEnS1oH7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-yellow hover:underline"
            >
              Open in Google Maps App ➔
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Adhyan Kidz. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 fill-brand-pink text-brand-pink" /> for kids' future.
          </p>
        </div>
      </div>
    </footer>
  );
}
