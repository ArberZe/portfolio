'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function AboutMe() {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }} // Make the animation happen only once when it first comes into view
      className="space-y-2"
    >
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
        Hi, I'm <span className="text-primary">Arber Zeka</span>
      </h1>

      <p className="mt-4 text-lg text-gray-700 leading-relaxed transition-all duration-500">
        I'm a passionate web developer who loves building well-crafted applications.
        <AnimatePresence>
          {showMore && (
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              When I'm not coding, you’ll probably find me trying to make the perfect espresso☕ — or figuring out why my coffee machine needs a firmware update.
            </motion.span>
          )}
        </AnimatePresence>
      </p>

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-2 text-blue-600 hover:underline focus:outline-none text-sm transition-colors duration-300"
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </motion.div>
  );
}
