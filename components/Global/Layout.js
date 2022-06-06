
import Footer from "./Footer";
import Navigation from "./Navigation";


const menues = {
    es: {
        cta: "Contactanos Ahora",
        menu: [
            { title: "Inicio", link: "/" },
            { title: "UX/UI", link: "/uxui" },
            { title: "Ecommerce", link: "/ecommerce" },
            { title: "Websites", link: "/websites" },
            { title: "Marketing", link: "/marketing" },
        ]
    },
    en: {
        cta:"Contact us now",
        menu: [
            { title: "Home", link: "/" },
            { title: "UX/UI", link: "/uxui" },
            { title: "Ecommerce", link: "/ecommerce" },
            { title: "Websites", link: "/websites" },
            { title: "Marketing", link: "/marketing" },
        ]
    }
    
}


const Layout = ({children}) => {

   

    return (
        <>
            <Navigation menues={menues}/>
                {children}
            <Footer menues={menues} />
        </>
    )
}

export default Layout;