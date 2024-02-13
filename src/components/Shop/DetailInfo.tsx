import { TiMinus, TiPlus } from "react-icons/ti";

const DetailInfo = () => {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className=" w-[90%]  flex justify-center items-center tablet:flex-wrap">
        <section className=" h-[500px] w-[500px] laptopSmall:h-[500px] laptopSmall:w-[450px] bg-gray-200 mr-32 laptopSmall:mr-10  tablet:m-0 tablet:w-screen phone:h-[400px] ">
          <img src="" alt="" />
        </section>
        <section className=" tablet:my-10 tablet:flex tablet:flex-col tablet:justify-center tablet:items-center tablet:w-full   ">
          <nav className=" font-bold text-xs">Back To Home</nav>
          <div className=" text-sm my-7">
            <span className=" text-black font-bold">Category:</span>{" "}
            <span className=" text-gray-400 font-semibold">Accessories</span>
          </div>
          <main className=" mb-6 tablet:flex tablet:flex-col tablet:items-center">
            <h2 className=" font-extrabold text-3xl mb-3 tablet:text-center phone:text-2xl">
              Classic Brown Medal
            </h2>
            <b className=" text-red-700">$118.99</b>
          </main>
          <main className=" text-sm font-semibold text-[#999999] tablet:text-center">
            <p className=" my-4 ">
              Wow it's a price and quality combo you can't turn down
            </p>
            <ul className="list-disc list-inside ">
              <li>Polycarbonate</li>
              <li>Wrapped fit and double rivets</li>
              <li>100% percent UV400 protection</li>
              <li>Super dark lens</li>
              <li>Quality construction</li>
              <li>Comes with a soft micro - fiber bag</li>
            </ul>
          </main>
          <hr className=" my-10 tablet:my-5" />
          <main className=" flex mobile:flex-col ">
            <div className=" w-28 h-10 tablet:w-52 bg-[#F7F7F7] rounded-full flex items-center justify-center border border-[#999999] mr-4 mobile:w-[300px] mobile:mr-0 mobile:my-3">
              <span className=" mx-3 tablet:mx-5 text-[#999999]">
                <TiMinus />
              </span>
              <span className=" mx-3 tablet:mx-5">1</span>
              <span className=" mx-3 tablet:mx-5 text-[#999999]">
                <TiPlus />
              </span>
            </div>
            <button className=" h-10 w-32 tablet:w-52 bg-yellow-700 rounded-full text-white font-semibold text-xs mobile:w-full">
              {" "}
              + Add To Cart
            </button>
          </main>
        </section>
      </div>
    </div>
  );
};

export default DetailInfo;
