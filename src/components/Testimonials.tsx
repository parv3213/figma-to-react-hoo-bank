import React from 'react'
import { quotes } from '../assets'
import { feedback as feedbacks } from '../constants'
import styles, { layout } from '../styles'

const Testimonials = () => {
  return (
    <section id="testimonials" className={`${styles.paddingY}`}>
      <div className={`flex md:flex-row flex-col relative mb-10 justify-between items-center`}>
        {/* Left Side */}
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div>
          <h2 className={`w-full ${styles.heading2}`}>
            What people are
            <br className="sm:block hidden" />
            saying about us
          </h2>
        </div>

        {/* Right Side */}
        <div>
          <p className={`w-full ${styles.paragraph} text-left max-w-[570px]`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      {/* Feedback */}
      <div className="w-full h-full flex flex-wrap md:flex-row flex-col justify-between md:items-start items-center">
        {feedbacks.map((feedback) => {
          return (
            <div
              key={feedback.id}
              className={`flex flex-col px-10 py-12 feature-card max-w-[370px] rounded-[20px] justify-between`}>
              <img src={quotes} alt="quotes" className="w-[42.6px] h-[27.6px] object-contain" />
              <p className={`my-10 font-poppins font-normal text-white text-[18px] leading-[32.4px]`}>
                {feedback.content}
              </p>

              <div className="flex items-center">
                <img src={feedback.img} alt="feedbackUserImage" className="w-[48px] h-[48px] rounded-full" />
                <div className="flex flex-col ml-4">
                  <span className="font-poppins font-normal text-white text-[20px] leading-[32px]">
                    {feedback.name}
                  </span>
                  <span className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                    {feedback.title}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonials
