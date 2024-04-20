import React, { useEffect, useRef } from 'react';
import { Track } from '../utils/Track';

const CustomCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Define track coordinates
    const track1 = new Track(50, 350, 150, 250);
    // const track2 = new Track(50, 150, 150, 150);

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw tracks on the canvas
    track1.draw(ctx);
    // track2.draw(ctx);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`border-2 border-green-400 w-full`}
      width={400} // Set canvas width
      height={400} // Set canvas height
    ></canvas>
  );
}

export default CustomCanvas;
