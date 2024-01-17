import { GrSend } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { PiUsersBold } from "react-icons/pi";

const WhyChooseUS = () => {
  return (
    <div className=" w-full flex justify-center items-center mb-28">
      <div className=" w-[95%] bg-yellow-700 min-h-[110vh] flex flex-col items-center">
        <section className=" w-[900px] h-[495px] bg-gray-300 -mt-60 mb-36">
          <img src="" alt="Choose us" />
        </section>
        <section className="  flex flex-col items-center">
          <div className=" w-[700px] text-center mb-16">
            <h2
              style={{
                fontFamily: "Oswald",
              }}
              className=" uppercase text-4xl tracking-[15px] text-white mb-9"
            >
              Why Choose Us
            </h2>
            <p className=" text-sm text-gray-300 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              eu quam ac nisl iaculis feugiat at at loirei lmetus. Ulmi Donec
              lacus neque, convallis ut ex ac, venenatis pharetra urna.
            </p>
          </div>

          <main className=" flex">
            <div className=" flex items-center mx-12">
              <div className=" text-white text-3xl mr-4">
                <GrSend />
              </div>
              <div>
                <p className=" font-semibold text-white text-base">
                  Free Shipping
                </p>
                <div className=" text-sm text-gray-300 -mt-[2px]">
                  Order over $99
                </div>
              </div>
            </div>
            {/* <div className=" w-[px] bg-gray-400" /> */}
            <div className=" flex items-center mx-12">
              <div className=" text-white text-3xl mr-4">
                <FaHistory />
              </div>
              <div>
                <p className=" font-semibold text-white text-base">
                  90 Days Return
                </p>
                <div className=" text-sm text-gray-300 -mt-[2px]">
                  If goods have problem
                </div>
              </div>
            </div>
            <div className=" flex items-center mx-12">
              <div className=" text-white text-3xl mr-4">
                <FaRegCreditCard />
              </div>
              <div>
                <p className=" font-semibold text-white text-base">
                  Secured Payment
                </p>
                <div className=" text-sm text-gray-300 -mt-[2px]">
                  100% secured payment
                </div>
              </div>
            </div>
            <div className=" flex items-center mx-12">
              <div className=" text-white text-3xl mr-4">
                <PiUsersBold />
              </div>
              <div>
                <p className=" font-semibold text-white text-base">
                  24h Support
                </p>
                <div className=" text-sm text-gray-300 -mt-[2px]">
                  Dedicated support
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
};

export default WhyChooseUS;
