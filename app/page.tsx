import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedItems } from '@/lib/data';

export default function Home() {
  const featuredItems = getFeaturedItems();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-stone-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://picsum.photos/seed/restaurant/1920/1080"
            alt="Lumière Restaurant Interior"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-50 mb-6 tracking-wide">
            LUMIÈRE
          </h1>
          <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto font-light tracking-wide">
            A symphony of flavors in every bite. Discover culinary perfection in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/menu" 
              className="bg-amber-600 hover:bg-amber-700 text-stone-50 px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-colors duration-300"
            >
              View Menu
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border border-stone-50 hover:bg-stone-50 hover:text-stone-950 text-stone-50 px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-colors duration-300"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
        <h2 className="font-serif text-4xl text-stone-900 mb-8">Culinary Artistry Meets Tradition</h2>
        <p className="text-stone-600 text-lg leading-relaxed max-w-3xl mx-auto">
          At Lumière, we believe that dining is an experience that should engage all the senses. 
          Our executive chefs source only the finest seasonal ingredients to create dishes that are 
          both visually stunning and exceptionally delicious. From the moment you walk through our 
          doors, you are transported to a world of refined taste and impeccable service.
        </p>
      </section>

      {/* Featured Items Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2 block">Chef's Selection</span>
            <h2 className="font-serif text-4xl text-stone-900">Featured Dishes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredItems.map(item => (
              <Link href={`/menu/${item.id}`} key={item.id} className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-xl text-stone-900">{item.name}</h3>
                    <span className="text-amber-600 font-semibold">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-stone-600 text-sm flex-grow mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  <span className="text-stone-400 uppercase tracking-widest text-xs font-semibold mt-auto group-hover:text-amber-600 transition-colors">
                    View Details &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/menu" className="inline-block border-b-2 border-amber-600 text-stone-900 font-semibold tracking-widest uppercase text-sm pb-1 hover:text-amber-600 transition-colors">
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
