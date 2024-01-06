import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <div>
        <div>
          <div>Logo</div>
          <div>
            <span>Home</span>
            <span>Shop</span>
          </div>
        </div>
        <div>
          <span>Log In</span>
          <div>
            <HiOutlineShoppingBag />
          </div>
          <div>
            <CiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
