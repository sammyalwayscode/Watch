import { Header } from "../../static";
import Hero from "./Hero";

const HeroPage = () => {
  return (
    <div className=" h-full w-full flex justify-center mb-16">
      <div className=" h-screen bg-gray-100 w-[93%] mt-14 overflow-hidden tablet:mt-9 mobile:mt-4 premobile1:h-[90vh]">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default HeroPage;
