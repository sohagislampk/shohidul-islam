import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import img1 from '../../../assests/projects/travelonthego/img1.png'
import img2 from '../../../assests/projects/travelonthego/img2.png'
import img3 from '../../../assests/projects/travelonthego/img3.png'
const Travelonthego = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold mt-8'>Project : Travel One the Go</h1>
            <div className='grid grid-cols-3 gap-6 my-8 mx-12'>
                <PhotoProvider>
                    <PhotoView src={img1}>
                        <img className='h-96 w-full  hover:border border-primary p-2' src={img1} style={{ objectFit: 'cover' }} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src={img2}>
                        <img className='h-96 w-full  hover:border border-primary p-2' src={img2} style={{ objectFit: 'cover' }} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src={img3}>
                        <img className='h-96 w-full hover:border border-primary p-2 ' src={img3} style={{ objectFit: 'cover' }} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className='my-8'>
                <h1 className='text-3xl font-bold'>Details</h1>

                <div className='text-left mx-auto w-2/3 mt-4'>
                    <h2 className='text-xl font-semibold'>Features and Functionality :</h2>
                    <ul className='list-disc ml-8'>
                        <li>
                            This is a travel service provider website with review posting facility.
                        </li>
                        <li>We provide local and international tour packages.</li>
                        <li>Fully Responsive and Interactive Dynamic website.</li>
                        <li>Take any reasonable tour plan we have and enjoy.</li>
                        <li>logged in with email or google.</li>
                        <li>Dynamic Navbar and login expirity .</li>
                        <li>Review add , delete and update options.</li>
                        <li>security vaildate by JWT.</li>
                    </ul>
                    <h3 className='text-xl font-semibold'>Technologies Used in this Project :</h3>
                    <ul className='list-disc ml-8'>
                        <li>React Js</li>
                        <li>Tailwind CSS</li>
                        <li>Flowbite-React</li>
                        <li>Node Express</li>
                        <li>Vercel</li>
                        <li>Firebase</li>
                        <li>React Icon</li>
                        <li>React Photo View</li>
                        <li>JWT</li>
                        <li>MongoDB</li>
                    </ul>

                </div>
                <div className='my-8'>
                    <a href='https://github.com/sohagislampk/travel-on-the-go-client' target={'_blank'} rel="noreferrer" ><button className='btn btn-sm btn-primary mr-4'>Client Site Link</button></a>
                    <a href='https://github.com/sohagislampk/travel-on-the-go-server' target={'_blank'} rel="noreferrer" ><button className='btn btn-sm btn-primary mr-4'>Server Site link</button></a>
                    <a href='https://travel-on-the-go-a11.web.app/' target={'_blank'} rel="noreferrer" ><button className='btn btn-sm btn-primary mr-4'>Live Link</button></a>
                </div>
            </div>
        </div>
    );
};

export default Travelonthego;