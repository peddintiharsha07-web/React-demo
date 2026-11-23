
import React from 'react'
import Navbar from './Navibar'
import kfc from './assets/kfc.jpg'
import swiggy from './assets/swiggy.jpg'
import zamoto from './assets/zamoto.jpg'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='image-container'>
        <div className='overlay'>
        <h1 className='title'>TASTE THE BEST <br></br>KFC CHICKEN.</h1>
        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='button-container'>
            <div><button className='order-button'>Order Now</button>
            </div>
            <div>
            <button className='KFC-CHICKEN'>KFC CHICKEN</button>
            </div>
            </div>
        </div>
        <div className='KFC'>
            <img src={kfc} alt='KFC' className='kfc-image'/>
        </div>
       
        </div>
         <p className='av'>Also Available on</p>
         <div className='delivery'>
         <div className='swiggy'>
            <img src={swiggy} alt="" />
        </div>
        <div className='zomato'>
            <img src= {zamoto} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Home