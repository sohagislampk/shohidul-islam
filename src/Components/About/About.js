import React from 'react';
import shohidul from '../../assests/banner/shohidul.png'
import { AiFillHtml5, AiFillChrome, AiFillGithub, AiFillWindows, AiFillLinkedin, AiFillFilePdf } from 'react-icons/ai'
import { DiCss3, DiJavascript1, DiReact, DiMongodb } from 'react-icons/di'
import { FaBootstrap, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiExpress, SiReactrouter, SiVisualstudio, SiFirebase, SiNpm } from 'react-icons/si'

const About = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8'>Little About Me</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center justify-items-center mx-8 '>


                <div className='text-xl'>
                    <h1>Name: Md Shohidul Islam</h1>
                    <p>Mobile : +8801722713078</p>
                    <p>What's App : +8801722713078</p>
                    <p>Email : sohagislampk@gmail.com</p>
                    <p>Skype : sohag_pk</p>
                    <div className='flex items-center justify-center text-2xl'>
                        <a href='https://github.com/sohagislampk' target={'_blank'} rel="noreferrer"> <AiFillGithub className='hover:text-primary tooltip ' title='Github'></AiFillGithub> </a>
                        <a href='https://www.linkedin.com/in/md-shohidulislam/' target={'_blank'} rel="noreferrer"> <AiFillLinkedin className='hover:text-primary tooltip mx-4' title='LinkedIn'></AiFillLinkedin></a>
                        <a href='https://drive.google.com/file/d/1TrUUQzmSRG1sFkrmpJujkvA7uz_Hupob/view?usp=sharing' target={'_blank'} rel="noreferrer" ><AiFillFilePdf className='hover:text-primary tooltip ' title='Resume'></AiFillFilePdf></a>
                    </div>
                </div>
                <img className='border-8 rounded-xl my-4' src={shohidul} alt="" />
                <div className=' '>
                    <p>
                        I am a MERN Stack Developer  from Bangladesh.Hard-operating web developer with an aptitude for growing stylish answers withinside the least quantity of time. With a demonstrated cappotential to conform to each self-beginning and collaborative environments even as staying centered on reaching high- great outcomes beneathneath strict deadlines.Eager to acquire a difficult function at a prestigious organisation with a view to make bigger my getting to know and builds upon my developer skills. I'm open to work and employment opportunities.
                    </p>
                </div>
            </div>

            <div>
                <h1 className='text-3xl font-bold text-center my-8'>My Skills</h1>
                <div className='grid grid-cols-2 md:grid-cols-5 text-6xl items-center justify-items-center md:gap-6 my-6'>
                    <AiFillHtml5 className='border-4 w-32 h-32 p-4 hover:border-primary hover:p-6'></AiFillHtml5>
                    <DiCss3 className='border-4 w-32 h-32 p-4 hover:border-primary hover:p-6'></DiCss3>
                    <FaBootstrap className='border-4 w-32 h-32 p-4 hover:border-primary hover:p-6'></FaBootstrap>
                    <SiTailwindcss className='border-4 w-32 h-32 p-4 hover:border-primary hover:p-6'></SiTailwindcss>
                    <DiJavascript1 className='border-4 w-32 h-32 p-4 hover:border-primary hover:p-6'></DiJavascript1>
                    <DiReact className='border-4 w-32 h-32 p-4 hover:border-primary hover:p-6'></DiReact>
                    <FaNodeJs className='border-4 w-32 h-32 p-4 hover:border-primary hover:p-6'></FaNodeJs>
                    <SiExpress className='border-4 w-32 h-32 p-4 hover:border-primary hover:p-6'></SiExpress>
                    <DiMongodb className='border-4 w-32 h-32 p-4 hover:border-primary hover:p-6'></DiMongodb>
                    <SiReactrouter className='border-4 w-32 h-32 p-4 hover:border-primary hover:p-6'></SiReactrouter>
                </div>
            </div>

            <div>
                <h1 className='text-3xl font-bold text-center my-8'>Tools I am Familiar With</h1>
                <div className='flex justify-between md:mx-16 text-3xl md:text-5xl my-8 border border-primary p-6 '>
                    <SiVisualstudio className='hover:text-primary hover:border hover:p-2'></SiVisualstudio>
                    <AiFillChrome className='hover:text-primary hover:border hover:p-2'></AiFillChrome>
                    <SiFirebase className='hover:text-primary hover:border hover:p-2'></SiFirebase>
                    <AiFillGithub className='hover:text-primary hover:border hover:p-2'></AiFillGithub>
                    <SiNpm className='hover:text-primary hover:border hover:p-2'></SiNpm>
                    <AiFillWindows className='hover:text-primary hover:border hover:p-2'></AiFillWindows>
                </div>
            </div>
        </div>
    );
};

export default About;