import React from 'react'
import MarketingSpanish from '../content/es/marketing.json';
import MarketingEnglish from '../content/en/marketing.json';
import HeadComponent from '../components/Global/Head';
import Layout from '../components/Global/Layout';
import HeroService from '../components/Pages/Common/HeroService';


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