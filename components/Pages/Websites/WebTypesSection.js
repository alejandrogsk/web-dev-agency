import React from 'react'

const WebTypesSection = ({data}) => {
  const { top_title, title, webs_list } = data;
  return (
    <section className="grid content-center	 bg-ui-orange-main py-20 md:py-36 px-4 sm:px-8  md:px-12 mx:px-20">
        <div>
            <h6 className="uppercase text-md md:text-sm  text-ui-white font-medium	 text-center	">{top_title}</h6>
            <h2 className='capitalize text-3xl md:text-5xl	font-semibold text-ui-white text-center	'>{title}</h2>
            <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                { 
                    webs_list.map((service,i) => (
                        <div key={i} className="bg-white rounded p-4 web-type">
                            <span className="text-ui-orange-main text-xl font-bold ">{service.count}</span>
                            <h3 className="capitalize text-xl font-medium ">{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default WebTypesSection