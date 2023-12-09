'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import Image from 'next/image';

const Carousel = ({ items, fill, width, height }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabsRef = useRef();

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
    tabsRef.current.focus();
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % items.length);
    tabsRef.current.focus();
  };

  return (
    <Tabs
      value={selectedIndex}
      onValueChange={(index) => setSelectedIndex(index)}
      aria-label="Gallery"
      ref={tabsRef}
      className="relative h-full"
    >
      <Button
        onClick={handlePrev}
        variant="outline"
        size="icon"
        className="rounded-full top-1/2 absolute left-4 z-50 -translate-y-1/2"
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        onClick={handleNext}
        variant="outline"
        size="icon"
        className="rounded-full top-1/2 absolute right-4 z-50 -translate-y-1/2"
      >
        <ChevronRightIcon />
      </Button>

      <div className="h-full relative overflow-y-hidden">
        <AnimatePresence>
          {items.map((item, index) => (
            <TabsContent key={index} value={selectedIndex}>
              {selectedIndex === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.75 }}
                  className={`w-${width}`}
                >
                  <Image
                    src={item}
                    alt={item}
                    fill={true}
                    objectFit="cover"
                    className="w-full mx-auto"
                  />
                </motion.div>
              )}
            </TabsContent>
          ))}
        </AnimatePresence>
      </div>
    </Tabs>
  );
};

export default Carousel;
