'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCategories, getMenuByCategory, Category } from '@/lib/data';
import { motion, AnimatePresence } from 'motion/react';

export default function MenuPage() {
  const categories = getCategories();
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const displayedItems = getMenuByCategory(activeCategory);

  return (
    <div className="min-h-screen bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-stone-900 mb-4">Our Menu</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of dishes, prepared with passion and the finest ingredients.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 uppercase tracking-widest text-sm font-semibold transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-transparent text-stone-600 hover:text-stone-900 border border-stone-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
              >
                <Link href={`/menu/${item.id}`} className="group block h-full bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 font-semibold text-amber-700 shadow-sm">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">{item.category}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">{item.name}</h3>
                    <p className="text-stone-600 text-sm line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {displayedItems.length === 0 && (
          <div className="text-center text-stone-500 py-20">
            No items found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
