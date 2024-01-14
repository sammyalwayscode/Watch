import { FaArrowRight } from "react-icons/fa6";
import hero from "../../assets/hero11.png";

const Hero = () => {
  return (
    <div>
      <div className=" flex justify-center items-center">
        <div className=" mr-16">
          <p
            style={{
              fontFamily: "Oswald",
            }}
            className=" font-normal text-yellow-700 text-[38px] uppercase tracking-[28px] leading-[55px]"
          >
            New <br /> Trending <br /> 2024{" "}
          </p>
          <p className=" my-11 font-normal text-gray-400 text-[19px]">
            Spring / Summer 2024 <br /> Watch Men
          </p>
          <div>
            <FaArrowRight />
          </div>
        </div>
        <div className=" ml-20">
          <img className=" w-[450px] -mt-4 " src={hero} alt="Hero Watch" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
