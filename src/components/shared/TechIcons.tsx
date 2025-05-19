
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card, CardContent } from "@/components/ui/card";

type IconAnimation = 'float' | 'wave' | 'pulse' | 'orbit' | 'bounce' | 'spin';

interface TechIconProps {
  icon: React.ReactNode;
  name?: string;
  animation?: IconAnimation | 'none';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
  delay?: number;
  fontStyle?: 'default' | 'cursive' | 'calligraphy' | 'decorative' | 'marathi' | 'hindi' | 'sanskrit' | 'playfair' | 'montserrat' | 'quicksand' | 'abril' | 'cormorant';
  cardStyle?: 'default' | 'gradient' | 'glass' | 'minimal' | 'accent' | 'outline';
  description?: string;
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
  }
};

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24"
};

const fontClasses = {
  default: "font-sans",
  cursive: "font-cursive",
  calligraphy: "font-calligraphy",
  decorative: "font-decorative",
  marathi: "font-marathi",
  hindi: "font-hindi",
  sanskrit: "font-sanskrit",
  playfair: "text-playfair",
  montserrat: "text-montserrat",
  quicksand: "text-quicksand",
  abril: "text-abril",
  cormorant: "text-cormorant"
};

const cardStyleClasses = {
  default: "bg-card border shadow-sm",
  gradient: "designer-card-gradient",
  glass: "designer-card-glass",
  minimal: "designer-card-minimal",
  accent: "designer-card-accent",
  outline: "bg-transparent border-2 border-primary/20 hover:border-primary/50"
};

export const TechIcon: React.FC<TechIconProps> = ({
  icon,
  name,
  animation = 'float',
  size = 'md',
  color,
  className,
  delay = 0,
  fontStyle = 'default',
  cardStyle = 'default',
  description
}) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden",
        cardStyleClasses[cardStyle],
        className
      )}
    >
      <CardContent className="p-6 flex flex-col items-center">
        <motion.div
          className={cn(
            "flex items-center justify-center rounded-full p-2",
            sizeClasses[size],
            color || "text-foreground"
          )}
          animate={animation !== 'none' ? animationVariants[animation] : undefined}
          style={{ originX: 0.5, originY: 0.5 }}
          transition={{
            delay,
            ...animationVariants[animation === 'none' ? 'float' : animation].transition
          }}
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
        >
          {icon}
        </motion.div>
        {name && (
          <span className={cn("mt-3 font-medium", fontClasses[fontStyle])}>
            {name}
          </span>
        )}
        {description && (
          <p className="mt-2 text-xs text-center text-muted-foreground">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

// Collection of tech icons for easy reuse
export const TechIconsCollection: React.FC<{
  className?: string;
  showLabels?: boolean;
  grid?: boolean;
  animations?: boolean;
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
  fontStyle?: 'default' | 'cursive' | 'calligraphy' | 'decorative' | 'marathi' | 'hindi' | 'sanskrit' | 'playfair' | 'montserrat' | 'quicksand' | 'abril' | 'cormorant';
  cardStyle?: 'default' | 'gradient' | 'glass' | 'minimal' | 'accent' | 'outline';
  showDescriptions?: boolean;
}> = ({
  className,
  showLabels = true,
  grid = true,
  animations = true,
  iconSize = 'md',
  fontStyle = 'default',
  cardStyle = 'default',
  showDescriptions = false
}) => {
  const techIcons = [
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-blue-400">
          <path fill="currentColor" d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 001.363 3.578l.101.213-.101.213a23.307 23.307 0 00-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 011.182-3.046A24.752 24.752 0 015.317 8.95zm12.675 7.305l-.133-.469a23.357 23.357 0 00-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 001.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 01-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 00-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 00-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 013.233-.501 24.847 24.847 0 012.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zm9.589 20.362c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 002.421-2.968l.135-.193.234-.02a23.63 23.63 0 003.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 01-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 01-3.234.501 24.674 24.674 0 01-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 00-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 00-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0114.75 7.24zM7.206 22.677A2.38 2.38 0 016 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 002.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 01-2.052-2.545 24.976 24.976 0 01-3.233-.501zm5.984.628c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 01-1.35-2.122 30.354 30.354 0 01-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 011.166-2.228c.414-.749.885-1.446 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 015.033 0l.234.02.134.193a30.006 30.006 0 012.517 4.35l.101.213-.101.213a29.6 29.6 0 01-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 002.196-3.798 28.585 28.585 0 00-2.197-3.798 29.031 29.031 0 00-4.394 0 28.477 28.477 0 00-2.197 3.798 29.114 29.114 0 002.197 3.798z" />
        </svg>
      ),
      animation: 'orbit' as IconAnimation,
      description: "A JavaScript library for building user interfaces with component-based architecture"
    },
    {
      name: "Vue",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-green-500">
          <path fill="currentColor" d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78zm-18.24 2h3.6l6.64 11.6 6.64-11.6h3.6L12 21.39z" />
        </svg>
      ),
      animation: 'float' as IconAnimation,
      description: "Progressive JavaScript framework for building UIs with an incrementally adoptable architecture"
    },
    {
      name: "Angular",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-red-500">
          <path fill="currentColor" d="M9.93 12.645h4.134L11.996 7.74M11.996.009L.686 3.988l1.725 14.76 9.585 5.243 9.588-5.238L23.308 3.99 11.996.01zm7.058 18.297h-2.636l-1.42-3.501H8.995l-1.42 3.501H4.937l7.06-15.648 7.057 15.648z" />
        </svg>
      ),
      animation: 'pulse' as IconAnimation,
      description: "Platform for building mobile & desktop web applications with TypeScript-based programming"
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
      animation: 'wave' as IconAnimation,
      description: "JavaScript runtime built on Chrome's V8 engine for server-side applications"
    },
    {
      name: "PHP",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-purple-600">
          <path fill="currentColor" d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zm-2.595-1.902h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" />
        </svg>
      ),
      animation: 'bounce' as IconAnimation,
      description: "Server-side scripting language designed for web development"
    },
    {
      name: "Python",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#3776AB" d="M11.751,0c-0.964,0.008-1.881,0.085-2.692,0.228C6.891,0.569,6.458,1.16,6.458,2.38v1.7h5.415v0.686H4.098 c-1.537,0-2.271,0.822-2.587,2.347C1.254,8.164,1.238,8.888,1.5,10.052c0.229,0.855,0.724,1.574,2.04,1.574h1.913V9.862 c0-1.613,1.468-3.025,3.088-3.025h5.409c1.359,0,2.492-1.056,2.492-2.359V2.38c0-1.261-1.09-2.186-2.446-2.379 C13.133,0.081,12.888,0.005,11.751,0z M8.761,1.359c0.556,0,1.011,0.464,1.011,1.018c0,0.549-0.453,1.011-1.011,1.011 c-0.553,0-1.011-0.462-1.011-1.011C7.75,1.823,8.208,1.359,8.761,1.359z" />
          <path fill="#FFC331" d="M17.415,4.766v1.675c0,1.68-1.497,3.113-3.088,3.113h-5.409c-1.318,0-2.492,1.183-2.492,2.492v4.666 c0,1.276,1.12,2.013,2.446,2.359c1.603,0.414,3.065,0.493,5.409,0c1.558-0.33,2.492-0.986,2.492-2.359v-1.7h-5.409v-0.686h8.083 c1.316,0,1.791-0.861,2.259-2.347c0.484-1.528,0.461-2.987,0-4.915c-0.33-1.387-0.956-2.347-2.259-2.347H17.415z M14.828,17.131 c0.553,0,1.011,0.462,1.011,1.011c0,0.554-0.456,1.018-1.011,1.018c-0.549,0-1.011-0.464-1.011-1.018 C13.817,17.593,14.279,17.131,14.828,17.131z" />
        </svg>
      ),
      animation: 'spin' as IconAnimation,
      description: "High-level programming language with dynamic semantics and readability focus"
    },
    {
      name: "Typescript",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-blue-600">
          <path fill="currentColor" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
        </svg>
      ),
      animation: 'float' as IconAnimation,
      description: "Typed JavaScript that compiles to plain JavaScript for type safety"
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full text-cyan-500">
          <path fill="currentColor" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      ),
      animation: 'pulse' as IconAnimation,
      description: "Utility-first CSS framework for rapid UI development through composable classes"
    },
    {
      name: "Figma",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#F24E1E" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
          <path fill="#FF7262" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" />
          <path fill="#1ABCFE" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" />
          <path fill="#0ACF83" d="M16 24c2.208 0 4-1.792 4-4s-1.792-4-4-4h-4v4c0 2.208 1.792 4 4 4z" />
          <path fill="#A259FF" d="M20 12c0-2.208-1.792-4-4-4h-4v8h4c2.208 0 4-1.792 4-4z" />
        </svg>
      ),
      animation: 'bounce' as IconAnimation,
      description: "Collaborative web application for interface design and prototyping"
    },
    {
      name: "UX/UI Design",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-pink-500">
          <path fill="currentColor" d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M12,19A7,7 0 0,1 5,12A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19Z" />
        </svg>
      ),
      animation: 'orbit' as IconAnimation,
      description: "User experience and interface design for intuitive digital products"
    },
    {
      name: "Typography",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-yellow-600">
          <path fill="currentColor" d="M9.93,13.5h4.14L12,7.98L9.93,13.5z M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M15.95,18.5l-1.14-3H9.17l-1.12,3H5.96l5.11-13h1.86l5.11,13H15.95z" />
        </svg>
      ),
      animation: 'float' as IconAnimation,
      description: "Art of arranging type for effective visual communication"
    },
    {
      name: "Motion Design",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-green-500">
          <path fill="currentColor" d="M4,2A2,2 0 0,0 2,4V14H4V4H14V2H4M8,6A2,2 0 0,0 6,8V18H8V8H18V6H8M20,12V20H12V12H20M20,10H12A2,2 0 0,0 10,12V20A2,2 0 0,0 12,22H20A2,2 0 0,0 22,20V12A2,2 0 0,0 20,10M14,13V19L19,16L14,13Z" />
        </svg>
      ),
      animation: 'wave' as IconAnimation,
      description: "Creating animated visual elements that enhance user experience"
    }
  ];

  return (
    <div className={cn(
      grid ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" : "flex flex-wrap justify-center gap-6",
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
          fontStyle={fontStyle}
          cardStyle={cardStyle}
          description={showDescriptions ? tech.description : undefined}
        />
      ))}
    </div>
  );
};

export default {
  TechIcon,
  TechIconsCollection
};
