import React from 'react'
import { stats } from '../constants'
import styles from '../constants/style'

type Props = {}

export default function Stats({}: Props) {
  return (
  <section className={`${styles.flexCenter} flex-col ss:flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold md:text-[40.89px] text-[30.89px] md:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal md:text-[20.45px] text-[15.45px] md:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
  )
}