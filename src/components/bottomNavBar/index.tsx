import NavBar from '../navBar';

/**
 * 모바일 사이즈일 경우 노출
 * @returns bottom nav bar 컴포넌트
 */
export default function BottomNavBar() {
  return (
    <NavBar
      ulStyle={
        'md:hidden fixed bottom-0 w-full bg-white h-[5rem] flex justify-around items-center border rounded-t-3xl shadow-inner'
      }
      liStyle={'text-[20px]'}
    />
  );
}
