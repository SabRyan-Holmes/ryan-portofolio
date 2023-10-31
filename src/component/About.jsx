import React from 'react'
import pic from '../assets/pic3.png'
const About = () => {
    return (
        // untuk BG nanti
        <div className="h-screen laptop:h-full bg-bg laptop:flex px-5 laptop:px-14 laptop:items-end pb-36 mb-64 laptop:mb-0">
            <div className=" tablet:max-w-screen-tablet laptop:max-w-screen-laptop laptop:w-full">
                <div className="flex justify-center laptop:pl-4 tablet:justify-start py-36 pb-10">
                    <div className="unique-border dark:bg-bases bg-slate-400">
                        <h1 className="text-4xl py-2 dark:text-white text-secondary">About Me</h1>
                    </div>
                </div>



                {/* Kotak */}
                <div className="laptop:w-fit px-7  text-left bg-slate-400 text-dark dark:text-white dark:bg-bases py-7  rounded-[60px]  ">
                    <span className="text-primary ">{"<p>"}</span>
                    <div className="">
                        {/* Paragraf */}
                        <h1 className='text-primary font-signika'>Hello!</h1>
                        <p className='py-3'>My name is Ryan and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc.</p>

                        <p>I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving. </p>

                        <p className="py-3">When I'm not coding, I am playing guitar, reading, or do weight lifting and boxing </p>

                        <p>I like to have my perspective and belief systems challenged so that I see the world through new eyes. </p>
                    </div>
                    <span className="text-primary">{"<p>"}</span>
                </div>
            </div>

            {/* Pic */}
            <div className='container flex justify-center items-center  py-7 w-48 h-48 tablet:w-80 tablet:h-80 laptop:p-10  laptop:w-96 laptop:h-96 '>
                <img src={pic} alt="" className="rounded-2xl   " />
            </div>
        </div>
    )
}

export default About