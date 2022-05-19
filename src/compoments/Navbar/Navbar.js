import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
// import { signOut } from "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../ firebase.init"
//import CustomLink from "../CustomLink/CustomLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center place-content-between bg-green-400 px-16"> <div className="invisible md:visible lg:visible">
          <Link to="/">
            <img className="h-16 w-16 rounded-full " src={Logo} alt="" />
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row px-4">
          <Link className="mr-6 font-medium text-black" to="/">
            HOME
          </Link>
          <Link className="mr-6 font-medium text-black" to="/blog">
            BLOG
          </Link>
          <Link className="mr-6 font-medium text-black" to="/aboutMe">
            ABOUT ME
          </Link>
          <Link className="mr-6 font-medium text-black" to="/login">
            LOGIN
          </Link>
          
          {/* <Link className="mr-6 font-medium text-white" to="/aboujhjhj">
            ja khochi
          </Link> */}
        </div>
      </nav>
    </div>
  );
};


export default Navbar;