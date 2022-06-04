import React from 'react'
import Image from 'next/image'
const MobileSection = ({data}) => {
    const {title, subtitle, img_url, title_two, subtitle_two} = data;

  return (
    <section className="ecommerce__responsive-section p-layout">
        <div>
            <h2 className="">{title}</h2>
            <p className="">{subtitle}</p>
        </div>
        <div style={{position:"relative"}}>
            <Image width="625" height="429" src={img_url}/>
        </div>
        <div>
            <h3 className="text-3xl md:text-4xl	font-semibold text-white">{title_two}</h3>
            <p className="pt-2 text-xl text-white">{subtitle_two}</p>
        </div>
    </section>
  )
}

export default MobileSection