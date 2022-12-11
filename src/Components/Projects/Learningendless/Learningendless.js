import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import img1 from '../../../assests/projects/learningendless/img1.png'
import img2 from '../../../assests/projects/learningendless/img2.png'
import img3 from '../../../assests/projects/learningendless/img3.png'
const Learningendless = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold mt-8'>Project : Learning Endless</h1>
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
                            This is a E-Learing website about Web Technologies where you can learn online.
                        </li>
                        <li>User Friendly and Quality learning plantform.</li>
                        <li>Fully Responsive and Interactive Dynamic website.</li>
                        <li>Download course Details as PDF file</li>
                        <li>logged in with email , google or github.</li>
                        <li>Dynamic Navbar and Update Profile options.</li>
                        <li>Visit all Course Details Without Login.</li>
                    </ul>
                    <h3 className='text-xl font-semibold'>Technologies Used in this Project :</h3>
                    <ul className='list-disc ml-8'>
                        <li>React Js</li>
                        <li>Tailwind CSS</li>
                        <li>DaisyUI</li>
                        <li>Node Express</li>
                        <li>Vercel</li>
                        <li>Firebase</li>
                        <li>React Icon</li>
                        <li>React Photo PDF</li>

                    </ul>

                </div>
                <div className='my-8'>
                    <a href='https://github.com/sohagislampk/learning-endless-client' target={'_blank'} rel="noreferrer" ><button className='btn btn-sm btn-primary mr-4'>Client Site Link</button></a>
                    <a href='https://github.com/sohagislampk/learning-endless-server' target={'_blank'} rel="noreferrer" ><button className='btn btn-sm btn-primary mr-4'>Server Site link</button></a>
                    <a href='https://learning-endless-a10.web.app/' target={'_blank'} rel="noreferrer" ><button className='btn btn-sm btn-primary mr-4'>Live Link</button></a>
                </div>
            </div>
        </div>
    );
};

export default Learningendless;