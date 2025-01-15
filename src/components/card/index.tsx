'use client';

import { Beer } from '@/types/beer';
import Image from 'next/image';

type CardProps = Beer;

/**
 * TODO: 스타일 추가 및 src 404 에러
 *
 * @param [prop] CardProps 속성
 * @returns 카드 컴포넌트
 */
export default function Card({ ...prop }: CardProps) {
  const { image, name, price, rating } = prop;

  return (
    <div
      className="max-w-[250px] max-h-[350px] flex flex-col justify-center 
      items-center rounded-lg bg-card-defaultBackground hover:bg-card-hoverBackground 
      border border-card-defaultBackground hover:border hover:border-card-hoverBorder"
    >
      <Image
        src={image}
        alt="맥주 이미지"
        width={100}
        height={140}
        className="my-3"
      />

      <div className="flex flex-col justify-center items-center mx-2">
        <p className="font-bold text-center">{name}</p>
        <div className="my-4">
          <p>Price: {price}</p>
          <p>Average: {rating.average.toFixed(2)}</p>
          <p>Reviews: {rating.reviews}</p>
        </div>
      </div>
    </div>
  );
}
