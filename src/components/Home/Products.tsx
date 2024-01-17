import editor1 from "../../assets/editor1.png";
import editorHover1 from "../../assets/editorHover.png";

const productCollections = [
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
          className=" font-normal text-4xl uppercase tracking-[15px] mb-24 text-yellow-700"
        >
          Our Products
        </h2>
        <section className=" flex font-semibold text-gray-400 cursor-pointer">
          <nav className=" mx-10">All</nav>
          <nav className=" mx-10">Accessories</nav>
          <nav className=" mx-10">Men</nav>
          <nav className=" mx-10">Women</nav>
        </section>

        <section className=" flex mb-16">
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
      </div>
    </div>
  );
};

export default Products;
