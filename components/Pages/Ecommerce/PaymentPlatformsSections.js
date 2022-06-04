import React from 'react'
import Slider from '../../Specials/Slider';
const PaymentPlatformsSections = ({data}) => {
    const { top_title, title, platforms } = data;

  return (
    <section className="py-layout ecommerce__payments">
        <h6 className="">{top_title}</h6>
       <h2 className="">{title}</h2>

        <Slider elements={platforms} />

    </section>
  )
}

export default PaymentPlatformsSections