import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className=" w-full h-28 bg-red-300 flex justify-center">
      <div className=" w-[95%] bg-blue-300 h-full flex justify-between items-center">
        <div className=" flex">
          <div className=" mr-16 font-black text-xl">Watch.</div>
          <div>
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
          <span className="mx-5 font-light uppercase text-sm cursor-pointer">
            Log In
          </span>
          <div className="mx-5 cursor-pointer">
            <HiOutlineShoppingBag />
          </div>
          <div className=" mx-5 font-light uppercase text-sm cursor-pointer">
            <CiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
