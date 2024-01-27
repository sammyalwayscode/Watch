import editor1 from "../../assets/editor1.png";
import editorHover1 from "../../assets/editorHover.png";
import { HiArrowLongDown } from "react-icons/hi2";

const productCollections = [
  {
    watchImg: editor1,
    watchImgHover: editorHover1,
    watchTitle: "Rose White Gold Leather",
    watchPrice: 165.99,
  },
  {
    watchImg: editor1,
    watchImgHover: editorHover1,
    watchTitle: "Rose White Gold Leather",
    watchPrice: 165.99,
  },
  {
    watchImg: editor1,
    watchImgHover: editorHover1,
    watchTitle: "Rose White Gold Leather",
    watchPrice: 165.99,
  },
];

const Products = () => {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className=" flex flex-col items-center">
        <h2
          style={{
            fontFamily: "Oswald",
          }}
          className=" font-normal text-4xl uppercase tracking-[15px] mb-16 text-yellow-700"
        >
          Our Products
        </h2>
        <section className=" flex font-semibold text-gray-400 cursor-pointer text-sm ">
          <nav className=" mx-5 text-gray-500">All</nav>
          <nav className=" mx-5">Accessories</nav>
          <nav className=" mx-5">Men</nav>
          <nav className=" mx-5">Women</nav>
        </section>

        <section className=" flex my-16">
          {productCollections?.map((props, i) => (
            <div
              key={i}
              className=" flex text-center flex-col items-center mx-12"
            >
              <div className=" w-32 mb-3">
                <img className=" w-full" src={props.watchImg} alt="" />
              </div>
              <p className=" capitalize text-base font-bold">
                {props.watchTitle}
              </p>
              <p className=" text-gray-400">${props.watchPrice}</p>
            </div>
          ))}
        </section>

        <section className=" flex justify-center flex-col items-center">
          <div className=" text-4xl text-yellow-700 ">
            <HiArrowLongDown />
          </div>
          <p className=" my-3 font-semibold text-sm">BROWSE ALL COLLECTION</p>
        </section>
      </div>
    </div>
  );
};

export default Products;
