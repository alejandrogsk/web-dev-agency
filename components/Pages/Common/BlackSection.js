import React from "react";

const BlackSection = ({ data }) => {
    const { image, images, content, title } = data;

    return (
        <section className="p-layout black-section">
            <img
              //className="black-section__img-left"
              src={image.url}
              alt={image.alt}
            />

            <div className="black-section__content">
                <div className="black-section__content-imgs">
                    {images &&
                        images.map((image, i) => (
                            <img key={i} src={image.url} alt={image.alt} />
                        ))}
                </div>

                {title && (
                    <h2 className="black-section__content-title">{title}</h2>
                )}

                {content.map((item, i) => (
                  <div key={i} className="black-section__content-box">
                    {
                      item.title && <h3>{item.title}</h3>
                    }
                    <p className="black-section__content-paragraph">
                        {item.description}
                    </p>
                  </div>
                ))}

                <div className="service_cta service_cta__black ">
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
    );
};

export default BlackSection;
