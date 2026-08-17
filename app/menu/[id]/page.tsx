import { getMenuItemById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default async function MenuItemDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = getMenuItemById(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Link 
          href="/menu" 
          className="inline-flex items-center text-stone-500 hover:text-amber-600 uppercase tracking-widest text-xs font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Menu
        </Link>
        
        <div className="bg-white shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 h-80 md:h-[600px]">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              {item.category}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">{item.name}</h1>
            <p className="text-3xl font-light text-stone-700 mb-8">${item.price.toFixed(2)}</p>
            
            <div className="border-t border-b border-stone-100 py-8 mb-8">
              <h3 className="text-stone-900 uppercase tracking-widest text-sm font-semibold mb-4">Description</h3>
              <p className="text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>
            
            <button className="bg-stone-900 hover:bg-stone-800 text-stone-50 px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-colors duration-300 w-full md:w-auto text-center">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
