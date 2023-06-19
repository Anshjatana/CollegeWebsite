import React from 'react'

export default function Home() {
  const divStyle = {
    background: 'linear-gradient(270deg, rgba(74,74,75,1) 0%, rgba(238,238,242,1) 45%)',
  };
  return (
    <div  style={divStyle}>
      <div className='flex flex-row-reverse home'>
        <img src='https://images.shiksha.com/mediadata/images/1610359750phpwockaj.png' alt='img' className='w-[49%] mr-4 mt-8 mb-8 ml-2 img '></img>
        <div id='about' className='pl-[50px] pr-[90px]'><h1 className='text-3xl font-bold pt-10  w-auto'>Atma Ram Sanatan Dharma College </h1>
        <h2 className='text-2xl font-bold pt-3  w-auto'>University of Delhi</h2>
        <p className=' mt-10 font-semibold'>Atma Ram Sanatan Dharma College is a premier educational institution of Delhi University which aims to nurture excellence in education. It emphasizes on fostering the quality of human resources and promoting productive ideas that benefit the students.The College takes pride in its past achievements and looks to the future with great hope and determination.</p>
        <p className=' mt-10 mb-4 text-lg text-red-900 font-bold'>-ARSD holds 6th position in NIRF ranking 2023.</p>
        <p className=' mt-2 mb-4 text-lg text-red-900 font-bold'>-Also, NAAC has given A++ grade to the College.</p></div>
      </div>
    </div>
  )
}
