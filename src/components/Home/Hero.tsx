import { FaArrowRight } from "react-icons/fa6";
import hero from "../../assets/heroo.png";

const Hero = () => {
  return (
    <div>
      <div className=" flex justify-center items-center">
        <div className="  ml-4 phone:ml-1 mr-16 laptopSmall:mr-10 premobile1:mr-4 mobile:mr-0">
          <p
            style={{
              fontFamily: "Oswald",
            }}
            className=" font-normal text-yellow-700 text-[38px] uppercase tracking-[28px] leading-[55px]  laptopSmall:text-3xl laptopSmall:leading-[55px] premobile:text-2xl premobile:leading-[50px] premobile1:text-xl premobile1:leading-[40px] premobile:tracking-[22px] mobile:text-lg mobile:leading-[30px] mobile:tracking-[15px] phone:text-base phone:font-bold"
          >
            New <br /> Trending <br /> 2024{" "}
          </p>
          <p className=" my-11 font-normal text-gray-400 text-[19px] laptopSmall: text-base mobile:text-sm phone:text-xs">
            Spring / Summer 2024 <br /> Watch Men
          </p>
          <div>
            <FaArrowRight />
          </div>
        </div>
        <div className="  ml-20 w-[450px] laptopSmall:w-[380px] tablet:ml-0 tablet:-mr-32 mobile:-mr-40 phone:-mr-48 ">
          <img className=" w-full -mt-4 " src={hero} alt="Hero Watch" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
