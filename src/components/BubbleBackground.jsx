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
        >
          <svg viewBox="0 0 10 10" width="100%" height="100%" shapeRendering="crispEdges" style={{ overflow: 'visible' }}>
            <path 
              fill={bubble.color} 
              fillOpacity="0.2"
              stroke={bubble.color}
              strokeWidth="var(--bubble-border-width)"
              vectorEffect="non-scaling-stroke"
              d="M3 0 h4 v1 h2 v2 h1 v4 h-1 v2 h-2 v1 h-4 v-1 h-2 v-2 h-1 v-4 h1 v-2 h2 v-1 z" 
            />
            <rect x="2" y="2" width="2" height="2" fill="white" opacity="0.85" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default BubbleBackground;
