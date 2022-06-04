import React from 'react'

//Color could be gray black white orange
const ServicesGridBlock = ({data, bgcolor="gray"}) => {
const {top_title, title, list} = data;
  return (
    <section className={`service-services service-services__${bgcolor}  p-layout`}>
        <h6>{top_title}</h6>
        <h2>{title}</h2>
        <div className="grid-block-3">
            {
            list.map((element,i) => {
                return(
                    <div key={i} className="grid-block-3__element">
                        {
                            element.img_url && <img src={element.img_url} alt={element.title}/>
                        }
                        {
                            element.count && <span>{element.count}</span>
                        }
                        <h3>{element.title}</h3>
                        <p>{element.description}</p>
                    </div>
                )
            })
            }
        </div>
    </section>
  )
}

export default ServicesGridBlock