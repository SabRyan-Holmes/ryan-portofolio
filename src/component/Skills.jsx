import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css_2.png'

import js from '../assets/js.png'
import react from '../assets/react.png'

const Skills = () => {
    return (
        <div className='w-full h-screen laptop:h-full bg-slate-50 dark:bg-dark pt-16 pb-44 tablet:pb-1'>
            {/* Mouse & Line & </>*/}
            <div className=' gap-36 w-full hidden mt-28 laptop:flex  justify-center pl-[420px]  my-10 items-center '>

                <div className=' w-fit '>
                    <svg width="32" height="44" viewBox="0 0 32 44" xmlns="http://www.w3.org/2000/svg" className='stroke-secondary fill-primary'>
                        <g clip-path="url(#clip0_504_796)">
                            <path clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16V28C32 36.8366 24.8366 44 16 44H14V43.8762C6.10738 42.892 0 36.1592 0 28V16ZM16 40C22.6274 40 28 34.6274 28 28V16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16V28C4 34.6274 9.37258 40 16 40Z" />
                            <path d="M17.3334 9.1665V16.4998H14.6667V9.1665H17.3334Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0_504_796">
                                <rect width="32" height="44" fill="" />
                            </clipPath>
                        </defs>
                    </svg>

                    <svg width="12" height="87" viewBox="0 0 12 87" xmlns="http://www.w3.org/2000/svg" className='fill-primary mx-auto mt-1'>
                        <path d="M6.5 1C6.5 0.723858 6.27614 0.5 6 0.5C5.72386 0.5 5.5 0.723858 5.5 1L6.5 1ZM6 83.8867L8.88675 81L6 78.1132L3.11325 81L6 83.8867ZM5.5 3.85714C5.5 4.13329 5.72386 4.35714 6 4.35714C6.27614 4.35714 6.5 4.13329 6.5 3.85714H5.5ZM6.5 9.57143C6.5 9.29529 6.27614 9.07143 6 9.07143C5.72386 9.07143 5.5 9.29529 5.5 9.57143H6.5ZM5.5 15.2857C5.5 15.5619 5.72386 15.7857 6 15.7857C6.27614 15.7857 6.5 15.5619 6.5 15.2857H5.5ZM6.5 21C6.5 20.7239 6.27614 20.5 6 20.5C5.72386 20.5 5.5 20.7239 5.5 21H6.5ZM5.5 26.7143C5.5 26.9904 5.72386 27.2143 6 27.2143C6.27614 27.2143 6.5 26.9904 6.5 26.7143H5.5ZM6.5 32.4286C6.5 32.1524 6.27614 31.9286 6 31.9286C5.72386 31.9286 5.5 32.1524 5.5 32.4286H6.5ZM5.5 38.1429C5.5 38.419 5.72386 38.6429 6 38.6429C6.27614 38.6429 6.5 38.419 6.5 38.1429H5.5ZM6.5 43.8571C6.5 43.581 6.27614 43.3571 6 43.3571C5.72386 43.3571 5.5 43.581 5.5 43.8571H6.5ZM5.5 49.5714C5.5 49.8476 5.72386 50.0714 6 50.0714C6.27614 50.0714 6.5 49.8476 6.5 49.5714H5.5ZM6.5 55.2857C6.5 55.0096 6.27614 54.7857 6 54.7857C5.72386 54.7857 5.5 55.0096 5.5 55.2857H6.5ZM5.5 61C5.5 61.2761 5.72386 61.5 6 61.5C6.27614 61.5 6.5 61.2761 6.5 61H5.5ZM6.5 66.7143C6.5 66.4381 6.27614 66.2143 6 66.2143C5.72386 66.2143 5.5 66.4381 5.5 66.7143H6.5ZM5.5 72.4286C5.5 72.7047 5.72386 72.9286 6 72.9286C6.27614 72.9286 6.5 72.7047 6.5 72.4286H5.5ZM6.5 78.1429C6.5 77.8667 6.27614 77.6429 6 77.6429C5.72386 77.6429 5.5 77.8667 5.5 78.1429H6.5ZM5.5 1V3.85714H6.5V1L5.5 1ZM5.5 9.57143L5.5 15.2857H6.5L6.5 9.57143H5.5ZM5.5 21L5.5 26.7143H6.5L6.5 21H5.5ZM5.5 32.4286V38.1429H6.5L6.5 32.4286H5.5ZM5.5 43.8571L5.5 49.5714H6.5L6.5 43.8571H5.5ZM5.5 55.2857L5.5 61H6.5L6.5 55.2857H5.5ZM5.5 66.7143V72.4286H6.5L6.5 66.7143H5.5ZM5.5 78.1429L5.5 81H6.5L6.5 78.1429H5.5ZM7 1C7 0.447715 6.55228 5.96046e-08 6 5.96046e-08C5.44772 5.96046e-08 5 0.447715 5 1L7 1ZM6 86.7735L11.7735 81L6 75.2265L0.226498 81L6 86.7735ZM5 3.85714C5 4.40943 5.44772 4.85714 6 4.85714C6.55228 4.85714 7 4.40943 7 3.85714H5ZM7 9.57143C7 9.01914 6.55228 8.57143 6 8.57143C5.44772 8.57143 5 9.01914 5 9.57143H7ZM5 15.2857C5 15.838 5.44772 16.2857 6 16.2857C6.55228 16.2857 7 15.838 7 15.2857H5ZM7 21C7 20.4477 6.55228 20 6 20C5.44772 20 5 20.4477 5 21H7ZM5 26.7143C5 27.2666 5.44772 27.7143 6 27.7143C6.55228 27.7143 7 27.2666 7 26.7143H5ZM7 32.4286C7 31.8763 6.55228 31.4286 6 31.4286C5.44772 31.4286 5 31.8763 5 32.4286H7ZM5 38.1429C5 38.6951 5.44772 39.1429 6 39.1429C6.55228 39.1429 7 38.6951 7 38.1429H5ZM7 43.8571C7 43.3049 6.55228 42.8571 6 42.8571C5.44772 42.8571 5 43.3049 5 43.8571H7ZM5 49.5714C5 50.1237 5.44772 50.5714 6 50.5714C6.55228 50.5714 7 50.1237 7 49.5714H5ZM7 55.2857C7 54.7334 6.55228 54.2857 6 54.2857C5.44772 54.2857 5 54.7334 5 55.2857H7ZM5 61C5 61.5523 5.44772 62 6 62C6.55228 62 7 61.5523 7 61H5ZM7 66.7143C7 66.162 6.55228 65.7143 6 65.7143C5.44772 65.7143 5 66.162 5 66.7143H7ZM5 72.4286C5 72.9809 5.44772 73.4286 6 73.4286C6.55228 73.4286 7 72.9809 7 72.4286H5ZM7 78.1429C7 77.5906 6.55228 77.1429 6 77.1429C5.44772 77.1429 5 77.5906 5 78.1429H7ZM5 1V3.85714H7V1L5 1ZM5 9.57143L5 15.2857H7L7 9.57143H5ZM5 21L5 26.7143H7L7 21H5ZM5 32.4286L5 38.1429H7L7 32.4286H5ZM5 43.8571L5 49.5714H7L7 43.8571H5ZM5 55.2857L5 61H7V55.2857H5ZM5 66.7143V72.4286H7L7 66.7143H5ZM5 78.1429L5 81H7L7 78.1429H5Z" />
                    </svg>
                </div>

                {/* </> */}
                <svg className='w-72 h-72 stroke-primary inline-block' viewBox="0 0 237 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.708 81.768L77.348 106.296L72.98 119.232L0.404001 88.488V75.048L72.98 44.304L77.348 57.24L17.708 81.768ZM98.2561 163.08H82.2961L139.248 0.455991H154.872L98.2561 163.08ZM159.709 57.24L164.077 44.304L236.653 75.048V88.488L164.077 119.232L159.709 106.296L219.349 81.768L159.709 57.24Z" />
                </svg>


            </div>


            {/* Judul */}
            <div className="container w-1/2 tablet:w-full">
                <h1 className="text-gradient text-6xl ">Skills</h1>
                <svg className='w-full my-5 fill-primary bg-clip-content gradient-base   ' width="174" height="12" viewBox="0 0 174 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM173.773 6L168 0.226497L162.226 6L168 11.7735L173.773 6ZM7.8 7H8.8V5H7.8V7ZM15 5H14V7H15V5ZM25.8 7H26.8V5H25.8V7ZM36.6 5H35.6V7H36.6V5ZM40.2 7H41.2V5H40.2V7ZM47.4 5H46.4V7H47.4V5ZM58.2 7H59.2V5H58.2V7ZM69 5H68V7H69V5ZM72.6 7H73.6V5H72.6V7ZM79.8 5H78.8V7H79.8V5ZM90.6 7H91.6V5H90.6V7ZM101.4 5H100.4V7H101.4V5ZM105 7H106V5H105V7ZM112.2 5H111.2V7H112.2V5ZM123 7H124V5H123V7ZM133.8 5H132.8V7H133.8V5ZM137.4 7H138.4V5H137.4V7ZM144.6 5H143.6V7H144.6V5ZM155.4 7H156.4V5H155.4V7ZM166.2 5H165.2V7H166.2V5ZM6 7H7.8V5H6V7ZM15 7H25.8V5H15V7ZM36.6 7H40.2V5H36.6V7ZM47.4 7H58.2V5H47.4V7ZM69 7H72.6V5H69V7ZM79.8 7H90.6V5H79.8V7ZM101.4 7H105V5H101.4V7ZM112.2 7H123V5H112.2V7ZM133.8 7H137.4V5H133.8V7ZM144.6 7H155.4V5H144.6V7ZM166.2 7H168V5H166.2V7Z" />
                    <path d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM173.773 6L168 0.226497L162.226 6L168 11.7735L173.773 6ZM7.8 7H8.8V5H7.8V7ZM15 5H14V7H15V5ZM25.8 7H26.8V5H25.8V7ZM36.6 5H35.6V7H36.6V5ZM40.2 7H41.2V5H40.2V7ZM47.4 5H46.4V7H47.4V5ZM58.2 7H59.2V5H58.2V7ZM69 5H68V7H69V5ZM72.6 7H73.6V5H72.6V7ZM79.8 5H78.8V7H79.8V5ZM90.6 7H91.6V5H90.6V7ZM101.4 5H100.4V7H101.4V5ZM105 7H106V5H105V7ZM112.2 5H111.2V7H112.2V5ZM123 7H124V5H123V7ZM133.8 5H132.8V7H133.8V5ZM137.4 7H138.4V5H137.4V7ZM144.6 5H143.6V7H144.6V5ZM155.4 7H156.4V5H155.4V7ZM166.2 5H165.2V7H166.2V5ZM6 7H7.8V5H6V7ZM15 7H25.8V5H15V7ZM36.6 7H40.2V5H36.6V7ZM47.4 7H58.2V5H47.4V7ZM69 7H72.6V5H69V7ZM79.8 7H90.6V5H79.8V7ZM101.4 7H105V5H101.4V7ZM112.2 7H123V5H112.2V7ZM133.8 7H137.4V5H133.8V7ZM144.6 7H155.4V5H144.6V7ZM166.2 7H168V5H166.2V7Z" fill-opacity="0.7" />
                </svg>
                <p className='laptop:text-lg'>I am striving to never stop learning and improving</p>
            </div>

            {/* Card */}
            <div className="tablet:flex laptop:justify-center">

                <div className='card laptop:w-1/4'>
                    {/* Icon */}
                    <svg className='w-10 h-10 mx-auto ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"></path>
                    </svg>
                    <h3>Web Development</h3>
                    <p>HTML-CSS-JS</p>
                    <p>Laravel-ReactJS-NextJs</p>
                </div>

                <div className='card laptop:w-1/4'>
                    <svg className='w-10 h-10 mx-auto ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path>
                    </svg>
                    <h3>Android Development</h3>
                    <p>IOS - Android</p>
                </div>
            </div>

            <div className="mx-auto items-center  content-center tablet:p-10 w-fit grid grid-cols-2 tablet:grid-cols-4 container gap-16 mb-44  ">
                <div className="w-20 h-20 tablet:w-24 tablet:h-24 laptop:w-28  laptop:h-28  ">
                    <img src={html} className='rounded-full ' alt="" />
                    <h3 className="text-orange-500 text-2xl pt-3">HTML</h3>
                </div>
                <div className="w-20 h-20 tablet:w-24 tablet:h-24 laptop:w-28 laptop:h-28  ">
                    <img src={css} className='rounded-full  ' alt="" />
                    <h3 className="text-blue-500 text-2xl pt-3">CSS</h3>
                </div>
                <div className="w-20 h-20 tablet:w-24 tablet:h-24 laptop:w-28 laptop:h-28  ">
                    <img src={js} className='rounded-full ' alt="" />
                    <h3 className="text-yellow-500 text-2xl pt-3">JS</h3>
                </div>
                <div className="w-20 h-20 tablet:w-24 tablet:h-24 laptop:w-28 laptop:h-28  ">
                    <img src={react} className='rounded-full ' alt="" />
                    <h3 className="text-sky-500 text-2xl pt-3">React</h3>
                </div>
            </div>

            <div>
            </div>


        </div>
    )
}

export default Skills