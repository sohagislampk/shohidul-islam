import React from 'react';
import shohidul from '../../assests/banner/shohidul.png'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/j3c0ydV/bgbanner.jpg")` }}>
                <div className="hero-overlay bg-opacity-95"></div>
                <div className="w-full">
                    <div className="flex items-center">
                        <div className='flex justify-end w-full'>
                            <div className='clip-path'><img className='w-80  rounded-full border-8 bg-primary bg-opacity-20' src={shohidul} alt="" /></div>
                        </div>
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

                            <a href='https://drive.google.com/file/d/1TrUUQzmSRG1sFkrmpJujkvA7uz_Hupob/view?usp=sharing' target={'_blank'}>
                                <button className='btn btn-primary mt-4 text-white'>Check My Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;