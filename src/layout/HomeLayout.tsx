import { Outlet } from "react-router-dom";
import { Footer } from "../static";

const HomeLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
