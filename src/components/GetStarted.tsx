import React from 'react'
import { arrowUp } from '../assets'
import styles from '../styles'

const GetStarted = () => {
  return (
    <div className={`w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} bg-primary w-[100%] h-[100%] rounded-full`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <div className="flex flex-start">
            <span className="text-gradient">Get</span>
            <img src={arrowUp} alt="arrowUp" className="w-[23px] h-[23px] object-container ml-2" />
          </div>
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted
