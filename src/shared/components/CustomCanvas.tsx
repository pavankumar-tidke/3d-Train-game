import React, { useRef, useEffect } from 'react';
import { ASSETS } from '../constants/constants';

const CustomCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) return;

    const image = new Image();
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 10, 10);
    };

    image.src = ASSETS.TRIAL_SVG; // Use the imported SVG file as the source

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full border-2 border-blue-400"
    ></canvas>
  );
};

export default CustomCanvas;
