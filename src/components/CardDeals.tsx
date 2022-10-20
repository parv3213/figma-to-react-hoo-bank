import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../styles'
import Button from './Button'

const CardDeals = () => {
  return (
    <section id="cardDeals" className={`${styles.paddingY} md:flex-row flex-col flex items-center justify-between`}>
      {/* Left Side */}
      <div className="flex-1">
        <h2 className={`${styles.heading2} mb-6`}>
          Find a better card deal
          <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[570px] mb-10`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet
          ultrices ac, ametau.
        </p>
        <Button />
      </div>

      {/* Right Side */}
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
}

export default CardDeals
