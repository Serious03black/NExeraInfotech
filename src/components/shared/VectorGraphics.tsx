
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface VectorGraphicProps {
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
  variant?: 'wave' | 'circuit' | 'dots' | 'blob' | 'lines' | 'hexagon' | 'triangle' | 'brain';
  viewBox?: string;
}

const sizeClasses = {
  sm: "w-24 h-24",
  md: "w-40 h-40",
  lg: "w-64 h-64",
  xl: "w-96 h-96",
};

export const VectorGraphic: React.FC<VectorGraphicProps> = ({
  className,
  color = "currentColor",
  size = 'md',
  animate = true,
  variant = 'wave',
  viewBox = "0 0 200 200"
}) => {

  // Wave pattern
  const renderWave = () => (
    <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M10,80 C40,10 60,110 90,80 S140,20 170,80 S250,20 290,80"
        stroke={color}
        strokeWidth="2"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={animate ? { 
          pathLength: 1, 
          pathOffset: [0, 1],
        } : undefined}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          repeatType: "loop",
          ease: "linear"
        }}
      />
      <motion.path
        d="M10,100 C40,30 60,130 90,100 S140,40 170,100 S250,40 290,100"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={animate ? { 
          pathLength: 1, 
          pathOffset: [0, 1],
        } : undefined}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          repeatType: "loop",
          ease: "linear", 
          delay: 0.5
        }}
      />
    </svg>
  );

  // Circuit board pattern
  const renderCircuit = () => (
    <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <motion.g
        stroke={color}
        strokeWidth="1"
        fill="none"
        initial={animate ? { opacity: 0 } : { opacity: 1 }}
        animate={animate ? { opacity: 1 } : undefined}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M20,20 L80,20 L80,80 L20,80 Z"
          initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
          animate={animate ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.5, delay: 0 }}
        />
        <motion.path
          d="M120,20 L180,20 L180,80 L120,80 Z"
          initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
          animate={animate ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <motion.path
          d="M20,120 L80,120 L80,180 L20,180 Z"
          initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
          animate={animate ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
        <motion.path
          d="M120,120 L180,120 L180,180 L120,180 Z"
          initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
          animate={animate ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.5, delay: 0.9 }}
        />
        <motion.path
          d="M80,20 L120,20"
          initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
          animate={animate ? { pathLength: 1 } : undefined}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.path
          d="M80,80 L120,120"
          initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
          animate={animate ? { pathLength: 1 } : undefined}
          transition={{ duration: 0.8, delay: 1.4 }}
        />
        <motion.path
          d="M180,80 L180,120"
          initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
          animate={animate ? { pathLength: 1 } : undefined}
          transition={{ duration: 0.5, delay: 1.6 }}
        />
        <motion.path
          d="M20,80 L20,120"
          initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
          animate={animate ? { pathLength: 1 } : undefined}
          transition={{ duration: 0.5, delay: 1.8 }}
        />
        <motion.path
          d="M80,180 L120,180"
          initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
          animate={animate ? { pathLength: 1 } : undefined}
          transition={{ duration: 0.5, delay: 2 }}
        />

        <motion.circle cx="20" cy="20" r="5" 
          initial={animate ? { scale: 0 } : { scale: 1 }}
          animate={animate ? { scale: 1 } : undefined}
          transition={{ duration: 0.3, delay: 2.2 }}
        />
        <motion.circle cx="20" cy="80" r="5" 
          initial={animate ? { scale: 0 } : { scale: 1 }}
          animate={animate ? { scale: 1 } : undefined}
          transition={{ duration: 0.3, delay: 2.3 }}
        />
        <motion.circle cx="20" cy="120" r="5" 
          initial={animate ? { scale: 0 } : { scale: 1 }}
          animate={animate ? { scale: 1 } : undefined}
          transition={{ duration: 0.3, delay: 2.4 }}
        />
        <motion.circle cx="20" cy="180" r="5" 
          initial={animate ? { scale: 0 } : { scale: 1 }}
          animate={animate ? { scale: 1 } : undefined}
          transition={{ duration: 0.3, delay: 2.5 }}
        />
        <motion.circle cx="80" cy="20" r="5" 
          initial={animate ? { scale: 0 } : { scale: 1 }}
          animate={animate ? { scale: 1 } : undefined}
          transition={{ duration: 0.3, delay: 2.6 }}
        />
        <motion.circle cx="80" cy="80" r="5" 
          initial={animate ? { scale: 0 } : { scale: 1 }}
          animate={animate ? { scale: 1 } : undefined}
          transition={{ duration: 0.3, delay: 2.7 }}
        />
        <motion.circle cx="80" cy="120" r="5"
          initial={animate ? { scale: 0 } : { scale: 1 }}
          animate={animate ? { scale: 1 } : undefined}
          transition={{ duration: 0.3, delay: 2.8 }}
        />
        <motion.circle cx="80" cy="180" r="5" 
          initial={animate ? { scale: 0 } : { scale: 1 }}
          animate={animate ? { scale: 1 } : undefined}
          transition={{ duration: 0.3, delay: 2.9 }}
        />
      </motion.g>
    </svg>
  );

  // Dots pattern
  const renderDots = () => (
    <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <motion.g fill={color}>
        {[...Array(5)].map((_, row) => (
          [...Array(5)].map((_, col) => (
            <motion.circle
              key={`dot-${row}-${col}`}
              cx={30 + col * 35}
              cy={30 + row * 35}
              r="4"
              initial={animate ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
              animate={animate ? { 
                scale: 1, 
                opacity: 1 
              } : undefined}
              transition={{ 
                duration: 0.3, 
                delay: 0.05 * (row + col) 
              }}
            />
          ))
        ))}
        {animate && [...Array(10)].map((_, i) => (
          <motion.circle
            key={`floating-dot-${i}`}
            cx={Math.random() * 200}
            cy={Math.random() * 200}
            r="2"
            fill={color}
            animate={{ 
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </motion.g>
    </svg>
  );

  // Blob shape
  const renderBlob = () => (
    <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M40,100 Q60,50 100,50 T160,100 T100,150 T40,100"
        fill="none"
        stroke={color}
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={animate ? { 
          pathLength: 1,
          pathOffset: [0, 1]
        } : { pathLength: 1 }}
        transition={{ 
          pathLength: { duration: 2, delay: 0 },
          pathOffset: { duration: 10, repeat: Infinity, ease: "linear" }
        }}
      />
      {animate && (
        <motion.path
          d="M60,100 Q75,70 100,70 T140,100 T100,130 T60,100"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeDasharray="5,5"
          animate={{ 
            rotate: [0, 360],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      )}
    </svg>
  );

  // Lines pattern
  const renderLines = () => (
    <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <motion.g stroke={color} strokeWidth="1" fill="none">
        {[...Array(10)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1="0"
            y1={20 + i * 20}
            x2="200"
            y2={20 + i * 20}
            initial={{ pathLength: 0 }}
            animate={animate ? { pathLength: 1 } : { pathLength: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <motion.line
            key={`vline-${i}`}
            x1={40 + i * 40}
            y1="0"
            x2={40 + i * 40}
            y2="200"
            initial={{ pathLength: 0 }}
            animate={animate ? { pathLength: 1 } : { pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 + i * 0.1 }}
          />
        ))}
      </motion.g>
    </svg>
  );

  // Hexagon grid
  const renderHexagon = () => (
    <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <motion.g 
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      >
        {[0, 60, 120].map((offsetY, rowIndex) => (
          [...Array(2)].map((_, colIndex) => {
            const offsetX = rowIndex % 2 === 0 ? 0 : 60;
            return (
              <motion.path
                key={`hex-${rowIndex}-${colIndex}`}
                d={`M${30 + offsetX + colIndex * 120},${30 + offsetY} 
                   l30,-15 l30,15 l0,30 l-30,15 l-30,-15 z`}
                initial={{ pathLength: 0 }}
                animate={animate ? { pathLength: 1 } : { pathLength: 1 }}
                transition={{ 
                  duration: 1.5, 
                  delay: 0.2 * (rowIndex + colIndex)
                }}
              />
            );
          })
        ))}
        {animate && (
          [...Array(5)].map((_, i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx={Math.random() * 160 + 20}
              cy={Math.random() * 160 + 20}
              r="3"
              fill={color}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                repeatDelay: 1
              }}
            />
          ))
        )}
      </motion.g>
    </svg>
  );

  // Triangle pattern
  const renderTriangle = () => (
    <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <motion.g fill="none" stroke={color} strokeWidth="1.5">
        <motion.path
          d="M100,30 L170,130 L30,130 z"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : { pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M100,50 L150,120 L50,120 z"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : { pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path
          d="M100,70 L130,110 L70,110 z"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : { pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        {animate && (
          <>
            <motion.circle cx="100" cy="30" r="4" fill={color}
              animate={{ scale: [0, 1, 0.8, 1] }}
              transition={{ duration: 0.5, delay: 2 }}
            />
            <motion.circle cx="170" cy="130" r="4" fill={color}
              animate={{ scale: [0, 1, 0.8, 1] }}
              transition={{ duration: 0.5, delay: 2.1 }}
            />
            <motion.circle cx="30" cy="130" r="4" fill={color}
              animate={{ scale: [0, 1, 0.8, 1] }}
              transition={{ duration: 0.5, delay: 2.2 }}
            />
            <motion.circle cx="100" cy="90" r="4" fill={color}
              animate={{ 
                scale: [0, 1],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                scale: { duration: 0.5, delay: 2.3 },
                opacity: { duration: 2, delay: 2.3, repeat: Infinity }
              }}
            />
          </>
        )}
      </motion.g>
    </svg>
  );

  // Brain network pattern
  const renderBrain = () => (
    <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <motion.g stroke={color} fill="none" strokeWidth="1.5">
        <motion.ellipse 
          cx="100" cy="100" rx="70" ry="60"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : { pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M60,80 Q100,40 140,80"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : { pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.path
          d="M60,120 Q100,160 140,120"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : { pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.path
          d="M100,40 L100,160"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : { pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
        />
        
        {/* Node points */}
        {[
          [60, 80], [100, 40], [140, 80],
          [60, 120], [100, 160], [140, 120],
          [100, 100]
        ].map(([cx, cy], i) => (
          <React.Fragment key={`node-${i}`}>
            <motion.circle
              cx={cx}
              cy={cy}
              r="5"
              fill="none"
              strokeWidth="1"
              initial={{ scale: 0 }}
              animate={animate ? { scale: 1 } : { scale: 1 }}
              transition={{ duration: 0.3, delay: 1.5 + i * 0.1 }}
            />
            <motion.circle
              cx={cx}
              cy={cy}
              r="2"
              fill={color}
              initial={{ scale: 0 }}
              animate={animate ? { scale: 1 } : { scale: 1 }}
              transition={{ duration: 0.3, delay: 1.8 + i * 0.1 }}
            />
          </React.Fragment>
        ))}
        
        {animate && (
          [...Array(5)].map((_, i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx={100}
              cy={100}
              r={10 + i * 10}
              fill="none"
              stroke={color}
              strokeWidth="0.5"
              initial={{ opacity: 0.7, scale: 0.5 }}
              animate={{ 
                opacity: [0.7, 0, 0.7],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{ 
                duration: 4,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          ))
        )}
      </motion.g>
    </svg>
  );

  // Render the selected vector graphic variant
  const renderVector = () => {
    switch (variant) {
      case 'wave': return renderWave();
      case 'circuit': return renderCircuit();
      case 'dots': return renderDots();
      case 'blob': return renderBlob();
      case 'lines': return renderLines();
      case 'hexagon': return renderHexagon();
      case 'triangle': return renderTriangle();
      case 'brain': return renderBrain();
      default: return renderWave();
    }
  };

  return (
    <div className={cn(sizeClasses[size], className)}>
      {renderVector()}
    </div>
  );
};

// Collection of vector graphics with different animations and styles
export const VectorGraphicsGrid: React.FC<{
  columns?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}> = ({
  columns = 4,
  className,
  size = 'sm',
  animate = true
}) => {
  const variants = ['wave', 'circuit', 'dots', 'blob', 'lines', 'hexagon', 'triangle', 'brain'] as const;
  
  return (
    <div className={cn(
      `grid grid-cols-2 sm:grid-cols-${columns} gap-4`,
      className
    )}>
      {variants.map((variant) => (
        <div key={variant} className="flex flex-col items-center">
          <VectorGraphic 
            variant={variant} 
            size={size} 
            animate={animate} 
          />
          <p className="mt-2 text-sm text-muted-foreground capitalize">{variant}</p>
        </div>
      ))}
    </div>
  );
};

// Vector background for sections
export const VectorBackground: React.FC<{
  variant?: 'dots' | 'grid' | 'waves' | 'circuits';
  className?: string;
  color?: string;
  opacity?: number;
}> = ({
  variant = 'dots',
  className,
  color = "currentColor",
  opacity = 0.05
}) => {
  return (
    <div className={cn(
      "absolute inset-0 overflow-hidden pointer-events-none z-0",
      className
    )}>
      <svg 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        {variant === 'dots' && (
          <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1.5" fill={color} />
          </pattern>
        )}
        {variant === 'grid' && (
          <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 0 H40 V40" fill="none" stroke={color} strokeWidth="0.5" />
          </pattern>
        )}
        {variant === 'waves' && (
          <pattern id="waves-pattern" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
            <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke={color} strokeWidth="0.5" />
          </pattern>
        )}
        {variant === 'circuits' && (
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="100" y2="0" stroke={color} strokeWidth="0.5" />
            <line x1="0" y1="100" x2="100" y2="100" stroke={color} strokeWidth="0.5" />
            <line x1="0" y1="0" x2="0" y2="100" stroke={color} strokeWidth="0.5" />
            <line x1="100" y1="0" x2="100" y2="100" stroke={color} strokeWidth="0.5" />
            <circle cx="0" cy="0" r="3" fill={color} />
            <circle cx="100" cy="0" r="3" fill={color} />
            <circle cx="0" cy="100" r="3" fill={color} />
            <circle cx="100" cy="100" r="3" fill={color} />
            <line x1="0" y1="0" x2="100" y2="100" stroke={color} strokeWidth="0.3" strokeDasharray="5,5" />
            <line x1="100" y1="0" x2="0" y2="100" stroke={color} strokeWidth="0.3" strokeDasharray="5,5" />
          </pattern>
        )}
        <rect x="0" y="0" width="100%" height="100%" fill={`url(#${variant}-pattern)`} />
      </svg>
    </div>
  );
};

export default {
  VectorGraphic,
  VectorGraphicsGrid,
  VectorBackground
};
