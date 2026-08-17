import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-stone-900 mb-4">Contact Us</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            We'd love to hear from you. Book a table, inquire about events, or simply say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="bg-stone-900 text-stone-50 p-10 md:p-16 flex flex-col justify-center">
            <h2 className="font-serif text-3xl mb-10 text-amber-500">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-amber-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="uppercase tracking-widest text-sm font-semibold mb-2">Location</h3>
                  <p className="text-stone-300">123 Culinary Avenue<br/>Food District, FD 10023</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-amber-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="uppercase tracking-widest text-sm font-semibold mb-2">Reservations</h3>
                  <p className="text-stone-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-amber-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="uppercase tracking-widest text-sm font-semibold mb-2">Email</h3>
                  <p className="text-stone-300">hello@lumiererestaurant.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-amber-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="uppercase tracking-widest text-sm font-semibold mb-2">Opening Hours</h3>
                  <p className="text-stone-300">Mon - Thu: 5:00 PM - 10:00 PM</p>
                  <p className="text-stone-300">Fri - Sat: 5:00 PM - 11:30 PM</p>
                  <p className="text-stone-300">Sun: 4:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-16 shadow-xl border border-stone-100">
            <h2 className="font-serif text-3xl mb-10 text-stone-900">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full border-b border-stone-300 bg-transparent py-3 text-stone-900 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full border-b border-stone-300 bg-transparent py-3 text-stone-900 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">Subject</label>
                <select 
                  id="subject"
                  className="w-full border-b border-stone-300 bg-transparent py-3 text-stone-900 focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option>Table Reservation</option>
                  <option>Private Events</option>
                  <option>General Inquiry</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full border-b border-stone-300 bg-transparent py-3 text-stone-900 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-amber-600 hover:bg-amber-700 text-stone-50 py-4 uppercase tracking-widest text-sm font-semibold transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
