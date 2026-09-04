"use client";

import { useState } from "react";
import Image from "next/image";

interface SafeProductImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

const FALLBACK_PUMP_IMAGE = "https://benuagreen.com/storage/img/produk/1769003114_6970d86a03fe5.png";

export function SafeProductImage({
  src,
  alt,
  className = "object-contain",
  fill = true,
  priority = false,
}: SafeProductImageProps) {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK_PUMP_IMAGE);
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      src={hasError ? FALLBACK_PUMP_IMAGE : imgSrc}
      alt={alt}
      fill={fill}
      priority={priority}
      className={className}
      unoptimized
      onError={() => {
        if (!hasError) {
          setHasError(true);
          setImgSrc(FALLBACK_PUMP_IMAGE);
        }
      }}
    />
  );
}
