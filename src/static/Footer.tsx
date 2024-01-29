import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className=" w-full flex justify-center items-center min-h-[400px] border-t border-gray-300">
      <div className=" w-[90%] flex justify-between premobile1:flex-wrap premobile:my-5">
        <main className=" w-[450px] premobile1:flex premobile1:flex-col premobile1:items-center premobile1:mb-10">
          <div className=" font-black text-2xl ">Watch.</div>
          <p className="  text-sm text-[#909090] my-4 premobile1:text-center">
            Elevate your moments with our exquisite watches - a perfect blend of
            timeless elegance and precision craftsmanship. Every second becomes
            a statement.
          </p>
          <div className=" flex text-xl">
            <span className=" mr-2">
              <FaFacebook />
            </span>
            <span className=" mr-2">
              <FaTwitter />
            </span>
            <span className=" mr-2">
              <FaLinkedin />
            </span>
            <span className=" mr-2">
              <RiInstagramFill />
            </span>
          </div>
        </main>

        <main className=" flex premobile1:flex-col premobile1:items-center  premobile:w-full ">
          <section className=" text-[#83878D] mx-8 premobile:text-center">
            <strong>Company</strong>
            <nav className=" text-sm my-4">Our Team</nav>
            <nav className=" text-sm my-4">Partners</nav>
            <nav className=" text-sm my-4">FAQ's</nav>
            <nav className=" text-sm my-4">Blogs</nav>
          </section>
          <section className=" text-[#83878D] mx-8 premobile:text-center">
            <strong>Get Help</strong>
            <nav className=" text-sm my-4">Developers</nav>
            <nav className=" text-sm my-4">Sign In</nav>
            <nav className=" text-sm my-4">Mobile App</nav>
            <nav className=" text-sm my-4">Contact Us</nav>
          </section>
          <section className=" text-[#83878D] mx-8 premobile:text-center">
            <strong>Conact</strong>
            <nav className=" text-sm my-4">Whatapp</nav>
            <nav className=" text-sm my-4">Support 24</nav>
            <nav className=" text-sm my-4">Our Service</nav>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Footer;
