import React from 'react'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
import styles from '../styles'

const FooterList = ({ title, links }: { title: string; links: { name: string; link: string }[] }) => {
  return (
    <div className="flex flex-col ss:my-0 my-4 min-w-[150px]" key={title}>
      <p className="font-poppins font-normal text-white text-[18px] leading-[27px] mb-4">{title}</p>
      {links.map((link, index) => {
        return (
          <a
            href={link.link}
            className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px]
          ${index === links.length ? 'mb-0' : 'mb-2'}`}>
            {link.name}
          </a>
        )
      })}
    </div>
  )
}

const Footer = () => {
  return (
    <section id="footer" className={`${styles.paddingY} ${styles.flexCenter} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        {/* Col-1 */}
        <div className="flex-1 mr-10">
          <img src={logo} alt="logo" className="w-[266px] h-[73px]" />
          <p className={`${styles.paragraph} max-w-[312px] mt-4`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        {/* Map col */}
        <div className="flex-[1.5] flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => {
            return <FooterList key={footerLink.title} title={footerLink.title} links={footerLink.links}></FooterList>
          })}
        </div>
      </div>

      <div className="flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-normal text-center text-white text-[18px] leading-[27px]">
          Copyright 2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => {
            return (
              <img
                src={social.icon}
                alt="social"
                key={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
                }`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Footer
