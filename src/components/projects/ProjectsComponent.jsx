import React from 'react'
import CardProject from './components/CardProject'

const ProjectsComponent = () => {
  return (
    <div className='text-white mt-8'>
      <div className='text-center text-3xl'>
        <h2 className='font-bold '>Meus projetos</h2>
      </div>
      <CardProject/>
    </div>
  )
}

export default ProjectsComponent
