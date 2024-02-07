import { TiMinus, TiPlus } from "react-icons/ti";

const DetailInfo = () => {
  return (
    <div>
      <div className=" flex items-center">
        <section className=" h-[500px] w-[500px] bg-gray-200 mr-32">
          <img src="" alt="" />
        </section>
        <section className=" mr-32">
          <nav className=" font-bold text-xs">Back To Home</nav>
          <div className=" text-sm my-7">
            <span className=" text-black font-bold">Category:</span>{" "}
            <span className=" text-gray-400 font-semibold">Accessories</span>
          </div>
          <main className=" mb-6">
            <h2 className=" font-extrabold text-3xl mb-3">
              Classic Brown Medal
            </h2>
            <b className=" text-red-700">$118.99</b>
          </main>
          <main className=" text-sm font-semibold text-[#999999]">
            <p className=" my-4">
              Wow it's a price and quality combo you can't turn down
            </p>
            <ul className="list-disc list-inside">
              <li>Polycarbonate</li>
              <li>Wrapped fit and double rivets</li>
              <li>100% percent UV400 protection</li>
              <li>Super dark lens</li>
              <li>Quality construction</li>
              <li>Comes with a soft micro - fiber bag</li>
            </ul>
          </main>
          <hr className=" my-10" />
          <main className=" flex">
            <div className=" w-28 h-10 bg-[#F7F7F7] rounded-full flex items-center justify-center border border-[#999999] mr-4">
              <span className=" mx-3 text-[#999999]">
                <TiMinus />
              </span>
              <span className=" mx-3">1</span>
              <span className=" mx-3 text-[#999999]">
                <TiPlus />
              </span>
            </div>
            <button className=" h-10 w-32 bg-yellow-700 rounded-full text-white font-semibold text-xs">
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
