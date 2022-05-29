import React from 'react';
import Flash from 'react-reveal/Flash';

const NotFound = () => {
    return (
        <div className='max-h-full'>
            <Flash>
                <div className="flex items-center justify-center min-h-screen opacity-75 inset-0 z-0 bg-cover ">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 offset-sm-2 text-gray-50 text-center -mt-52">
                                <div className="relative ">
                                    <h1 className="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold">
                                        <span>4</span><span>0</span><span>4</span></h1>
                                </div>
                                <h5 className="text-gray-300 font-semibold -mr-10 -mt-3">Page not found</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Flash>

        </div>
    );
};

export default NotFound;