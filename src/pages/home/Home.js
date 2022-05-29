import React from 'react';
import Banner from './Banner';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Refund from './Refund';
import Summary from './Summary';
import Tools from './Tools';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Review from './Review';
import BuyNow from './BuyNow';

const Home = () => {
  return (
    <div>
      <Flip left>
        <Banner></Banner>
      </Flip>
      <Fade left>
        <Tools></Tools>
        <Link to={'/resource'}><button className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-md block mx-auto text-2xl">See all tools<FontAwesomeIcon className='ml-5 text-xl' icon={faArrowRight} /> </button></Link>
        <Review></Review>
        <Summary></Summary>
        <BuyNow></BuyNow>
        <Refund></Refund>
      </Fade>
    </div>
  );
};

export default Home;