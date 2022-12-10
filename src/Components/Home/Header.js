import React from 'react';
import shohidul from '../../assests/banner/shohidul.png'
const Header = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div><img src={shohidul} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;