import logo from "../assets/logo.svg";
import { FaCrown } from "react-icons/fa6";
const Nav = () => {
  return (
    <div className="flex items-center justify-between p-4 nav max-w-6xl mx-auto">
      <a className="flex items-center gap-0 text-[40px]" href="/">
        {/* <img src={logo} alt="logo" /> */}
        Ft<span className="text-red-600 text-[20px]">Gurukul</span>
      </a>
      <div className="flex items-center gap-10">
        <a href="/">Home</a>
        <a className="links" href="/">
          About us
        </a>
        <a className="links" href="/">
          Features
        </a>
        <a className="links" href="/">
          Trainers
        </a>
        <a className="links" href="/">
          Prices
        </a>
        <a className="links flex items-center text-yellow-400" href="/">
          Membership
          <FaCrown color="yellow" className="translate-y-[-11px]" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
