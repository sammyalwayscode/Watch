import { FaAngleRight } from "react-icons/fa6";
import DetailInfo from "../components/Shop/DetailInfo";

const ShopDetails = () => {
  return (
    <div className=" w-full flex justify-center items-center mb-32">
      <div className=" w-[90%] flex flex-col items-center ">
        <section className=" flex flex-col items-center my-16">
          <h1 className=" font-extrabold text-4xl text-center phone:text-2xl">
            Classic Brown Medal
          </h1>
          <div className=" flex items-center text-xs phone:text-[10px] font-medium text-gray-400 mt-5">
            Home{" "}
            <span className=" mx-1">
              <FaAngleRight />
            </span>{" "}
            <span className=" text-gray-400">Shop</span>
            <span className=" mx-1">
              <FaAngleRight />
            </span>{" "}
            <span className=" text-gray-400">Accessories</span>
            <span className=" mx-1">
              <FaAngleRight />
            </span>{" "}
            <span className=" text-yellow-700">Classic Brown Medal</span>
          </div>
        </section>
        <section>
          <DetailInfo />
        </section>
      </div>
    </div>
  );
};

export default ShopDetails;
