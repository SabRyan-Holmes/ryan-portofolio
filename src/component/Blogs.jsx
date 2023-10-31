import React from 'react'
import pic from '../assets/pic1.jpeg'
import MouseLine from './others/MouseLine'


const Blogs = () => {
    return (
        <section className="h-fit tablet:w-full laptop:max-w-screen-lg mx-auto dark:text-white text-secondary">
            <MouseLine />
            {/* Judul */}
            <div className="container  tablet:w-full">
                <h1 className="text-primary text-6xl">Blogs</h1>
                <svg className='w-full my-5 fill-primary ' width="174" height="12" viewBox="0 0 174 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM173.773 6L168 0.226497L162.226 6L168 11.7735L173.773 6ZM7.8 7H8.8V5H7.8V7ZM15 5H14V7H15V5ZM25.8 7H26.8V5H25.8V7ZM36.6 5H35.6V7H36.6V5ZM40.2 7H41.2V5H40.2V7ZM47.4 5H46.4V7H47.4V5ZM58.2 7H59.2V5H58.2V7ZM69 5H68V7H69V5ZM72.6 7H73.6V5H72.6V7ZM79.8 5H78.8V7H79.8V5ZM90.6 7H91.6V5H90.6V7ZM101.4 5H100.4V7H101.4V5ZM105 7H106V5H105V7ZM112.2 5H111.2V7H112.2V5ZM123 7H124V5H123V7ZM133.8 5H132.8V7H133.8V5ZM137.4 7H138.4V5H137.4V7ZM144.6 5H143.6V7H144.6V5ZM155.4 7H156.4V5H155.4V7ZM166.2 5H165.2V7H166.2V5ZM6 7H7.8V5H6V7ZM15 7H25.8V5H15V7ZM36.6 7H40.2V5H36.6V7ZM47.4 7H58.2V5H47.4V7ZM69 7H72.6V5H69V7ZM79.8 7H90.6V5H79.8V7ZM101.4 7H105V5H101.4V7ZM112.2 7H123V5H112.2V7ZM133.8 7H137.4V5H133.8V7ZM144.6 7H155.4V5H144.6V7ZM166.2 7H168V5H166.2V7Z" />
                    <path d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM173.773 6L168 0.226497L162.226 6L168 11.7735L173.773 6ZM7.8 7H8.8V5H7.8V7ZM15 5H14V7H15V5ZM25.8 7H26.8V5H25.8V7ZM36.6 5H35.6V7H36.6V5ZM40.2 7H41.2V5H40.2V7ZM47.4 5H46.4V7H47.4V5ZM58.2 7H59.2V5H58.2V7ZM69 5H68V7H69V5ZM72.6 7H73.6V5H72.6V7ZM79.8 5H78.8V7H79.8V5ZM90.6 7H91.6V5H90.6V7ZM101.4 5H100.4V7H101.4V5ZM105 7H106V5H105V7ZM112.2 5H111.2V7H112.2V5ZM123 7H124V5H123V7ZM133.8 5H132.8V7H133.8V5ZM137.4 7H138.4V5H137.4V7ZM144.6 5H143.6V7H144.6V5ZM155.4 7H156.4V5H155.4V7ZM166.2 5H165.2V7H166.2V5ZM6 7H7.8V5H6V7ZM15 7H25.8V5H15V7ZM36.6 7H40.2V5H36.6V7ZM47.4 7H58.2V5H47.4V7ZM69 7H72.6V5H69V7ZM79.8 7H90.6V5H79.8V7ZM101.4 7H105V5H101.4V7ZM112.2 7H123V5H112.2V7ZM133.8 7H137.4V5H133.8V7ZM144.6 7H155.4V5H144.6V7ZM166.2 7H168V5H166.2V7Z" fill-opacity="0.7" />
                </svg>
                <p className='laptop:text-xl'>My thoughts on technology and business, welcome to subscribe</p>
            </div>

            <div className="border-b-2 dark:border-white border-secondary w-full my-16" />
            <div className="tablet:flex justify-between">

                <img src={pic} className="m-auto tablet:w-48 tablet:h-48 tablet:m-2 tablet:pr-4 laptop:w-fit laptop:h-fit" alt="" />

                <div className="tablet:block ">
                    <h1 className="tablet:flex-none  text-primary text-left text-3xl my-7 tablet:h-1/6 tablet:mt-3 ">What does it take to become a web developer?</h1>


                    <p className="  text-left text-base">Web development, also known as website development, encompasses variety of tasls processed involved in creating website for the internet.</p>

                    <a href="#blogs" className="tablet:flex-none text-primary flex justify-start text-left underline dark:decoration-slate-100 decoration-secondary underline-offset-[6px] tablet:my-3 my-4 laptop:py-4">Read More {">>>"}</a>

                    <div className="laptop:flex w-48 justify-between items-center">
                        <div className='p-1 text-sm m-1 w-28 text-center rounded-xl dark:bg-bases bg-secondary/10 tablet:flex-none'>Web Developer</div>
                        <span className='text-left flex justify-start text-xs laptop:float-right'>10.Oct 2023</span>
                    </div>
                </div>
            </div>

            <div className="border-b-2 dark:border-white border-secondary w-full my-16" />

            <div className='flex w-full  laptop:gap-16 justify-evenly tablet:justify-around laptop:justify-center'>
                <button className='bg-primary text  rounded-3xl w-32 tablet:scale-125 '>View More</button>
                <button className='dark:bg-dark bg-secondary/10  border-primary rounded-3xl w-32 tablet:scale-125 '>Subscribe</button>
            </div>
        </section>

    )
}

export default Blogs