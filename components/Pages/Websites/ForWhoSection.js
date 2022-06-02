import React from 'react'

const ForWhoSection = ({data}) => {
  const { image, title, cases } = data;
  return (
    <section className="
    bg-ui-black py-20 md:py-36 px-4 py-20 sm:px-8 md:px-12 mx:px-20 
    grid justify-items-center items-center
    gap-12 
    grid-cols-1 md:grid-cols-3
    ">

        <img className="ecommerce-patforms__img" src={image.url} alt={image.alt} />

        <div className="flex flex-col justify-center
        col-start-1 col-end-2
        md:col-start-2 md:col-end-4	
">
            <h2 className="text-white text-3xl md:text-5xl	font-semibold">{title}</h2>
        
            {
                cases.map((caso, i) => {
                    return(
                        <div key={i}>
                        <h3 className="pt-8 font-semibold text-2xl md:text-3xl text-white">
                            {caso.title}
                        </h3>
                        <p className="pt-2 text-xl md:text-2xl text-white">{caso.description}</p>
                    </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default ForWhoSection