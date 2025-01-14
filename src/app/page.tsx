import Image from 'next/image';
import profile from '../../public/profile.png';

export default function Home() {
  return (
    <div>
      <main>
        Intro page
        <Image src={profile} alt="profile image" width={300} height={300} />
      </main>
    </div>
  );
}
