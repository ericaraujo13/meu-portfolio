import React from 'react'
import NovoCaminho from '../../../assets/novocaminho.png'
import Construcao from '../../../assets/construcao.jpg'

const CardProject = () => {
  return (
    <div className="flex space-x-6 mt-9">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="https://novocaminhoapp.fly.dev" target='_blank'>
          <img class="rounded-t-lg" src={NovoCaminho} alt="" />
        </a>
        <div class="p-5">
            <a href="https://novocaminhoapp.fly.dev" target='_blank'>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Projeto Open Source</h5>
            </a>
            <p class="mb-3 font-mono text-gray-700">Projeto desenvolvido para uma ong da minha cidade, com intuito de facilitar a adoção de animais e administração de recursos da ong.</p>
            <a href="https://novocaminhoapp.fly.dev" target='_blank' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#5AE4A7] rounded-lg hover:bg-black hover:ring-2 hover:ring-[#5AE4A7]">
                Ver mais
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
      </div>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div>
          <img class="rounded-t-lg" src={Construcao} alt="" className='w-auto h-[200px] ml-[22%]' />
        </div>
        <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Plataforma de Estoque</h5>
            </a>
            <p class="mb-3 font-mono text-gray-700">Em desenvolvimento</p>
        </div>
      </div>
    </div>
  )
}

export default CardProject
