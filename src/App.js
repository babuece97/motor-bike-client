import './App.css';
import {Routes,Route } from "react-router-dom";
import Navbar from './compoments/Navbar/Navbar';
import Footer from './compoments/Footer/Footer';
import About from './compoments/About/About';
import Registration from './compoments/Registration/Registration';
import Blog from './compoments/Blog/Blog';
import Login from './compoments/Login/Login';
import NotFound from './compoments/NotFound/NotFound';
import Home from './compoments/Home/Home';
import UpdateItem from './compoments/UpdateItem/UpdateItem';
import PrivateRoute from './compoments/Authentication/PrivateRoute';
import Review from './compoments/Review/Review';
import BankLoan from './compoments/BankLoan/BankLoan';
import app from './compoments/Firebase/firebase.init';
import {getAuth} from 'firebase/auth';
const auth =getAuth(app);
// Two things here app and getAuth for registration process.getAuth comes from FB auth,then pass app inside the getAuth

function App() {
  return (
    <div> 
       <Navbar></Navbar>
       <Routes>
         {/* This place is being routed, with out routing it does not work . ONLY it could be worked if you write on  browser*/}
          <Route path="/" element={<Home></Home>}/>
          <Route path="blog" element={<Blog> </Blog>}/>
          <Route path="review" element={<Review> </Review>}/>
          <Route path="bankloan" element={<BankLoan></BankLoan>}/>
          <Route path="aboutMe" element={<About></About>} />
          <Route path="registration" element={<Registration> </Registration> } />
          <Route path="login" element={<Login></Login>} />
          <Route path="inventory" element={<PrivateRoute> <UpdateItem/> </PrivateRoute>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>

      <Footer></Footer>
    </div>
  
  );
}

export default App;
