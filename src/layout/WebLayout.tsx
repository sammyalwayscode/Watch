import { Outlet } from "react-router-dom";
import { Footer, Header } from "../static";

const WebLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default WebLayout;
