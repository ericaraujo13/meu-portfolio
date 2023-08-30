import React from 'react'
import Ruby from '../../../assets/ruby.png'
import ReactIcon from '../../../assets/react.png'
import JSIcon from '../../../assets/js.png'
import Rails from '../../../assets/rails.png'
import TailwindIcon from '../../../assets/tailwindcss-icon.png'

const LanguagesComponent = () => {
  return (
    <div className='flex space-x-4 justify-center pt-4'>
      <div>
        <img src={Ruby} alt="ruby" className='w-[80px] rounded-xl bg-white p-2' />
      </div>
      <div>
        <img src={ReactIcon} alt="react" className='w-[80px] rounded-xl bg-white p-2' />
      </div>
      <div>
        <img src={JSIcon} alt="js" className='w-[80px] rounded-xl bg-white p-2' />
      </div>
      <div>
        <img src={Rails} alt="rails" className='w-[80px] rounded-xl bg-white p-2' />
      </div>
      <div>
        <img src={TailwindIcon} alt="tailwindcss" className='w-[80px] rounded-xl bg-white p-2' />
      </div>
    </div>
  )
}

export default LanguagesComponent
