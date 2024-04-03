import React from 'react'

const Feature = ({ w, heading, headingImg, text, image }) => {
    return (
        <div className='flex flex-col relative'>
            <h1 className='text-2xl my-5'>{headingImg} {heading}</h1>
            <div className={`relative h-3/6 ${(w < 450) ? "w-full" : "w-1/2"}`}>
                <div className='absolute w-full z-10  top-0 flex  text-center items-center' style={{height:`${(w<450)? "160%" : "175%"}`,color:"#C4E4FF",backdropFilter:"blur(5px)"}}>
                    <h1 className={`${(w < 450) ? "text2xl" : "text-3xl"} `}> {text}</h1>
                </div>
                <img className='rounded-2xl' style={{filter:"brightness(50%)"}} src={image} />
            </div>
        </div>
    )
}

export default Feature
