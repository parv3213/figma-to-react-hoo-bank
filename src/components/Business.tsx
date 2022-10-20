import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../styles'
import Button from './Button'

const Business = () => {
  return (
    <section id="features" className="md:flex-row flex-col flex items-center justify-between mb-20">
      {/* left side */}
      <div>
        <h2 className={`${styles.heading2} mb-6`}>
          You do the business, <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[570px] mb-10`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving
          money. But with hundreds of credit cards on the market.
        </p>
        <Button />
      </div>

      {/* right side */}
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => {
          return (
            <div
              className={`flex p-6 rounded-[20px] ${index === features.length - 1 ? 'mb-0' : 'mb-6'} feature-card`}
              key={feature.id}>
              <div className={`${styles.flexCenter} mr-6 w-[64px] h-[64px] rounded-[50%] bg-dimBlue`}>
                <img src={feature.icon} alt="feature-icon" className="w-[50%] h-[50%] object-contain" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-2">
                  {feature.title}
                </span>
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{feature.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Business
