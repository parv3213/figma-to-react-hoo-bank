import React from 'react'
import { apple, bill, google } from '../assets'
import styles from '../styles'

const Billing = () => {
  return (
    <section id="billing" className="flex md:flex-row flex-col-reverse relative sm:py-16 py-6">
      {/* Left side */}
      <div>
        <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[3] w-[50%] h-[50%] rounded-full white__gradient -left-1/2 top-0" />
        <div className="absolute z-[0] w-[50%] h-[50%] rounded-full pink__gradient -left-1/2 bottom-0" />
      </div>

      {/* Right side */}
      <div className="flex flex-col items-start justify-center">
        <h2 className={`${styles.heading2} mb-6`}>Easily control your billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] sm:mb-10 mb-6`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus
          aliporttitor integer platea placerat.
        </p>
        <div className="flex">
          <img src={apple} alt="apple" className="sm:mr-10 mr-6 cursor-pointer" />
          <img src={google} alt="google" className="cursor-pointer" />
        </div>
      </div>
    </section>
  )
}

export default Billing
