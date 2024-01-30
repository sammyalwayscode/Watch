import { FaAngleRight } from "react-icons/fa6";
import ProductCard from "../components/Shop/ProductCard";

const Shop = () => {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className=" w-[90%] flex flex-col items-center ">
        <section className=" flex flex-col items-center my-24">
          <h1 className=" font-extrabold text-4xl">Shop</h1>
          <div className=" flex items-center text-xs font-medium text-gray-400 mt-5">
            Home{" "}
            <span className=" mx-1">
              <FaAngleRight />
            </span>{" "}
            <span className=" text-yellow-700">Shop</span>
          </div>
        </section>
        <section className=" flex font-medium  text-gray-400 cursor-pointer text-xs uppercase mt-16 mb-36">
          <nav className=" mx-5 text-gray-500">All</nav>
          <nav className=" mx-5">Accessories</nav>
          <nav className=" mx-5">Men</nav>
          <nav className=" mx-5">Women</nav>
        </section>
        <section>
          <ProductCard />
        </section>
      </div>
    </div>
  );
};

export default Shop;
