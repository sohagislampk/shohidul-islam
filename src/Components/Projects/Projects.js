import React from 'react';
import tunetools from '../../assests/projects/tune-tools.png'
import travelonthego from '../../assests/projects/travel-on-the-go.png'
import learniongendless from '../../assests/projects/learning-endless.png'
import { Link } from 'react-router-dom';

const Projects = () => {

    return (
        <div>
            <h1 className='text-2xl font-bold mt-8'>My projects</h1>

            <div className='grid grid-cols-3 gap-6 my-8'>
                <div className='border-4 p-4 mx-4 border-primary shadow-xl shadow-primary '>
                    <img src={tunetools} alt="" />
                    <h1 className='text-xl font-bold mt-4'>Tune tools</h1>
                    <p>Tune tools is a old musical instrument buy and sale web site, where a saler can sale there used intrumnet and buyer can buy any product with there desired location.</p>
                    <div className="mt-4">
                        <Link to={'/tunetools'} ><button className="btn btn-sm btn-primary mr-4">View Details</button></Link>
                        <a href='https://tune-tools.web.app/' target={'_blank'} rel="noreferrer" ><button className="btn btn-sm btn-primary">View Live</button></a>
                    </div>
                </div>
                <div className='border-4 p-4 mx-4 border-primary shadow-xl shadow-primary '>
                    <img src={travelonthego} alt="" />
                    <h1 className='text-xl font-bold mt-4'>Travel On The Go</h1>
                    <p>Travel on the is a travel service provider project where any one can book a travel package and write there review of travel experiences.</p>
                    <div className="mt-4">
                        <Link to={'/travelonthego'} ><button className="btn btn-sm btn-primary mr-4">View Details</button></Link>
                        <a href='https://travel-on-the-go-a11.web.app/' target={'_blank'} rel="noreferrer" ><button className="btn btn-sm btn-primary">View Live</button></a>
                    </div>
                </div>
                <div className='border-4 p-4 mx-4 border-primary shadow-xl shadow-primary '>
                    <img src={learniongendless} alt="" />
                    <h1 className='text-xl font-bold mt-4'>Learning Endless</h1>
                    <p>Learning Endless is a elearning platform where learners can learn vairous wen technologies courses by purchasing premium membership.</p>
                    <div className="mt-4">
                        <Link to={'/learningendless'}><button className="btn btn-sm btn-primary mr-4">View Details</button></Link>
                        <a href='https://learning-endless-a10.web.app/' target={'_blank'} rel="noreferrer" ><button className="btn btn-sm btn-primary">View Live</button></a>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Projects;