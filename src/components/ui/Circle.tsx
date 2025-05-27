// Circle.tsx
import React from 'react';

interface CircleProps {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  width: string | number;
  height: string | number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
}

export default function Circle({
  className = '',
  style = {},
  color = '#0E368733',
  width,
  height,
  top,
  left,
  right,
  bottom,
}: CircleProps) {
  return (
    <div
      className={`absolute rounded-full hidden lg:block ${className}`}
      style={{
        width,
        height,
        backgroundColor: color,
        top,
        left,
        right,
        bottom,
        ...style,
      }}
    />
  );
}