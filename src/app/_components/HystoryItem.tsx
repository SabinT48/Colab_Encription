'use client';
import { useEffect, useRef, useState } from 'react';
import { useTextMeasurement } from '../hooks/useTextMeasurement';

export default function HystoryItem({ item }: { item: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxChars, setMaxChars] = useState(item.length);
  const { calculateMaxChars } = useTextMeasurement();

  useEffect(() => {
    if (!containerRef.current) return;

    const updateMaxChars = () => {
      const computedStyle = window.getComputedStyle(containerRef.current!);
      const font = `${computedStyle.fontSize} ${computedStyle.fontFamily}`;
      const width = containerRef.current!.clientWidth;
      
      const chars = calculateMaxChars(width, item, font);
      setMaxChars(chars);
    };

    const observer = new ResizeObserver(updateMaxChars);
    observer.observe(containerRef.current);
    updateMaxChars(); // Initial calculation

    return () => observer.disconnect();
  }, [item, calculateMaxChars]);

  const formatedString = item.length > maxChars ? item.slice(0, maxChars) + "..." : item;

  return (
    <div ref={containerRef} className="p-2 hover:bg-gray-100 rounded cursor-pointer">
      <h1>{formatedString}</h1>
    </div>
  );
}
