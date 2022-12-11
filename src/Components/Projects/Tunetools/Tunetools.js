import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import img1 from '../../../assests/projects/tunetools/img1.png'
import img2 from '../../../assests/projects/tunetools/img2.png'
import img3 from '../../../assests/projects/tunetools/img3.png'
const Tunetools = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold mt-8'>Project : Tune Tools</h1>
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
                            This is a second hand Musical instrument product buy ans sell website.
                        </li>
                        <li>Here A seller can sell product , manage prodcut also can buy product.</li>
                        <li>Here a buyer can buy product and make wish list.</li>
                        <li>Admin can handle full site buyer , seller , product etc.</li>
                        <li>Internation Payment Getway ( stripe) implemented.</li>
                        <li>Here is a Advertsing facility can generate more sales.</li>
                        <li>Booking facility can give secured deal with chosend location.</li>
                        <li>Fully Responsive and Interactive Dynamic website.</li>
                        <li>logged in with email or google.</li>
                        <li>Dynamic Navbar and login expirity.</li>
                        <li>security vaildate by JWT and varify getting data.</li>
                    </ul>
                    <h3 className='text-xl font-semibold'>Technologies Used in this Project :</h3>
                    <ul className='list-disc ml-8'>
                        <li>React Js</li>
                        <li>Tailwind CSS</li>
                        <li>Daisy UI</li>
                        <li>Node Express</li>
                        <li>Vercel</li>
                        <li>Firebase</li>
                        <li>React Icon</li>
                        <li>React Photo View</li>
                        <li>JWT</li>
                        <li>MongoDB</li>
                        <li>React Hook Form</li>
                        <li>AXIOS</li>
                        <li>Stripe</li>
                    </ul>

                </div>
                <div className='my-8'>
                    <a href='https://github.com/sohagislampk/tune-tools' target={'_blank'} rel="noreferrer" ><button className='btn btn-sm btn-primary mr-4'>Client Site Link</button></a>
                    <a href='https://github.com/sohagislampk/tune-tools-server' target={'_blank'} rel="noreferrer" ><button className='btn btn-sm btn-primary mr-4'>Server Site link</button></a>
                    <a href='https://tune-tools.web.app/' target={'_blank'} rel="noreferrer" ><button className='btn btn-sm btn-primary mr-4'>Live Link</button></a>
                </div>
            </div>
        </div>
    );
};

export default Tunetools;