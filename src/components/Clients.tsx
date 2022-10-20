import React from 'react'
import { clients } from '../constants'

const Clients = () => {
  return (
    <section id="clients" className="flex flex-wrap justify-center items-center">
      {clients.map((client) => (
        <div key={client.id} className="flex-1 flex justify-center items-center">
          <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </section>
  )
}

export default Clients
