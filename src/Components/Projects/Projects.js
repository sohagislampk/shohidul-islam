import React from 'react';
import tunetools from '../../assests/projects/tune-tools.png'
import travelonthego from '../../assests/projects/travel-on-the-go.png'
import learniongendless from '../../assests/projects/learning-endless.png'

const Projects = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold mt-8'>My projects</h1>
            <div className='w-2/3 mx-auto my-8 shadow-xl rounded-xl hover:mt-10 hover:border'>
                <div className='flex justify-center'>
                    <div className='w-1/2'><img className='rounded-l-2xl' src={tunetools} alt="" /></div>
                    <div className='w-1/2 text-left p-6'>
                        <h2 className=" text-xl font-bold">Tune Tools</h2>
                        <p>Tune tools is a old musical instrument buy and sale web site, where a saler can sale there used intrumnet and buyer can buy any product with there desired location.</p>
                        <div className="mt-4">
                            <button className="btn btn-sm btn-primary mr-4">View Details</button>
                            <button className="btn btn-sm btn-primary">View Live</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-2/3 mx-auto my-12 shadow-xl rounded-xl hover:mt-10 hover:border'>
                <div className='flex flex-row-reverse justify-center'>
                    <div className='w-1/2'><img className='rounded-r-2xl' src={travelonthego} alt="" /></div>
                    <div className='w-1/2 text-left p-6'>
                        <h2 className=" text-xl font-bold">Travel On The Go</h2>
                        <p>Travel on the is a travel service provider project where any one can book a travel package and write there review of travel experiences.</p>
                        <div className="mt-4">
                            <button className="btn btn-sm btn-primary mr-4">View Details</button>
                            <button className="btn btn-sm btn-primary">View Live</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-2/3 mx-auto my-8 shadow-xl rounded-xl hover:mt-14 hover:border'>
                <div className='flex justify-center'>
                    <div className='w-1/2'><img className='rounded-l-2xl' src={learniongendless} alt="" /></div>
                    <div className='w-1/2 text-left p-6'>
                        <h2 className=" text-xl font-bold">Learning Endless</h2>
                        <p>Learning Endless is a elearning platform where learners can learn vairous wen technologies courses by purchasing premium membership.</p>
                        <div className="mt-4">
                            <button className="btn btn-sm btn-primary mr-4">View Details</button>
                            <button className="btn btn-sm btn-primary">View Live</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;