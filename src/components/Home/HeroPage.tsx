import { Header } from "../../static";
import Hero from "./Hero";

const HeroPage = () => {
  return (
    <div className=" h-full w-full flex justify-center">
      <div className=" h-screen bg-gray-100 w-[93%] mt-14 overflow-hidden">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default HeroPage;
