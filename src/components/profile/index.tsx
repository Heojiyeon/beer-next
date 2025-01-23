import Image from 'next/image';
import profile from '@public/profile.png';
import Link from 'next/link';

/**
 * @returns 프로필 컴포넌트
 */
export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* 이미지 */}
      <Image
        src={profile}
        alt="profile image"
        width={180}
        height={180}
        placeholder="blur"
        className="rounded-full place-self-center"
      />
      <div className="lg:text-[1rem] text-[0.8rem] py-10">
        {/* 이름 및 정보 */}
        <div className="flex flex-col items-center justify-center mb-6">
          <p className="font-bold">HEO JI YEON (ZENA)</p>
          <p>Frontend Developer</p>
        </div>
        {/* 관련 링크 */}
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold">More Information</p>
          <p>
            <Link href="https://github.com/Heojiyeon" target="_blank">
              Github
            </Link>
          </p>
          <p>
            <Link href="https://velog.io/@jiy7107/posts" target="_blank">
              Velog
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
