import React from 'react'
import WebsitesEs from '../content/es/websites.json';
import WebsitesEn from '../content/en/websites.json';

import HeadComponent from '../components/Global/Head';
import Layout from '../components/Global/Layout';

import ServicesSection from '../components/Pages/Websites/ServicesSection';
import WebTypesSection from '../components/Pages/Websites/WebTypesSection';
import ForWhoSection from '../components/Pages/Websites/ForWhoSection';
import HeroService from '../components/Pages/Common/HeroService';
import ServicesGridBlock from '../components/Pages/Common/ServicesGridBlock';
import BlackSection from '../components/Pages/Common/BlackSection';

const websites = ({webPageData}) => {
  const data = webPageData;


  return (
    <div>
      <HeadComponent 
        title="Agencia de diseño y desarrollo de sitios WEB" 
        metaDescription="Especialistas en desarrollo web para PYMES y Startups. Diseño UX/UI - Programacion Web - Webs"
      />
      <Layout>
        <main>
          <HeroService data={data.hero} />
          <ServicesGridBlock data={data.services} />
          <ServicesGridBlock data={data.type_of_webs} bgcolor="orange" />
          <BlackSection data={data.for_who} />
        </main>
      </Layout>


    </div>
  )
}

export default websites


export async function getStaticProps({locale}) {
  const webPageData = locale === "es" ? WebsitesEs : WebsitesEn;
  return {
    props: {
      webPageData
    }, // will be passed to the page component as props
  }
}