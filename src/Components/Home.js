import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>Home

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold'>Sami</h1>
                <h2 className='text-4xl sm:text-7xl font-bold'>I am ReactJs Developer</h2>

                <p className='text-[#8892b0] py-4 mx-[700px'> I’m a ReactJs developer specializing in building (and occasionally
                    designing) exceptional digital experiences. Currently, I’m focused on
                    building responsive full-stack web applications.</p>
                <div>
                    <button className='text-white border-2 mx-auto px-8 py-3 my-2 flex  items-center hover:bg-pink-600 hover:border-pink-600'>View Work
                        <span className='hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Home