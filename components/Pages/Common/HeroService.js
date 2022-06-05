import React from 'react'

const HeroService = ({data}) => {
    const { title, subtitle, content } = data;
  return (
    <section className="service-hero mx-layout ">
            <h1 className="a-slideInLeft a-t-800">
                {title}
                <span className="orange-point">.</span>
            </h1>
            <h2 className="a-slideInLeft a-t-1000">{subtitle}</h2>

            <div className="service-hero__content">
                {content.map((paragraph, i) => {
                    let timingClassValue = [700,800,900];

                    return( <p key={i} className={`a-slideInRight a-t-${timingClassValue[i]}`}>
                    {paragraph}
                </p>)
                })}

                <div className="service_cta service_cta__transparent a-slideInRight a-t-1000">
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