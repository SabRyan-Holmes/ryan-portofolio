import React from "react";
import { motion } from "framer-motion";
import Works3 from "../../assets/Works3.png";

export default function ExperienceCard() {
    return (
        <article
            className="flex  h-screen tablet:h-max flex-col unique-border items-center space-y-7 flex-shrink-0 w-[500px] justify-center
    md:w-[600px] xl:w-[900px] snap-center bg-slate-300 p-10  dark:bg-dark hover:opacity-100 opacity-40 
    cursor-pointer transition-opacity duration-200 overflow-hidden text-black dark:text-white "
        >
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 tablet:w-fit tablet:h-96 object-cover object-center rounded-xl shadow-xl"
                src={Works3}
                alt=""
            />

            <div className="px-0 md:px-10">
                <p className="font-bold text-2xl mt-1 ">Build with</p>

                <div className="flex space-x-2 my-2">
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://cdn.sanity.io/images/u8wld2x1/production/060b8d5ff687ed45fdd47d5d563848f08394269b-629x629.png?w=2000&fit=max&auto=format"
                        alt="nextJs"
                    />
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://cdn.sanity.io/images/u8wld2x1/production/afe9ce2b482f59fe8b854c39f2af06f5770e55cf-364x364.png?w=2000&fit=max&auto=format"
                        alt="Sanity"
                    />
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://cdn.sanity.io/images/u8wld2x1/production/5f0a0c46e2ca33ff65da969fb20e4242025a70f1-430x430.png?rect=17,6,380,381&w=2000&fit=max&auto=format"
                        alt="Tailwind CSS"
                    />
                </div>

                <ul
                    className="list-disc space-y-2 ml-5 text-lg max-h-96 overflow 
        scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 pb-36"
                >
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>

                </ul>
            </div>
        </article>
    );
}
