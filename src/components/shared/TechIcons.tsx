
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  Code2, MonitorSmartphone, Database, Cloud, BrainCircuit, 
  Smartphone, Globe, ShieldCheck, Figma, Palette, 
  Cpu, Server, GitBranch, Command, AtSign
} from 'lucide-react';

type IconAnimation = 'float' | 'wave' | 'pulse' | 'orbit' | 'bounce' | 'spin' | 'flip' | 'shake';

interface TechIconProps {
  icon: React.ReactNode;
  name?: string;
  animation?: IconAnimation | 'none';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
  delay?: number;
  interactive?: boolean;
}

const animationVariants = {
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  wave: {
    rotate: [0, 5, -5, 5, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  pulse: {
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  orbit: {
    x: [0, 20, 0, -20, 0],
    y: [0, 10, 20, 10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  bounce: {
    y: [0, -10, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeOut"
    }
  },
  spin: {
    rotate: [0, 360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }
  },
  flip: {
    rotateY: [0, 180, 360],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  shake: {
    x: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 3,
      ease: "easeInOut"
    }
  }
};

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24"
};

export const TechIcon: React.FC<TechIconProps> = ({
  icon,
  name,
  animation = 'float',
  size = 'md',
  color,
  className,
  delay = 0,
  interactive = true
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className={cn(
          "flex items-center justify-center rounded-full p-2 backdrop-blur-sm",
          interactive ? "cursor-pointer" : "",
          sizeClasses[size],
          color || "text-foreground",
          className
        )}
        animate={animation !== 'none' ? animationVariants[animation] : undefined}
        style={{ originX: 0.5, originY: 0.5 }}
        transition={{
          delay,
          ...animationVariants[animation === 'none' ? 'float' : animation].transition
        }}
        whileHover={interactive ? { scale: 1.2, transition: { duration: 0.3 } } : undefined}
        whileTap={interactive ? { scale: 0.95 } : undefined}
      >
        {icon}
      </motion.div>
      {name && (
        <span className="mt-2 text-sm text-muted-foreground font-medium">
          {name}
        </span>
      )}
    </div>
  );
};

// Decorative icon element with abstract vector shapes
export const VectorDecoration: React.FC<{
  className?: string;
  variant?: 'dots' | 'waves' | 'circuit' | 'grid' | 'organic' | 'tech';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  animate?: boolean;
}> = ({ 
  className, 
  variant = 'dots', 
  size = 'md', 
  color = "currentColor",
  animate = true
}) => {
  const sizeMap = {
    sm: "w-16 h-16",
    md: "w-32 h-32",
    lg: "w-48 h-48",
  };
  
  // Different vector patterns
  const renderVector = () => {
    switch(variant) {
      case 'waves':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M0,50 Q25,30 50,50 T100,50"
              stroke={color}
              strokeWidth="2"
              fill="none"
              initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
              animate={animate ? { pathLength: 1 } : undefined}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            />
            <motion.path
              d="M0,40 Q25,20 50,40 T100,40"
              stroke={color}
              strokeWidth="1.5"
              fill="none"
              initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
              animate={animate ? { pathLength: 1 } : undefined}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
            />
            <motion.path
              d="M0,60 Q25,80 50,60 T100,60"
              stroke={color}
              strokeWidth="1.5"
              fill="none"
              initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
              animate={animate ? { pathLength: 1 } : undefined}
              transition={{ duration: 2.3, repeat: Infinity, repeatType: "loop", delay: 0.4 }}
            />
          </svg>
        );
      case 'circuit':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <motion.g
              stroke={color}
              strokeWidth="1"
              fill="none"
              initial={animate ? { opacity: 0 } : { opacity: 1 }}
              animate={animate ? { opacity: 1 } : undefined}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <path d="M20,20 L80,20 L80,80 L20,80 Z" />
              <path d="M20,20 L50,50 L80,20" />
              <path d="M20,80 L50,50 L80,80" />
              <circle cx="20" cy="20" r="5" />
              <circle cx="80" cy="20" r="5" />
              <circle cx="50" cy="50" r="8" />
              <circle cx="20" cy="80" r="5" />
              <circle cx="80" cy="80" r="5" />
              <motion.circle 
                cx="50" 
                cy="50" 
                r="2" 
                fill={color}
                animate={animate ? { 
                  scale: [1, 1.5, 1],
                } : undefined}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "loop" 
                }}
              />
            </motion.g>
          </svg>
        );
      case 'grid':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <motion.g
              stroke={color}
              strokeWidth="0.5"
              fill="none"
            >
              {[0, 20, 40, 60, 80, 100].map((pos, i) => (
                <React.Fragment key={`grid-${i}`}>
                  <motion.line 
                    x1="0" y1={pos} x2="100" y2={pos}
                    initial={animate ? { strokeDashoffset: 100, strokeDasharray: 100 } : {}}
                    animate={animate ? { strokeDashoffset: 0 } : undefined}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                  />
                  <motion.line 
                    x1={pos} y1="0" x2={pos} y2="100"
                    initial={animate ? { strokeDashoffset: 100, strokeDasharray: 100 } : {}}
                    animate={animate ? { strokeDashoffset: 0 } : undefined}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                  />
                </React.Fragment>
              ))}
              {[20, 40, 60, 80].map((x, i) => (
                [20, 40, 60, 80].map((y, j) => (
                  <motion.circle 
                    key={`dot-${i}-${j}`}
                    cx={x} 
                    cy={y} 
                    r="1.5" 
                    fill={color}
                    initial={animate ? { scale: 0 } : { scale: 1 }}
                    animate={animate ? { scale: 1 } : undefined}
                    transition={{ duration: 0.3, delay: (i+j) * 0.1 }}
                  />
                ))
              ))}
            </motion.g>
          </svg>
        );
      case 'organic':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M20,50 Q35,20 50,50 T80,50 Q65,80 50,50 T20,50"
              stroke={color}
              strokeWidth="1.5"
              fill="none"
              initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
              animate={animate ? { 
                pathLength: 1,
                rotate: [0, 5, -5, 0] 
              } : undefined}
              transition={{ 
                pathLength: { duration: 2, repeat: Infinity, repeatType: "loop" },
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="20"
              stroke={color}
              strokeWidth="0.5"
              fill="none"
              initial={animate ? { scale: 0.8 } : { scale: 1 }}
              animate={animate ? { 
                scale: [0.8, 1.1, 0.8],
                opacity: [0.7, 1, 0.7]
              } : undefined}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              stroke={color}
              strokeWidth="0.3"
              fill="none"
              initial={animate ? { scale: 0.8 } : { scale: 1 }}
              animate={animate ? { 
                scale: [0.8, 1.1, 0.8],
                opacity: [0.5, 0.8, 0.5]
              } : undefined}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>
        );
      case 'tech':
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <motion.g
              stroke={color}
              strokeWidth="1"
              fill="none"
            >
              <motion.rect
                x="30" y="30" width="40" height="40"
                rx="5" ry="5"
                initial={animate ? { strokeDashoffset: 200, strokeDasharray: 200 } : {}}
                animate={animate ? { strokeDashoffset: 0 } : undefined}
                transition={{ duration: 1.5 }}
              />
              <motion.path
                d="M35,50 L65,50"
                initial={animate ? { strokeDashoffset: 30, strokeDasharray: 30 } : {}}
                animate={animate ? { strokeDashoffset: 0 } : undefined}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
              <motion.path
                d="M50,35 L50,65"
                initial={animate ? { strokeDashoffset: 30, strokeDasharray: 30 } : {}}
                animate={animate ? { strokeDashoffset: 0 } : undefined}
                transition={{ duration: 0.6, delay: 0.7 }}
              />
              <motion.circle
                cx="50" cy="50" r="2"
                fill={color}
                initial={animate ? { scale: 0 } : {}}
                animate={animate ? { scale: [0, 1, 0.8, 1] } : undefined}
                transition={{ duration: 0.5, delay: 1 }}
              />
              <motion.circle
                cx="50" cy="50" r="15"
                initial={animate ? { opacity: 0 } : {}}
                animate={animate ? { 
                  opacity: [0, 0.5, 0.2],
                  scale: [0.8, 1.1, 0.9]
                } : undefined}
                transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: 1.2 }}
              />
            </motion.g>
          </svg>
        );
      case 'dots':
      default:
        return (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <motion.g fill={color}>
              {Array.from({ length: 5 }).map((_, rowIndex) => (
                Array.from({ length: 5 }).map((_, colIndex) => (
                  <motion.circle
                    key={`dot-${rowIndex}-${colIndex}`}
                    cx={20 + colIndex * 20}
                    cy={20 + rowIndex * 20}
                    r="3"
                    initial={animate ? { scale: 0, opacity: 0 } : {}}
                    animate={animate ? { 
                      scale: [0, 1, 0.8, 1],
                      opacity: 1 
                    } : undefined}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.05 * (rowIndex + colIndex),
                    }}
                  />
                ))
              ))}
            </motion.g>
          </svg>
        );
    }
  };

  return (
    <div className={cn(sizeMap[size], className)}>
      {renderVector()}
    </div>
  );
};

// Collection of tech icons for easy reuse
export const TechIconsCollection: React.FC<{
  className?: string;
  showLabels?: boolean;
  grid?: boolean;
  animations?: boolean;
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
}> = ({
  className,
  showLabels = true,
  grid = true,
  animations = true,
  iconSize = 'md'
}) => {
  const techIcons = [
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-blue-400">
          <path fill="currentColor" d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 001.363 3.578l.101.213-.101.213a23.307 23.307 0 00-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 011.182-3.046A24.752 24.752 0 015.317 8.95zm12.675 7.305l-.133-.469a23.357 23.357 0 00-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 001.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 01-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 00-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 00-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 013.233-.501 24.847 24.847 0 012.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zm9.589 20.362c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 002.421-2.968l.135-.193.234-.02a23.63 23.63 0 003.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 01-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 01-3.234.501 24.674 24.674 0 01-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 00-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 00-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0114.75 7.24zM7.206 22.677A2.38 2.38 0 016 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 002.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 01-2.052-2.545 24.976 24.976 0 01-3.233-.501zm5.984.628c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 01-1.35-2.122 30.354 30.354 0 01-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 011.166-2.228c.414-.749.885-1.446 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 015.033 0l.234.02.134.193a30.006 30.006 0 012.517 4.35l.101.213-.101.213a29.6 29.6 0 01-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 002.196-3.798 28.585 28.585 0 00-2.197-3.798 29.031 29.031 0 00-4.394 0 28.477 28.477 0 00-2.197 3.798 29.114 29.114 0 002.197 3.798z" />
        </svg>
      ),
      animation: 'orbit' as IconAnimation
    },
    {
      name: "Vue",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-green-500">
          <path fill="currentColor" d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78zm-18.24 2h3.6l6.64 11.6 6.64-11.6h3.6L12 21.39z" />
        </svg>
      ),
      animation: 'float' as IconAnimation
    },
    {
      name: "PHP",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-purple-600">
          <path fill="currentColor" d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zm-2.595-1.902h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" />
        </svg>
      ),
      animation: 'bounce' as IconAnimation
    },
    {
      name: "Angular",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-red-500">
          <path fill="currentColor" d="M9.93 12.645h4.134L11.996 7.74M11.996.009L.686 3.988l1.725 14.76 9.585 5.243 9.588-5.238L23.308 3.99 11.996.01zm7.058 18.297h-2.636l-1.42-3.501H8.995l-1.42 3.501H4.937l7.06-15.648 7.057 15.648z" />
        </svg>
      ),
      animation: 'pulse' as IconAnimation
    },
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-green-600">
          <path fill="currentColor" d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076
c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0
L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392
c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021
c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921
c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603
v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993
c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233
c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081
c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833
c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402
c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253
c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
        </svg>
      ),
      animation: 'wave' as IconAnimation
    },
    {
      name: "Python",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#3776AB" d="M11.751,0c-0.964,0.008-1.881,0.085-2.692,0.228C6.891,0.569,6.458,1.16,6.458,2.38v1.7h5.415v0.686H4.098 c-1.537,0-2.271,0.822-2.587,2.347C1.254,8.164,1.238,8.888,1.5,10.052c0.229,0.855,0.724,1.574,2.04,1.574h1.913V9.862 c0-1.613,1.468-3.025,3.088-3.025h5.409c1.359,0,2.492-1.056,2.492-2.359V2.38c0-1.261-1.09-2.186-2.446-2.379 C13.133,0.081,12.888,0.005,11.751,0z M8.761,1.359c0.556,0,1.011,0.464,1.011,1.018c0,0.549-0.453,1.011-1.011,1.011 c-0.553,0-1.011-0.462-1.011-1.011C7.75,1.823,8.208,1.359,8.761,1.359z" />
          <path fill="#FFC331" d="M17.415,4.766v1.675c0,1.68-1.497,3.113-3.088,3.113h-5.409c-1.318,0-2.492,1.183-2.492,2.492v4.666 c0,1.276,1.12,2.013,2.446,2.359c1.603,0.414,3.065,0.493,5.409,0c1.558-0.33,2.492-0.986,2.492-2.359v-1.7h-5.409v-0.686h8.083 c1.316,0,1.791-0.861,2.259-2.347c0.484-1.528,0.461-2.987,0-4.915c-0.33-1.387-0.956-2.347-2.259-2.347H17.415z M14.828,17.131 c0.553,0,1.011,0.462,1.011,1.011c0,0.554-0.456,1.018-1.011,1.018c-0.549,0-1.011-0.464-1.011-1.018 C13.817,17.593,14.279,17.131,14.828,17.131z" />
        </svg>
      ),
      animation: 'spin' as IconAnimation
    },
    {
      name: "HTML5",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-orange-600">
          <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
      ),
      animation: 'flip' as IconAnimation
    },
    {
      name: "CSS3",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500">
          <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z" />
        </svg>
      ),
      animation: 'shake' as IconAnimation
    }
  ];

  // Add lucide-react icons for more variety
  const lucideIcons = [
    {
      name: "GraphQL",
      icon: <BrainCircuit className="w-full h-full" />,
      animation: 'pulse' as IconAnimation
    },
    {
      name: "Web Dev",
      icon: <Code2 className="w-full h-full" />,
      animation: 'float' as IconAnimation
    },
    {
      name: "Mobile Apps",
      icon: <Smartphone className="w-full h-full" />,
      animation: 'wave' as IconAnimation
    },
    {
      name: "UX/UI Design",
      icon: <Figma className="w-full h-full" />,
      animation: 'bounce' as IconAnimation
    }
  ];

  return (
    <div className={cn(
      grid ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6" : "flex flex-wrap justify-center gap-6",
      className
    )}>
      {techIcons.map((tech, index) => (
        <TechIcon
          key={tech.name}
          icon={tech.icon}
          name={showLabels ? tech.name : undefined}
          animation={animations ? tech.animation : 'none'}
          size={iconSize}
          delay={index * 0.1}
          interactive={true}
        />
      ))}
      {lucideIcons.map((tech, index) => (
        <TechIcon
          key={tech.name}
          icon={tech.icon}
          name={showLabels ? tech.name : undefined}
          animation={animations ? tech.animation : 'none'}
          size={iconSize}
          delay={index * 0.1 + 0.5}
          interactive={true}
        />
      ))}
    </div>
  );
};

// Create groups of related tech icons
export const TechStack: React.FC<{
  type: 'frontend' | 'backend' | 'mobile' | 'design' | 'all';
  className?: string;
  showLabels?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animations?: boolean;
}> = ({ type, className, showLabels = true, size = 'md', animations = true }) => {
  // Define icon sets based on stack type
  const getFrontendIcons = () => (
    <>
      <TechIcon 
        icon={
          <svg viewBox="0 0 24 24" className="w-full h-full text-blue-400">
            <path fill="currentColor" d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 001.363 3.578l.101.213-.101.213a23.307 23.307 0 00-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 011.182-3.046A24.752 24.752 0 015.317 8.95zm12.675 7.305l-.133-.469a23.357 23.357 0 00-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 001.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 01-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 00-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 00-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 013.233-.501 24.847 24.847 0 012.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zm9.589 20.362c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 002.421-2.968l.135-.193.234-.02a23.63 23.63 0 003.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 01-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 01-3.234.501 24.674 24.674 0 01-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 00-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 00-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0114.75 7.24zM7.206 22.677A2.38 2.38 0 016 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 002.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 01-2.052-2.545 24.976 24.976 0 01-3.233-.501zm5.984.628c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 01-1.35-2.122 30.354 30.354 0 01-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 011.166-2.228c.414-.749.885-1.446 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 015.033 0l.234.02.134.193a30.006 30.006 0 012.517 4.35l.101.213-.101.213a29.6 29.6 0 01-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 002.196-3.798 28.585 28.585 0 00-2.197-3.798 29.031 29.031 0 00-4.394 0 28.477 28.477 0 00-2.197 3.798 29.114 29.114 0 002.197 3.798z" />
          </svg>
        } 
        name="React"
        animation={animations ? 'orbit' : 'none'} 
        size={size}
        delay={0}
      />
      <TechIcon 
        icon={
          <svg viewBox="0 0 24 24" className="w-full h-full text-green-500">
            <path fill="currentColor" d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78zm-18.24 2h3.6l6.64 11.6 6.64-11.6h3.6L12 21.39z" />
          </svg>
        } 
        name="Vue" 
        animation={animations ? 'float' : 'none'} 
        size={size}
        delay={0.1}
      />
      <TechIcon
        icon={<Code2 className="w-full h-full" />}
        name="JavaScript"
        animation={animations ? 'wave' : 'none'}
        size={size}
        delay={0.2}
      />
      <TechIcon
        icon={
          <svg viewBox="0 0 24 24" className="w-full h-full text-orange-600">
            <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
          </svg>
        }
        name="HTML5"
        animation={animations ? 'flip' : 'none'}
        size={size}
        delay={0.3}
      />
    </>
  );

  const getBackendIcons = () => (
    <>
      <TechIcon
        icon={
          <svg viewBox="0 0 24 24" className="w-full h-full text-purple-600">
            <path fill="currentColor" d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zm-2.595-1.902h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" />
          </svg>
        }
        name="PHP"
        animation={animations ? 'bounce' : 'none'}
        size={size}
        delay={0}
      />
      <TechIcon
        icon={
          <svg viewBox="0 0 24 24" className="w-full h-full text-green-600">
            <path fill="currentColor" d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076
    c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0
    L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392
    c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021
    c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921
    c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603
    v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993
    c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233
    c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081
    c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833
    c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402
    c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253
    c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
          </svg>
        }
        name="Node.js"
        animation={animations ? 'wave' : 'none'}
        size={size}
        delay={0.1}
      />
      <TechIcon
        icon={
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path fill="#3776AB" d="M11.751,0c-0.964,0.008-1.881,0.085-2.692,0.228C6.891,0.569,6.458,1.16,6.458,2.38v1.7h5.415v0.686H4.098 c-1.537,0-2.271,0.822-2.587,2.347C1.254,8.164,1.238,8.888,1.5,10.052c0.229,0.855,0.724,1.574,2.04,1.574h1.913V9.862 c0-1.613,1.468-3.025,3.088-3.025h5.409c1.359,0,2.492-1.056,2.492-2.359V2.38c0-1.261-1.09-2.186-2.446-2.379 C13.133,0.081,12.888,0.005,11.751,0z M8.761,1.359c0.556,0,1.011,0.464,1.011,1.018c0,0.549-0.453,1.011-1.011,1.011 c-0.553,0-1.011-0.462-1.011-1.011C7.75,1.823,8.208,1.359,8.761,1.359z" />
            <path fill="#FFC331" d="M17.415,4.766v1.675c0,1.68-1.497,3.113-3.088,3.113h-5.409c-1.318,0-2.492,1.183-2.492,2.492v4.666 c0,1.276,1.12,2.013,2.446,2.359c1.603,0.414,3.065,0.493,5.409,0c1.558-0.33,2.492-0.986,2.492-2.359v-1.7h-5.409v-0.686h8.083 c1.316,0,1.791-0.861,2.259-2.347c0.484-1.528,0.461-2.987,0-4.915c-0.33-1.387-0.956-2.347-2.259-2.347H17.415z M14.828,17.131 c0.553,0,1.011,0.462,1.011,1.011c0,0.554-0.456,1.018-1.011,1.018c-0.549,0-1.011-0.464-1.011-1.018 C13.817,17.593,14.279,17.131,14.828,17.131z" />
          </svg>
        }
        name="Python"
        animation={animations ? 'spin' : 'none'}
        size={size}
        delay={0.2}
      />
      <TechIcon
        icon={<Database className="w-full h-full" />}
        name="Database"
        animation={animations ? 'pulse' : 'none'}
        size={size}
        delay={0.3}
      />
    </>
  );

  const getMobileIcons = () => (
    <>
      <TechIcon
        icon={<Smartphone className="w-full h-full" />}
        name="Mobile"
        animation={animations ? 'float' : 'none'}
        size={size}
        delay={0}
      />
      <TechIcon
        icon={
          <svg viewBox="0 0 24 24" className="w-full h-full text-blue-400">
            <path fill="currentColor" d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 001.363 3.578l.101.213-.101.213a23.307 23.307 0 00-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 011.182-3.046A24.752 24.752 0 015.317 8.95zm12.675 7.305l-.133-.469a23.357 23.357 0 00-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 001.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 01-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 00-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 00-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 013.233-.501 24.847 24.847 0 012.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zm9.589 20.362c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 002.421-2.968l.135-.193.234-.02a23.63 23.63 0 003.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 01-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 01-3.234.501 24.674 24.674 0 01-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 00-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 00-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0114.75 7.24zM7.206 22.677A2.38 2.38 0 016 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 002.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 01-2.052-2.545 24.976 24.976 0 01-3.233-.501zm5.984.628c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 01-1.35-2.122 30.354 30.354 0 01-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 011.166-2.228c.414-.749.885-1.446 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 015.033 0l.234.02.134.193a30.006 30.006 0 012.517 4.35l.101.213-.101.213a29.6 29.6 0 01-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 002.196-3.798 28.585 28.585 0 00-2.197-3.798 29.031 29.031 0 00-4.394 0 28.477 28.477 0 00-2.197 3.798 29.114 29.114 0 002.197 3.798z" />
          </svg>
        } 
        name="React Native"
        animation={animations ? 'orbit' : 'none'} 
        size={size}
        delay={0.1}
      />
      <TechIcon
        icon={<MonitorSmartphone className="w-full h-full" />}
        name="Responsive"
        animation={animations ? 'wave' : 'none'}
        size={size}
        delay={0.2}
      />
      <TechIcon
        icon={<Globe className="w-full h-full" />}
        name="PWA"
        animation={animations ? 'bounce' : 'none'}
        size={size}
        delay={0.3}
      />
    </>
  );

  const getDesignIcons = () => (
    <>
      <TechIcon
        icon={<Figma className="w-full h-full" />}
        name="Figma"
        animation={animations ? 'float' : 'none'}
        size={size}
        delay={0}
      />
      <TechIcon
        icon={<Palette className="w-full h-full" />}
        name="UI/UX"
        animation={animations ? 'pulse' : 'none'}
        size={size}
        delay={0.1}
      />
      <TechIcon
        icon={
          <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500">
            <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z" />
          </svg>
        }
        name="CSS3"
        animation={animations ? 'shake' : 'none'}
        size={size}
        delay={0.2}
      />
      <TechIcon
        icon={<Command className="w-full h-full" />}
        name="Design Systems"
        animation={animations ? 'wave' : 'none'}
        size={size}
        delay={0.3}
      />
    </>
  );

  // Return the appropriate icon set based on type
  return (
    <div className={cn("flex flex-wrap justify-center gap-6", className)}>
      {type === 'frontend' && getFrontendIcons()}
      {type === 'backend' && getBackendIcons()}
      {type === 'mobile' && getMobileIcons()}
      {type === 'design' && getDesignIcons()}
      {type === 'all' && (
        <>
          {getFrontendIcons()}
          {getBackendIcons()}
          {getMobileIcons()}
          {getDesignIcons()}
        </>
      )}
    </div>
  );
};

export default {
  TechIcon,
  TechIconsCollection,
  VectorDecoration,
  TechStack
};
