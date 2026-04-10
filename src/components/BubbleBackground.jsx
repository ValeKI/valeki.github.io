import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState([]);
  const isSimulating = useRef(false);
  const lastHoveredEl = useRef(null);
  const colors = ['#58D854', '#3CBCFC', '#F85898', '#F8B800'];

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 20 }).map((_, i) => ({
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

  const handlePop = (id) => {
    setBubbles(prev => {
      const filtered = prev.filter(b => b.id !== id);
      // Now that absolute positioning is fixed, we can safely replace popped bubbles
      const replacement = {
        id: Math.random().toString(36).substr(2, 9),
        size: Math.random() * 60 + 20,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 20 + 10,
        delay: 0,
      };
      return [...filtered, replacement];
    });
  };

  useEffect(() => {
    const handleGlobalClick = (e) => {
      if (isSimulating.current) return;

      const elements = document.elementsFromPoint(e.clientX, e.clientY);
      const bubbleEl = elements.find(el => el.classList.contains('bubble'));

      if (bubbleEl) {
        isSimulating.current = true;
        
        const simulatedEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          clientX: e.clientX,
          clientY: e.clientY,
          view: window
        });

        bubbleEl.dispatchEvent(simulatedEvent);
        isSimulating.current = false;
      }
    };

    window.addEventListener('click', handleGlobalClick, true);
    return () => window.removeEventListener('click', handleGlobalClick, true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const elements = document.elementsFromPoint(e.clientX, e.clientY);
      const bubbleEl = elements.find(el => el.classList.contains('bubble'));

      if (bubbleEl !== lastHoveredEl.current) {
        if (lastHoveredEl.current) {
          lastHoveredEl.current.classList.remove('force-hover');
        }
        if (bubbleEl) {
          bubbleEl.classList.add('force-hover');
        }
        lastHoveredEl.current = bubbleEl;
      }

      if (bubbleEl) {
        document.body.style.cursor = 'pointer';
      } else {
        document.body.style.cursor = '';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <AnimatePresence>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            id={bubble.id}
            className="bubble"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              cursor: 'pointer',
              pointerEvents: 'auto',
              transform: 'translate(-50%, -50%)',
            }}
            onClick={() => handlePop(bubble.id)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              y: [0, -100, 0, 100, 0],
              x: [0, 50, 0, -50, 0],
              scale: 1,
              opacity: 0.85,
            }}
            exit={{ 
              scale: 1.5, 
              opacity: 0,
              filter: 'brightness(2) blur(2px)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "linear",
              scale: { duration: 0.5 },
              opacity: { duration: 0.5 }
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
      </AnimatePresence>
    </div>
  );
};

export default BubbleBackground;
