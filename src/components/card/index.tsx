'use client';

import { Beer } from '@/types/beer';
import Image from 'next/image';
import { useState } from 'react';

const DEFAULT_BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==';

type CardProps = Beer;

/**
 *
 * @param [prop] CardProps 속성
 * @returns 카드 컴포넌트
 */
export default function Card({ ...prop }: CardProps) {
  const { image, name, price, rating } = prop;

  const [imageSrc, setImageSrc] = useState(image);

  const handleError = () => setImageSrc('/defaultBeer.jpg');

  return (
    <div
      className="max-w-[250px] max-h-[350px] flex flex-col justify-center 
      items-center rounded-lg bg-card-defaultBackground hover:bg-card-hoverBackground 
      border border-card-defaultBackground hover:border hover:border-card-hoverBorder"
    >
      <div className="min-h-[170px] flex justify-center justify-items-center">
        <Image
          src={imageSrc}
          alt="맥주 이미지"
          width={100}
          height={140}
          className="object-contain"
          placeholder="blur"
          blurDataURL={DEFAULT_BLUR_DATA_URL}
          onError={handleError}
        />
      </div>
      <div className="flex flex-col justify-center items-center mx-2">
        <p className="font-bold text-center">{name}</p>
        <div className="my-4">
          <p>Price: {price}</p>
          <p>
            Average: {rating && rating.average ? rating.average.toFixed(2) : 0}
          </p>
          <p>Reviews: {rating && rating.reviews ? rating.reviews : 0}</p>
        </div>
      </div>
    </div>
  );
}
