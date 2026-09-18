import { Metadata } from 'next';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Jagmarg News',
  description: 'Get in touch with Jagmarg News. For tips, advertising, or general inquiries, contact us at info@jagmarg.com.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] pt-12 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Get in <span className="text-[#D32F2F]">Touch.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Have a news tip, advertising inquiry, or feedback? We'd love to hear from you. Reach out to our desk directly.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-[#D32F2F] rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Email Us</h3>
                <p className="text-gray-500 text-sm mb-3">For all general inquiries, press releases, and advertisement.</p>
                <a href="mailto:info@jagmarg.com" className="text-lg font-bold text-[#D32F2F] hover:underline">
                  info@jagmarg.com
                </a>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-[#D32F2F] rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Head Office</h3>
                <p className="text-gray-500 text-sm mb-2">Visit us at our headquarters.</p>
                <address className="not-italic text-gray-700 dark:text-gray-300 font-medium">
                  Jagmarg News Network<br />
                  Chandigarh / Haryana<br />
                  India
                </address>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-[#D32F2F] rounded-full flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Working Hours</h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Monday - Saturday</p>
                <p className="text-gray-500 text-sm">9:00 AM - 7:00 PM (IST)</p>
                <p className="text-xs text-gray-400 mt-2">*News desk operates 24/7</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-[#0A0A0A] p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Send a Message</h3>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:border-[#D32F2F] transition-colors" placeholder="John" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:border-[#D32F2F] transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:border-[#D32F2F] transition-colors" placeholder="john@example.com" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Subject</label>
                <select className="w-full px-4 py-3 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:border-[#D32F2F] transition-colors appearance-none">
                  <option>News Tip</option>
                  <option>Advertisement Inquiry</option>
                  <option>Feedback / Suggestion</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 mb-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:border-[#D32F2F] transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-black uppercase tracking-widest rounded-lg transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
