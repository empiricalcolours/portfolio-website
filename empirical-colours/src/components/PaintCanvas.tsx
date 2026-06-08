import React, { useState, useEffect } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  color: string;
}

const getRandomColor = () =>
  `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;

const PaintCanvas: React.FC = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setTrail(prev => [
        ...prev,
        { x: e.clientX, y: e.clientY, color: getRandomColor() },
      ].slice(-20)); // keep only last 20 points
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      {trail.map((point, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            left: point.x - 5,
            top: point.y - 5,
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: point.color,
            opacity: 1 - idx / 20,
            transition: 'opacity 0.2s, transform 0.2s',
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
    </div>
  );
};

export default PaintCanvas;
