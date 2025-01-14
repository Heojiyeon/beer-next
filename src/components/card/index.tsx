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
    <div>
      <Image src={image} alt="맥주 이미지" width={100} height={140} />

      <div>
        <p>{name}</p>
        <div>
          <p>{price}</p>
          <p>{rating.average}</p>
          <p>{rating.reviews}</p>
        </div>
      </div>
    </div>
  );
}
