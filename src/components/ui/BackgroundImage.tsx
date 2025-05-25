import { PropsWithChildren } from 'react';

interface CustomBackgroundImageProps extends PropsWithChildren {
  src?: string;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * BackgroundImage component renders a customizable background image using a div.
 *
 * @param {CustomBackgroundImageProps} props - Properties to customize the background image.
 * @returns {JSX.Element} A styled background image component.
 */
function BackgroundImage({
  src = '/background.png',
  children,
  style,
  className = '',
}: CustomBackgroundImageProps) {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url('${src}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default BackgroundImage;
