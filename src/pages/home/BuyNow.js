import React from 'react';
import { Link } from 'react-router-dom';

const BuyNow = () => {
    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img className='w-[700px] rounded-2xl opacity-80' src="https://st.depositphotos.com/1025962/3824/v/600/depositphotos_38245317-stock-illustration-car-parts.jpg" alt='' />
          <div>
            <h1 class="text-6xl font-bold">GET THE</h1>
            <h1 class="text-3xl text-primary font-bold">BEST PARTS FROM US</h1>
            <p class="py-5">FIND THE RIGHT PARTS FASTER</p>
            <Link to={'/resource'}><button class="btn">Shop now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default BuyNow;