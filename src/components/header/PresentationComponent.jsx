import React from 'react'
import HistoryComponent from './components/HistoryComponent'
import Pc from '../../assets/pc.png'
import LanguagesComponent from './components/LanguagesComponent'
import SocialsComponent from './components/SocialsComponent'

const PresentationComponent = () => {
  return (
    <div className='text-white'>
      <div className='flex justify-between items-center mx-auto'>
        <div>
          <h1 className='font-bold text-6xl'>Eric Poloni Araújo_</h1>
          <HistoryComponent/>
          <SocialsComponent/>
        </div>
        <div className='mr-[100px]'>
          <img src={Pc} className='w-[600px]'></img>
        </div>
      </div>

      <div>
        <h1 className='text-center mt-12 uppercase text-2xl font-semibold'>
          Aqui estão algumas tecnologias que trabalho
        </h1>
        <div>
          <LanguagesComponent/>
        </div>
      </div>
    </div>
  )
}

export default PresentationComponent
