import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Home from '../Home/Home';
import { auth } from "../Firebase/firebase.init";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState({});//as User comes from OBj
  console.log(user);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //console.log(user); // to CHK the use whether it's persists or NOT
        setUser(user);
      } else {
        setUser({});// Aft signout, make it empty object
      }
    });
  },[])

  const handleLogOut=()=>{
    signOut(auth)
      .then(() => {
      
    })
    .catch((error) => {
      
    });
  }
 
  
  
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
          <Link className="mr-6 font-medium text-black" to="/review">
            REVIEW
          </Link>
          <Link className="mr-6 font-medium text-black" to="/bankloan"> BANK LOAN
          </Link>
          <Link className="mr-6 font-medium text-black" to="/addItems">
            ADD ITEMS
          </Link>
          <Link className="mr-6 font-medium text-black" to="/aboutMe">
            ABOUT ME
          </Link>
          {user?.uid? // Conditional rendering
          <>
          <Link className="mr-6 font-medium text-black" to="/manageitems">
            MANAGE  ITEMS
          </Link>
          <Link className="mr-6 font-medium text-black" to="/myitems">
            MY  ITEMS
          </Link>
          <Link to='/' elemement={<Home />}>
       <button onClick={handleLogOut}className='mr-6 font-medium text-white' > LOG OUT</button>
       </Link>
         
          {/* <button onClick={handleLogOut} as={Link} to="/" className="mr-6 font-medium text-white" > LOG OUT</button> */}
          </> 
          : 
          
          <Link className="mr-6 font-medium text-black" to="/login">
            LOGIN
          </Link>}
          {/* <p>USER:{user?.displayName}</p>
          <p>Email:{user?.email}</p> */}

          
          

        </div>
      </nav>
    </div>
  );
};


export default Navbar;