import Layout from "../components/Global/Layout";
//content
import HomeSpanish from "../content/es/home.json";
import HomeEnglish from "../content/en/home.json";
import HeroSection from "../components/Pages/Home/HeroSection";
import MethodologySection from "../components/Pages/Home/MethodologySection";
import ServicesSection from "../components/Pages/Home/ServicesSection";
import BlogPostsSection from "../components/Pages/Home/BlogPostsSection";
import HeadComponent from '../components/Global/Head';
export default function Home({ homeData }) {
  return (
    <div >
    <HeadComponent
        title="Especialistas en sitios web | Crespo - Entre Ríos." 
        metaDescription="Especialistas en desarrollo web, ecommerce y marketing digital. | PYMES - Startups"
      />

    <Layout>
        <main style={{overflowX:"hidden", position:"relative"}}>
            {/**This is a background blob */}
            <svg
                className="home-hs__blob"
                width="1000"
                height="921"
                viewBox="0 0 1000 921"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M999.641 498.849C991.957 693.494 810.289 810.813 625.397 872.135C435.762 935.029 210.903 958.683 87.9121 801.234C-45.6911 630.199 -18.0069 387.773 110.312 212.739C236.848 40.138 455.211 -43.2235 658.943 22.3199C864.449 88.4343 1008.16 283.138 999.641 498.849Z"
                    fill="#ECECEC"
                    fillOpacity="0.7"
                />
            </svg>
            {/**blob end */}


            <HeroSection hero={homeData.hero}  />
                  
            <MethodologySection methodology={homeData.methodology} />

            <ServicesSection services={homeData.services} />

            <BlogPostsSection blog={homeData.blog} /> 
        </main>
    </Layout>
</div>
  )
}


export async function getStaticProps({locale}) {
  const homeData = locale === "es" ? HomeSpanish : HomeEnglish;
  return {
    props: {
      homeData
    }, // will be passed to the page component as props
  }
}