import Head from 'next/head'
import Layout from "../components/Global/Layout";
import HeroSection from '../components/Pages/Ecommerce/HeroSection';
import MobileSection from '../components/Pages/Ecommerce/MobileSection';
import PaymentPlatformsSections from '../components/Pages/Ecommerce/PaymentPlatformsSections';
import PlatformsSections from '../components/Pages/Ecommerce/PlatformsSections';
import ServicesSection from '../components/Pages/Ecommerce/ServicesSection';


import EcommerceSpanish from "../content/es/ecommerce.json";
import EcommerceEnglish from "../content/en/ecommerce.json";
import HeadComponent from '../components/Global/Head';

export default function Home({ ecommerceData }) {
  // const { locale } = useRouter();
  // const data = locale === "es" ? HomeSpanish : HomeEnglish;

  const data = ecommerceData;
  return (
    <div>
    <HeadComponent
        title="Agencia especializada diseño y desarrollo de ECOMMERCE | 2022" 
        metaDescription="Tu tienda online a medida. Creamos tu tienda para que puedas comenzar a VENDER más online en 2022"
      />

    <Layout>
        <main className="relative overflow-x-clip">
           <HeroSection data={data.hero} />
           <ServicesSection data={data.services}/>
           <PaymentPlatformsSections data={data.payments}/>
           <MobileSection data={data.mobile_content} />
           <PlatformsSections data={data.platforms} />
        </main>
    </Layout>
</div>
  )
}


export async function getStaticProps({locale}) {
  const ecommerceData = locale === "es" ? EcommerceSpanish : EcommerceEnglish;
  return {
    props: {
      ecommerceData
    }, // will be passed to the page component as props
  }
}