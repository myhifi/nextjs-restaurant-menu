import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="font-serif text-2xl tracking-wider text-amber-500 block mb-4">
              LUMIÈRE
            </span>
            <p className="text-sm">
              Experience the finest culinary delights in an elegant, warm atmosphere. 
              Where tradition meets modern gastronomy.
            </p>
          </div>
          <div>
            <h3 className="text-stone-100 uppercase tracking-widest text-sm font-semibold mb-4">Visit Us</h3>
            <p className="text-sm mb-2">123 Culinary Avenue</p>
            <p className="text-sm mb-2">Food District, FD 10023</p>
            <p className="text-sm">hello@lumiererestaurant.com</p>
          </div>
          <div>
            <h3 className="text-stone-100 uppercase tracking-widest text-sm font-semibold mb-4">Hours</h3>
            <p className="text-sm mb-2">Mon - Thu: 5:00 PM - 10:00 PM</p>
            <p className="text-sm mb-2">Fri - Sat: 5:00 PM - 11:30 PM</p>
            <p className="text-sm">Sun: 4:00 PM - 9:00 PM</p>
          </div>
        </div>
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Lumière Restaurant. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
