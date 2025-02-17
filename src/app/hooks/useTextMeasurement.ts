'use client';

export function useTextMeasurement() {
  const measureText = (text: string, font: string): number => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return 0;
    
    context.font = font;
    return context.measureText(text).width;
  };

  const calculateMaxChars = (containerWidth: number, text: string, font: string): number => {
    const ellipsisWidth = measureText('...', font);
    const availableWidth = containerWidth - 16; // padding compensation
    
    if (measureText(text, font) <= availableWidth) {
      return text.length;
    }

    let low = 0;
    let high = text.length;
    
    while (low < high) {
      const mid = Math.floor((low + high + 1) / 2);
      const truncated = text.slice(0, mid);
      
      if (measureText(truncated, font) + ellipsisWidth <= availableWidth) {
        low = mid;
      } else {
        high = mid - 1;
      }
    }
    
    return low;
  };

  return { measureText, calculateMaxChars };
}
