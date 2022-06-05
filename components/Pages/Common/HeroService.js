import React from 'react'

const HeroService = ({data}) => {
    const { title, subtitle, content } = data;
  return (
    <section className="service-hero mx-layout ">
            <h1 className="">
                {title}
                <span className="orange-point">.</span>
            </h1>
            <h2 className="">{subtitle}</h2>

            <div className="service-hero__content">
                {content.map((paragraph, i) => (

                    <p key={i} className="">
                        {paragraph}
                    </p>
                ))}

                <div className="service_cta service_cta__transparent ">
                    <a>¡Comenzemos con tu proyecto!</a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="inherit"
                        height="inherit"
                        viewBox="0 0 24 24"
                    >
                        <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
                    </svg>
                </div>
            </div>
        </section>
  )
}

export default HeroService