import NavBar from '../navBar';

export default function Header() {
  return (
    <div className="p-[1rem] md:p-[3rem] w-full flex justify-between">
      <div className="text-[24px] md:text-[30px] flex-wrap">Beer Next</div>
      <div className="w-[30%] content-center hidden md:block">
        <NavBar
          ulStyle={'flex w-[30%] md:w-full h-full justify-around items-center'}
          liStyle={'text-[20px] flex-1 flex justify-center items-center h-full'}
        />
      </div>
    </div>
  );
}
