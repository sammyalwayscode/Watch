import { FaArrowRight } from "react-icons/fa6";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <div className=" flex justify-center items-center">
        <div>
          <p className=" font-extrabold text-5xl">
            New <br /> Trending <br /> 2024{" "}
          </p>
          <p className=" my-12 font-semibold text-gray-400">
            Spring / Summer 2024 <br /> Watch Men
          </p>
          <div>
            <FaArrowRight />
          </div>
        </div>
        <div>
          <img src={hero} alt="Hero Watch" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
