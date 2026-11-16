'use client';

import React, {useState} from 'react';
import Image, {type StaticImageData} from 'next/image';
import {ImageOff} from 'lucide-react';

interface EditorialImageProps {
  src: StaticImageData | string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  fallbackTitle?: string;
}

export default function EditorialImage({
  src,
  alt,
  fill = false,
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  className = '',
  fallbackTitle,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1C1B18] via-[#141416] to-[#0A0A0B] text-[#C8B69E] p-6 text-center"
        role="img"
        aria-label={alt}
      >
        <ImageOff className="w-6 h-6 mb-3 opacity-60" strokeWidth={1.5} />
        <span className="font-display text-lg tracking-tight text-[#F3EFE8]">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
