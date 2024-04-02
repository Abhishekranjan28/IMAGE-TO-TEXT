import React from 'react'
import Services from './Services'
import AboutUs from './AboutUs'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='overflow-hidden flex flex-col justify-center items-center min-h-[100vh]'>
            <div className='bg-[#122378ba] my-[2vw]  rounded-[3vw]  text-white flex gap-[2vw] justify-center items-center h-[10vh]'>
                {
                    ["upload", "AboutUs"].map((item, idx) => {
                        return (
                            <Link to={`/${item}`} key={idx}>
                                <div className='text-[2vw]  font-bold uppercase  cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-600 rounded-full p-2'>
                                    {item}
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
            <div className='w-full bg-yellow-600 flex  justify-center items-center rounded-t-[2vw] h-[35vw]'>
                <div className='w-2/3 p-[3vw] text-white text-[1.8vw] h-[30vw]'>
                "Imagine the thrill of turning your images into words with a mere click. It's like witnessing a fascinating metamorphosis – from pixels to paragraphs, with just a simple upload. Picture this: you provide the image, and in return, we unveil the hidden text within. It's a journey of discovery, where visuals transcend their static form and come alive with meaningful content. Experience the sheer wonder of this seamless process as your images unravel their stories, transforming into text right before your eyes. It's not just a service; it's a doorway to endless possibilities, where every image holds the promise of a captivating narrative waiting to be unveiled."
                </div>
                <div className='w-1/3 object-cover bg-center p-[3vw] rounded-lg'>
<img src='https://plus.unsplash.com/premium_photo-1682024745224-2edf92747598?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-[30vw]'></img>
                </div>
            </div>
            <Services/>
        </div>
    )
}

export default Home