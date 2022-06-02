import React from 'react'
import Slider from '../../Specials/Slider';
const PaymentPlatformsSections = ({data}) => {
    const { top_title, title, platforms } = data;

  return (
    <section className="bg-white py-20">
        <h6 className="text-lg md:text-xl text-ui-gray-normal font-medium	 text-center	">{top_title}</h6>
       <h2 className='text-3xl md:text-5xl	font-semibold text-ui-black text-center	'>{title}</h2>

        <Slider elements={platforms} />

    </section>
  )
}

export default PaymentPlatformsSections