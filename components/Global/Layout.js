
import { useRouter } from "next/router";
import { useEffect, useState} from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";


const menues = {
    es: {
        cta: {
            title:"Contactanos Ahora",
            link:"/contact"
        },
        menu: [
            { title: "Inicio", link: "/" },
            { title: "UX/UI", link: "/" },
            { title: "Branding", link: "/" },
            { title: "Ecommerce", link: "/ecommerce" },
            { title: "Websites", link: "/websites" },
            { title: "Marketing", link: "/marketing" },
        ]
    },
    en: {
        cta: {
            title:"Contact us now",
            link:"/contact"
        },
        menu: [
            { title: "Home", link: "/" },
            { title: "UX/UI", link: "/" },
            { title: "Branding", link: "/" },
            { title: "Ecommerce", link: "/ecommerce" },
            { title: "Websites", link: "/websites" },
            { title: "Marketing", link: "/marketing" },
        ]
    }
    
}


const Layout = ({children}) => {
    const { locale } = useRouter()
    const [ menu, setMenu] = useState(menues.es);

    useEffect(()=> {
        if(locale === "es") {
            setMenu(menues.es)
        } else {
            setMenu(menues.en)
        }
    },[]);


    return (
        <>
            <Navigation menu={menu.menu} cta={menu.cta}/>
                {children}
            <Footer menues={menues} />
        </>
    )
}

export default Layout;