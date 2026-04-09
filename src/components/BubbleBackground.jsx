import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState([]);
  const colors = ['#58D854', '#3CBCFC', '#F85898', '#F8B800'];

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        size: Math.random() * 60 + 20,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      }));
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="bubble"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            backgroundColor: bubble.color,
          }}
          animate={{
            y: [0, -100, 0, 100, 0],
            x: [0, 50, 0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;
