import React from 'react';

interface CollapseProps {
  in: boolean;
  children: React.ReactNode;
  className?: string;
}

const Collapse: React.FC<CollapseProps> = ({ in: open, children, className }) => {
  return (
    <div
      className={`
        transition-all duration-200 overflow-hidden
        ${open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
        ${className ?? ''}
      `}
      aria-hidden={!open}
    >
      {children}
    </div>
  );
};

export default Collapse;