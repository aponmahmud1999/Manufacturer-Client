import React from 'react';
import kobutor from '../../assets/images/kobutor.png'
import mobile from '../../assets/images/mobile.png'
import photography from '../../assets/images/photography.png'
import Fade from 'react-reveal/Fade';
const Portfolio = () => {
    return (
        <div>
            <Fade left>
                <h1 className="text-3xl text-center">Portfolio</h1>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className='w-96 rounded-xl' src={`https://scontent.fdac80-1.fna.fbcdn.net/v/t1.6435-9/127650345_3419060588208981_8997823046365866826_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEcZQMxr5bdtcCHKeRvEBfBZG5m4r5JrspkbmbivkmuytavqxqAmei00Tt8vrKAAAU3DfIhJxD5GEr1XvY3O3RM&_nc_ohc=iyNBN_AZ4DAAX_ltIO0&_nc_ht=scontent.fdac80-1.fna&oh=00_AT_7D347m3Qgg0AabxGHKZ8X7jxXt2cv-cYWIGSyLSmhZw&oe=62B89910`} alt='' />
                        <div>
                            <h1 className="text-5xl font-bold">Apon Mahmud</h1>
                            <p className="py-6">I am currently a student in Computer Science and Enginnering (Final year) at Bangladesh Army University of Science and  Technology</p>
                            <p className="py-6">I am an early learner,self taught person.I am looking for an opportunity to text my skills.</p>
                            <p className="text-xl">Skills:</p>
                            <p>1. HTML</p>
                            <p>2. CSS</p>
                            <p>3. Javascript</p>
                            <p>4. MongoDB</p>
                            <p>5. React</p>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                    <div className="card shadow-xl image-full">
                        <figure><img src={kobutor} alt="bike" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-start">Kobutor Selling</h2>
                            <div className="card-actions justify-end">
                                <a href="https://vermillion-pixie-72834f.netlify.app/"><button className="btn btn-ghost">Visit</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-xl image-full">
                        <figure><img src={mobile} alt="Writer" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-start">Mobile Warehouse</h2>
                            <div className="card-actions justify-end">
                                <a href="https://mobilewarehouse-a051d.web.app/"><button className="btn btn-ghost">Visit</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-xl  image-full">
                        <figure><img src={photography} alt="Headphone" /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-start">Photography</h2>
                            <div className="card-actions justify-end">
                                <a href="https://photography-c82cd.web.app/"><button className="btn btn-ghost">Visit</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

        </div>
    );
};

export default Portfolio;