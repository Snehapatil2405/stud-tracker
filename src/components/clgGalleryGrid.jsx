import React, { useState } from 'react';
// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion';
import { ImageIcon, Camera, Trophy, School } from 'lucide-react';

const galleryData = [
  { id: 1, category: 'Campus', title: 'Main Campus', size: 'md:col-span-2 md:row-span-2', img: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, category: 'Events', title: 'Cultural Fest', size: 'md:col-span-1 md:row-span-1', img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, category: 'Sports', title: 'Annual Sports', size: 'md:col-span-1 md:row-span-1', img: 'https://images.unsplash.com/photo-1544654803-b69140b285a1?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, category: 'Campus', title: 'Tech Library', size: 'md:col-span-1 md:row-span-2', img: 'https://images.unsplash.com/photo-1541339907198-e08756dee9b8?q=80&w=1000&auto=format&fit=crop' },
  { id: 5, category: 'Events', title: 'Seminar Hall', size: 'md:col-span-2 md:row-span-1', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, category: 'Sports', title: 'Basketball Court', size: 'md:col-span-1 md:row-span-1', img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000&auto=format&fit=crop' },
];

const categories = [
  { name: 'All', icon: <ImageIcon size={18} /> },
  { name: 'Campus', icon: <School size={18} /> },
  { name: 'Events', icon: <Camera size={18} /> },
  { name: 'Sports', icon: <Trophy size={18} /> },
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">

        {/* --- Fixed Campus Chronicles (Gallery) Title --- */}
        <div className="flex flex-col items-center justify-center text-center mb-16 px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight"
          >
            Campus <span className="text-blue-600">Chronicles</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-500 mt-6 font-medium max-w-2xl mx-auto text-lg leading-relaxed px-4 italic"
          >
            "Capturing moments, creating memories — A glimpse into our vibrant college life, world-class infrastructure, and student achievements."
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1.5 bg-blue-600 mt-8 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          />
        </div>

        {/* Modern Filter Tabs */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setFilter(cat.name)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${filter === cat.name
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`relative group overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 ${item.size}`}
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Modern Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-white text-2xl font-bold mt-2">{item.title}</h3>
                  </motion.div>
                </div>

                {/* Corner Decoration for Hover */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="text-white" size={20} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;