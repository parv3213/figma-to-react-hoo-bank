import React from 'react'
import styles from '../styles'
import Button from './Button'

const CTA = () => {
  return (
    <section
      id="cta"
      className="flex sm:flex-row flex-col justify-between items-center py-[4rem] px-[5rem] mt-20 rounded-[20px]"
      style={{ background: 'var(--black-gradient)' }}>
      {/* Left side */}
      <div className="flex-1 flex flex-col items-start">
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[600px]`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>

      {/* Right side */}
      <Button />
    </section>
  )
}

export default CTA
