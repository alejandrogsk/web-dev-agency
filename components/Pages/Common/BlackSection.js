import React from 'react'

const BlackSection = ({data}) => {
    const { image, images, content, title } = data;
    return (
      <section className="p-layout black-section">
  
        <img 
          className="black-section__img-left"
          src={image.url}
          alt={image.alt} 
        />
  
          <div className="black-section__content">


              <div className="black-section__content-imgs">
              { images &&
                images.map((image, i) => (
                    <img key={i} src={image.url}  alt={image.alt}/>
                ))
              }
              </div>

                {
                  title && <h2 className="black-section__content-title">{title}</h2>
                }
              
              {
                content.map((paragraph, i) => (
                    <p key={i} className="black-section__content-paragraph">{paragraph}</p>
                ))
              }
          </div>
      </section>
    )
}

export default BlackSection