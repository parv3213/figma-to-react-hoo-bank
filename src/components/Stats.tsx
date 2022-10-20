import React from 'react'
import styles from '../styles'
import { stats } from '../constants'

const Stats = () => {
  return (
    <section id="stats" className={`flex items-center justify-between flex-wrap sm:mb-[6rem] mb-6`}>
      {stats.map((stat) => {
        return (
          <div key={stat.id} className={`flex-1 flex justify-start items-center m-3`}>
            <span className="font-poppins font-semibold	text-[40.89px] leading-[53.16px] text-white">{stat.value}</span>
            <span className="font-poppins font-normal text-[20.45px] leading-[26.58px] text-gradient ml-3">
              {stat.title}
            </span>
          </div>
        )
      })}
    </section>
  )
}

export default Stats
