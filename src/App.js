import './App.css';
import Navbar from '../src/compoments/Navbar/Navbar';
import Carusal from '../src/compoments/Banner/Banner';
import Items from './compoments/Items /Items';
import Footer from './compoments/Footer/Footer';
import SocialMedia from './compoments/SocialMedia/SocialMedia';

function App() {
  return (
    <div> 
       <Navbar></Navbar>
       < Carusal></Carusal>
       <Items></Items>
       <SocialMedia></SocialMedia>
       <Footer></Footer>
    </div>
  
  );
}

export default App;
