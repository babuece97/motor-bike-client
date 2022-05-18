import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import FirstCar from '../../images/motorbike1.png';
import { Carousel } from 'react-responsive-carousel';
const Carusal = () => {
    return (
        <div>
           <Carousel  autoPlay infiniteLoop showThumbs={false}>
                <div>
                    
                  <img className='h-96 w-full object-cover object-center'  src="https://t3.ftcdn.net/jpg/01/88/03/12/240_F_188031295_28JWrctImNgAZVTlPHAHhC9xpgO1WYKO.jpg" alt='' />
                   
                    
                </div>
                <div>
                    
                    <img className='h-96 w-full object-cover object-center'  src="https://t3.ftcdn.net/jpg/03/25/55/56/240_F_325555617_lJIBNJXDYMo2mLLqbgpvKYmVFRP4ZekA.jpg" alt='' />
                 
                      
                  </div>
                <div>
                    <img className='h-96 w-full object-cover object-center' src="https://img.freepik.com/free-photo/rider-motorbike-road-riding-having-fun-driving-empty-road_1150-10701.jpg?t=st=1652790375~exp=1652790975~hmac=a5bc6001177ecfccf4b2795bd535f5142721a4ad904fdf6d9dbf0fbfc61b33fa&w=900" alt=''/>
                   {/*  <p className="legend">Legend 3</p> */}
                </div>
            </Carousel> 
        </div>
    );
};

export default Carusal;
