import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className=" w-full h-28 -300 flex justify-center ">
      <div className=" w-[95%]  h-full flex justify-between items-center">
        <div className=" flex ">
          <div className=" mr-16 font-black text-xl">Watch.</div>
          <div className=" tablet:hidden">
            <span className=" mx-5 font-light uppercase text-sm cursor-pointer">
              Home
            </span>
            <span className=" mx-5 font-light uppercase text-sm cursor-pointer">
              Shop
            </span>
            <span className=" mx-5 font-light uppercase text-sm cursor-pointer">
              Blog
            </span>
            <span className=" mx-5 font-light uppercase text-sm cursor-pointer">
              About
            </span>
            <span className=" mx-5 font-light uppercase text-sm cursor-pointer">
              Contact
            </span>
          </div>
        </div>
        <div className=" flex">
          <span className=" tablet:m-0 mx-5 font-light uppercase text-sm cursor-pointer">
            Log In
          </span>
          <div className="mx-5 cursor-pointer">
            <HiOutlineShoppingBag />
          </div>
          <div className=" tablet:hidden mx-5 font-light uppercase text-sm cursor-pointer">
            <CiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
