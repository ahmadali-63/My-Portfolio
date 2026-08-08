import React, { useRef } from 'react';
import './LiquidGlass.css';

const LiquidGlass = ({
  children,
  className = '',
  variant = 'card', // 'card', 'panel', 'button', 'pill'
  interactive = true,
  onClick,
  style = {},
  ...props
}) => {
  const glassRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!interactive || !glassRef.current) return;
    const rect = glassRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glassRef.current.style.setProperty('--mouse-x', `${x}px`);
    glassRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const variantClass = variant ? `liquid-glass-${variant}` : '';

  return (
    <div
      ref={glassRef}
      className={`liquid-glass-wrapper ${variantClass} ${className}`}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      style={style}
      {...props}
    >
      {interactive && <div className="liquid-glass-spotlight" />}
      <div className="liquid-glass-sheen" />
      <div className="liquid-glass-content">{children}</div>
    </div>
  );
};

export default LiquidGlass;
