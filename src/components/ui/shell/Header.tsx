// components/ui/Header.tsx
import Text from '@/components/ui/Text';
import { Group, Image } from '@mantine/core';
import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

import headerLogo from '/mwss-logo.svg';

type HeaderProps = {
  textSize?: number;
  textWeight?: number;
  textColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
  gradientDeg?: number;
  groupClassName?: string;
  logoSize?: number;
  headerText?: string | string[];
  position?: 'center' | 'top-left';
  style?: CSSProperties;
  className?: string;
};

function Header({
  textSize = 40,
  textWeight = 800,
  textColor,
  gradientFrom = '#002161',
  gradientTo = '#0044C7',
  gradientDeg = 67,
  groupClassName = 'p-6 bg-white',
  logoSize = 60,
  headerText = 'MWSS - CORPORATE OFFICE',
  position = 'center',
  className = '',
  style = {},
}: HeaderProps) {
  const navigate = useNavigate();
  const monitor = window.location.pathname.startsWith('/');

  const logoClick = () => {
    if (monitor) {
      navigate('/landing');
    }
  };

  const renderText = () => {
    if (Array.isArray(headerText)) {
      return headerText.map((line, index) => <div key={index}>{line}</div>);
    }
    return headerText
      .split('\n')
      .map((line, index) => <div key={index}>{line}</div>);
  };

  // Create a wrapper div 
  return (
    <div
      style={{
        position: 'absolute',
        ...(position === 'center'
          ? {
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }
          : {
              top: '10%',
              left: '5%',
              transform: 'translate(0, 0)',
            }),
        transition: 'all 0.4s ease-in-out',
        ...style,
      }}
      className={`z-10 ${className}`} 
    >
      <Group h='100%' className={groupClassName} gap='lg'>
        <Image
          src={headerLogo}
          alt='MWSS Logo'
          w={logoSize}
          h={logoSize}
          onClick={logoClick}
        />

        {textColor ? (
          <Text
            fz={textSize}
            lh={1.2}
            fw={textWeight}
            c={textColor}
            className='whitespace-pre-line'
          >
            {renderText()}
          </Text>
        ) : (
          <Text
            fz={textSize}
            fw={textWeight}
            variant='gradient'
            gradient={{ from: gradientFrom, to: gradientTo, deg: gradientDeg }}
            className='whitespace-pre-line'
          >
            {renderText()}
          </Text>
        )}
      </Group>
    </div>
  );
}

export default Header;
