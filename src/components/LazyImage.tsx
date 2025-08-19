import React, { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  placeholderSrc: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, placeholderSrc, className }) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  const imageStyle: React.CSSProperties = {
    transition: 'opacity 0.3s ease-in-out',
    opacity: isLoading ? 0.7 : 1,
  };

  return <img src={imageSrc} alt={alt} style={imageStyle} className={className} />;
};

export default LazyImage;