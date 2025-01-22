import Information from '@/components/information';
import { InstallPrompt } from '@/components/installPrompt';

export default function Home() {
  return (
    <main className="w-[70%] content- flex flex-col justify-center items-center min-h-[calc(100vh_-_10rem)] md:min-h-full">
      <InstallPrompt />
      <Information />
    </main>
  );
}
