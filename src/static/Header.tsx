import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className=" w-full h-28 -300 flex justify-center ">
      <div className=" w-[95%]  h-full flex justify-between items-center">
        <div className=" hidden tablet:block text-3xl">
          <FaBars />
        </div>
        <div className=" flex  ">
          <div className=" mr-16 font-black text-xl tablet:mr-0">Watch.</div>
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
        <div className=" flex items-center">
          <span className=" tablet:mx-0 mx-5 font-light uppercase text-sm cursor-pointer tablet:hidden">
            Log In
          </span>
          <div className="mx-5 cursor-pointer text-3xl tablet:mx-0">
            <HiOutlineShoppingBag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
