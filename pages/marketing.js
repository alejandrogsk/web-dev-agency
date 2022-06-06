import React from 'react'
import MarketingSpanish from '../content/es/marketing.json';
import MarketingEnglish from '../content/en/marketing.json';
import HeadComponent from '../components/Global/Head';
import Layout from '../components/Global/Layout';
import HeroService from '../components/Pages/Common/HeroService';

import ServicesGridBlock from "../components/Pages/Common/ServicesGridBlock";
const marketing = ({marketingData}) => {


  return (
    <div>
    <HeadComponent
        title="Agencia especializada diseño y desarrollo de ECOMMERCE | 2022" 
        metaDescription="Tu tienda online a medida. Creamos tu tienda para que puedas comenzar a VENDER más online en 2022"
      />

    <Layout>
      <main className="relative overflow-x-clip">
        <HeroService data={marketingData.hero} />

        <section className="marketing-content__google p-layout">
         
          <div className="marketing-content__google--content">
              <h2>{marketingData.google_ads.title}</h2>
              {
                marketingData.google_ads.content.map((paragraph,i)=> <p key={i}>{paragraph}</p>)
              }
          </div>
          
          <img className="marketing-content__google--img" src={marketingData.google_ads.img.url} alt={marketingData.google_ads.img.alt}/>

          <div className="marketing-content__google--grid ">
            {
              
              marketingData.google_ads.services.list.map((element,i) =>(
                <div key={i} className="marketing-content__google--grid-element">
                  <span>{element.counter}</span>
                  <h3>{element.title}</h3>
                  <p>{element.contnent}</p>
                </div>
              ))
            }
          </div>
        </section>

        <section className="marketing-content__divisor p-layout" >
            <h2>{marketingData.divisor}</h2>
        </section>

        <section className="marketing-content__facebook p-layout">
         
          <div className="marketing-content__facebook--content">
              <h2>{marketingData.facebook_ads.title}</h2>
              {
                marketingData.facebook_ads.content.map((paragraph,i)=> <p key={i}>{paragraph}</p>)
              }
          </div>
          
          <img className="marketing-content__facebook--img" src={marketingData.facebook_ads.img.url} alt={marketingData.google_ads.img.alt}/>

          <div className="marketing-content__facebook--grid ">
            {
              
              marketingData.facebook_ads.services.list.map((element,i) =>(
                <div key={i} className="marketing-content__facebook--grid-element">
                  <span>{element.counter}</span>
                  <h3>{element.title}</h3>
                  <p>{element.contnent}</p>
                </div>
              ))
            }
          </div>
        </section>

        <section className="marketing-content__emarketing p-layout">
         
          <div className="marketing-content__emarketing--content">
              <h2>{marketingData.email_marketing.title}</h2>
              {
                marketingData.email_marketing.content.map((paragraph,i)=> <p key={i}>{paragraph}</p>)
              }
          </div>
          
          <img className="marketing-content__emarketing--img" src={marketingData.email_marketing.img.url} alt={marketingData.google_ads.img.alt}/>

          <div className="marketing-content__emarketing--grid ">
            {
              
              marketingData.email_marketing.services.list.map((element,i) =>(
                <div key={i} className="marketing-content__emarketing--grid-element">
                  <span>{element.counter}</span>
                  <h3>{element.title}</h3>
                  <p>{element.contnent}</p>
                </div>
              ))
            }
          </div>
        </section>

      </main>
    </Layout>
</div>
  )
}

export default marketing

export async function getStaticProps({locale}) {
    const marketingData = locale === "es" ? MarketingSpanish : MarketingEnglish;
    return {
      props: {
        marketingData
      }, // will be passed to the page component as props
    }
  }