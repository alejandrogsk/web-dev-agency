import Link from 'next/link';
import React from 'react'




const ServicesSection = ({services}) => {


  const { before_title, title, services_list } = services;


  return (
    <section className='home-ss p-layout '>

        
      <h6 className=''>{before_title}</h6>
      <h2 className=''>{title}</h2>

        <div className='home-ss__grid '>
          {
            services_list.map((item, i) => (
              <Link key={i} href="/ecommerce">
              <div  className='home-ss__grid--item'>
                <div className=''>
                 <img src={item.img_url} />
                </div>
                <h3 className=''>{item.title}</h3>
                <a className=''>{item.link}</a>
              </div>
              </Link>
            ))
          }
        </div>
        
    </section>
  )
}

export default ServicesSection