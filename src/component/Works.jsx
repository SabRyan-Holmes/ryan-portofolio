import React from 'react'
import works1 from '../assets/works1.png'
import MouseLine from './others/MouseLine'
import { motion } from "framer-motion";
import ExperienceCard from './others/ExperienceCard';
import ExperienceCard2 from './others/ExperienceCard2';
import ExperienceCard3 from './others/ExperienceCard3';
import ExperienceCard4 from './others/ExperienceCard4';
import ExperienceCard5 from './others/ExperienceCard5';

const Works = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
            max-w-full px-7 justify-evenly mx-auto items-center  ">
            {/* Hanya tampil kalo di screen laptop */}


            {/* Judul */}
            <div className="flex flex-col justify-center items-center">
                <MouseLine />
                <h1 className="text-primary text-6xl">Works</h1>
                <svg className='w-full my-5 fill-primary ' width="174" height="12" viewBox="0 0 174 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM173.773 6L168 0.226497L162.226 6L168 11.7735L173.773 6ZM7.8 7H8.8V5H7.8V7ZM15 5H14V7H15V5ZM25.8 7H26.8V5H25.8V7ZM36.6 5H35.6V7H36.6V5ZM40.2 7H41.2V5H40.2V7ZM47.4 5H46.4V7H47.4V5ZM58.2 7H59.2V5H58.2V7ZM69 5H68V7H69V5ZM72.6 7H73.6V5H72.6V7ZM79.8 5H78.8V7H79.8V5ZM90.6 7H91.6V5H90.6V7ZM101.4 5H100.4V7H101.4V5ZM105 7H106V5H105V7ZM112.2 5H111.2V7H112.2V5ZM123 7H124V5H123V7ZM133.8 5H132.8V7H133.8V5ZM137.4 7H138.4V5H137.4V7ZM144.6 5H143.6V7H144.6V5ZM155.4 7H156.4V5H155.4V7ZM166.2 5H165.2V7H166.2V5ZM6 7H7.8V5H6V7ZM15 7H25.8V5H15V7ZM36.6 7H40.2V5H36.6V7ZM47.4 7H58.2V5H47.4V7ZM69 7H72.6V5H69V7ZM79.8 7H90.6V5H79.8V7ZM101.4 7H105V5H101.4V7ZM112.2 7H123V5H112.2V7ZM133.8 7H137.4V5H133.8V7ZM144.6 7H155.4V5H144.6V7ZM166.2 7H168V5H166.2V7Z" />
                    <path d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM173.773 6L168 0.226497L162.226 6L168 11.7735L173.773 6ZM7.8 7H8.8V5H7.8V7ZM15 5H14V7H15V5ZM25.8 7H26.8V5H25.8V7ZM36.6 5H35.6V7H36.6V5ZM40.2 7H41.2V5H40.2V7ZM47.4 5H46.4V7H47.4V5ZM58.2 7H59.2V5H58.2V7ZM69 5H68V7H69V5ZM72.6 7H73.6V5H72.6V7ZM79.8 5H78.8V7H79.8V5ZM90.6 7H91.6V5H90.6V7ZM101.4 5H100.4V7H101.4V5ZM105 7H106V5H105V7ZM112.2 5H111.2V7H112.2V5ZM123 7H124V5H123V7ZM133.8 5H132.8V7H133.8V5ZM137.4 7H138.4V5H137.4V7ZM144.6 5H143.6V7H144.6V5ZM155.4 7H156.4V5H155.4V7ZM166.2 5H165.2V7H166.2V5ZM6 7H7.8V5H6V7ZM15 7H25.8V5H15V7ZM36.6 7H40.2V5H36.6V7ZM47.4 7H58.2V5H47.4V7ZM69 7H72.6V5H69V7ZM79.8 7H90.6V5H79.8V7ZM101.4 7H105V5H101.4V7ZM112.2 7H123V5H112.2V7ZM133.8 7H137.4V5H133.8V7ZM144.6 7H155.4V5H144.6V7ZM166.2 7H168V5H166.2V7Z" fill-opacity="0.7" />
                </svg>

                <svg className='w-full h-10 fill-primary stroke-primary' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="13" width="4" height="4" rx="2" transform="rotate(90 6 13)" />
                    <rect x="17" y="12" width="4" height="4" rx="2" transform="rotate(-90 17 12)" />
                    <path d="M18 11L16.5 12.5C15.4829 13.5171 14.9744 14.0256 14.3628 14.1384C14.1229 14.1826 13.8771 14.1826 13.6372 14.1384C13.0256 14.0256 12.5171 13.5171 11.5 12.5V12.5C10.4829 11.4829 9.97442 10.9744 9.36277 10.8616C9.12295 10.8174 8.87705 10.8174 8.63723 10.8616C8.02558 10.9744 7.51705 11.4829 6.5 12.5L5 14" />
                </svg>
                <p className="text-lg">I had the pleasure of working with these awesome projects.</p>
            </div>

            <div className="flex max-w-[310px] max-h-screen tablet:max-w-screen-tablet laptop:w-full laptop:max-w-screen-laptop tablet:mt-36 space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 "
            >
                <ExperienceCard />
                <ExperienceCard2 />
                <ExperienceCard3 />
                <ExperienceCard4 />

            </div>

            {/* <div className="w-full px-0 mx-0 flex  items-center justify-around my-24 laptop:my-36">
                <svg className="prev-next" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>

                <img src={works1} className='w-80 h-72 scale-125 tablet:scale-150 laptop:w-fit laptop:h-fit' alt="" />
                <svg className="prev-next " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div> */}
        </motion.section>
    )
}

export default Works