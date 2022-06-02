import React from 'react'
const PlatformsSections = ({data}) => {
    const { image, images, content } = data;
  return (
    <section className="bg-ui-black py-20 md:py-36 px-4  sm:px-8 md:px-12 mx:px-20 grid  items-center	justify-items-center gap-12 grid-cols-1 md:grid-cols-2">

        <img className="ecommerce-patforms__img"src={image.url} alt={image.alt} />

        <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-0 mb-12 items-center	">
            {
                images.map((image, i) => (
                    <img key={i} src={image.url}  alt={image.alt}/>
                ))
            }
            </div>
            {
                content.map((paragraph, i) => (
                    <p key={i} className="pt-4 text-xl md:text-2xl text-white">{paragraph}</p>
                ))
            }
        </div>
    </section>
  )
}

export default PlatformsSections