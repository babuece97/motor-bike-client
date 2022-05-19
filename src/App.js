import './App.css';
import {Routes,Route } from "react-router-dom";
import Navbar from './compoments/Navbar/Navbar';
import Carusal from './compoments/Banner/Banner';
import Items from './compoments/Items /Items';
import Footer from './compoments/Footer/Footer';
import SocialMedia from './compoments/SocialMedia/SocialMedia';
import Culture from './compoments/Culture/Culture';
import About from './compoments/About/About';
import Registration from './compoments/Registration/Registration';
import Blog from './compoments/Blog/Blog';
import Login from './compoments/Login/Login';
import NotFound from './compoments/NotFound/NotFound';

function App() {
  return (
    <div> 
       <Navbar></Navbar>
       < Carusal></Carusal>
       <Items></Items>
       <Culture></Culture>
       <SocialMedia></SocialMedia>
       
       <Routes>
         {/* This place is being routed, with out routing it does not work . ONLY it could be worked if you write on  browser*/}
          {/* <Route path="/" element={<Home></Home>}/>
          <Route path="home" element={<Home></Home>} /> */}
          <Route path="items" element={<Items></Items>}/>
          <Route path="blog" element={<Blog> </Blog>}/>
          <Route path="aboutMe" element={<About></About>} />
          <Route path="registration" element={<Registration> </Registration> } />
          <Route path="login" element={<Login></Login>} />
          {/* <Route path="checkOut" element={
            <RequireAuth>  <CheckOut></CheckOut>
            </RequireAuth>     
        }></Route> */}
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>

      <Footer></Footer>
    </div>
  
  );
}

export default App;
