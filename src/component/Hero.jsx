import React from 'react'
import profil_pic from '../assets/Non-Formal-New.jpg'
import download from '../assets/download.png'


const Hero = () => {
    return (

        <div className="w-full h-fit laptop:flex justify-center gap-12 laptop:items-center laptop:px-32 text-black dark:text-white">
            {/* Kotak */}
            <div className='w-full tablet:mx-auto  hero'>
                <div className='w-full mx-auto mb-10 mt-10'>
                    <img src={profil_pic} alt="" className='m-auto h-36 border-2 bg-cover border-primary rounded-full w-36' />
                    <h1 className='text-4xl mt-4'>Ryan</h1>
                    <h1 className='text-xl mt-1 '>Full-stack Developer </h1>
                </div>

                <div className='w-full h-full m-6 pb-2 '>
                    <div className='flex'>
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="fill-none stroke-primary w-6 h-6 mt-2 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                        </svg>
                        <p className='text-base  m-2 '>sabrian101maulana@gmail.com</p>
                    </div>
                    <div className='flex'>
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="fill-none stroke-primary w-6 h-6 mt-2 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                        </svg>
                        <p className='text-base  m-2 '>Indonesia</p>
                    </div>
                    <div className='flex'>
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="fill-none stroke-primary w-6 h-6 mt-2 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"></path>
                        </svg>                            <p className='text-base  m-2 '>Full-time/ Freelancer</p>
                    </div>
                    <div className='flex'>
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="fill-none stroke-primary w-6 h-6 mt-2 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path>
                        </svg>
                        <p className='text-base  m-2 '>www.ryangacorkang.com</p>
                    </div>

                    <div className="flex mb-7 mt-1">
                        <p className='text-base text-secondary mr-3 bg-primary p-1 border rounded-lg border-primary tablet:px-2'>HTML</p>
                        <p className='text-base text-secondary mr-3 bg-primary p-1 border rounded-lg border-primary tablet:px-2'>CSS</p>
                        <p className='text-base text-secondary mr-3 bg-primary p-1 border rounded-lg border-primary tablet:px-2'>JS</p>
                        <p className='text-base text-secondary mr-3 bg-primary p-1 border rounded-lg border-primary tablet:px-2'>Laravel</p>
                        <p className='text-base text-secondary mr-3 bg-primary p-1 border rounded-lg border-primary tablet:px-2'>React</p>
                    </div>

                    <button className="w-64 -ml-1 flex justify-start py-2   dark:bg-white text-secondary bg-primary rounded-3xl text-2xl text-left">Download CV <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    </button>
                </div>
            </div>

            {/* H1 */}
            <div className="tablet:flex laptop:px-7 ">
                <div className="tablet:ml-2">
                    <div className='text-left w-fit'>
                        <span className='text-primary'>{"<h1>"}</span>
                        <h1 className='text-3xl laptop:text-4xl ml-10 text-black dark:text-white'>
                            Hey,
                            <span className='block '> I'm <span className='text-primary '>Ryan</span>,</span>

                            Fullstack Developer
                        </h1>
                        <span className='text-primary'>{"</h1>"}</span>
                    </div>

                    {/* p */}
                    <div className='text-left mt-7 laptop:px-0'>
                        <span className='text-primary'>{"<p>"}</span>
                        <p className='text-lg ml-10'>
                            I help business grow by crafting amazing web experience. If you're looking for a developer that likes to get stuff done
                        </p>
                        <span className='text-primary'>{"</p>"}</span>
                    </div>

                    <div className='tablet:flex justify-start'>
                        <div className='flex justify-center items-center'>
                            <h1 className='text-primary m-4 laptop:ml-10 text-4xl tablet:flex tablet:justify-start '>Let's Talk</h1>
                            <div className='bg-secondary/20 w-10 h-10 rounded-full flex items-center justify-center justify-items-center  ml-0 '>
                                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="fill-none stroke-primary  w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="w-fit mx-auto laptop:w-full ">
                    <div className="w-[240px] container border bg-secondary/10 dark:bg-dark border-secondary rounded-[80px] py-16 ">
                        <div className="flex items-center container text-left ">
                            <h3 className="text-primary mr-3 text-5xl">7</h3>
                            <p className="text-black dark:text-white">Programming Language</p>
                        </div>
                        <div className="flex items-center container  py-16 text-left ">
                            <h3 className="text-primary mr-3 text-5xl">9</h3>
                            <p className="text-black dark:text-white">Development Tools</p>
                        </div>
                        <div className="flex items-center container  text-left ">
                            <h3 className="text-primary mr-3 text-5xl">7</h3>
                            <p className="text-black dark:text-white">Years of Experiences</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Hero