import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import TailwindCss from '../assets/tailwind.png'
import JavaScript from '../assets/javascript.png'
import Reactjs from '../assets/react.png'
import Github from '../assets/github.png'
import Firebase from '../assets/firebase.png'
 import Graphic from '../assets/graphics.png'

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300 '>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Skills</p>
                    <p className='py-4'> There are the Technologies I've worked with</p>

                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-ad shadow-[#040c16] hover:scale-110 duration-500' >
                        <img className='w-20 mx-auto' src={Html} alt='html logo' />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-ad shadow-[#040c16] hover:scale-110 duration-500' >
                        <img className='w-20 mx-auto' src={Css} alt='Css logo' />
                        <p className='my-4'>Css</p>
                    </div>  <div className='shadow-ad shadow-[#040c16] hover:scale-110 duration-500' >
                        <img className='w-20 mx-auto' src={TailwindCss} alt='TailwindCss logo' />
                        <p className='my-4'>TailwindCss</p>
                    </div>  <div className='shadow-ad shadow-[#040c16] hover:scale-110 duration-500' >
                        <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript logo' />
                        <p className='my-4'>JavaScript</p>
                    </div>  <div className='shadow-ad shadow-[#040c16] hover:scale-110 duration-500' >
                        <img className='w-20 mx-auto' src={Reactjs} alt='Reactjs logo' />
                        <p className='my-4'>Reactjs</p>
                    </div>  <div className='shadow-ad shadow-[#040c16] hover:scale-110 duration-500' >
                        <img className='w-20 mx-auto' src={Github} alt='Github logo' />
                        <p className='my-4'>Github</p>
                    </div>  <div className='shadow-ad shadow-[#040c16] hover:scale-110 duration-500' >
                        <img className='w-20 mx-auto' src={Firebase} alt='Firebase logo' />
                        <p className='my-4'>Firebase</p>
                    </div>  
                    <div className='shadow-ad shadow-[#040c16] hover:scale-110 duration-500 ' >
                        <img className='w-20 mx-auto' src={Graphic} alt='Graphic logo' />
                        <p className='my-4'>Graphic Designing</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Skills