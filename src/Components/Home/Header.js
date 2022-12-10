import React from 'react';
import shohidul from '../../assests/banner/shohidul.png'
import Typewriter from 'typewriter-effect'
const Header = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-95"></div>
                <div className="w-full">
                    <div className="flex items-center">
                        <div className='w-full flex justify-end'><img className='w-80 rounded-full border-8 border-primary bg-primary bg-opacity-20 ' src={shohidul} alt="" /></div>
                        <div className='w-full text-white text-left px-16'>
                            <h2 className='text-xl font-semibold'>
                                Hi There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h2>
                            <h1 className='text-4xl flex font-bold my-4'> I'M <strong className='ml-2 text-primary'><Typewriter
                                options={{
                                    strings: [
                                        "Front-end Developer",
                                        "React Js Developer",
                                        "MERN Stack Developer",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }} /></strong>
                            </h1>
                            <p>I'm a MERN Stack Developer based in Rangpur, Bangladesh. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>

                            <button className='btn btn-primary mt-4'>Check My Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;