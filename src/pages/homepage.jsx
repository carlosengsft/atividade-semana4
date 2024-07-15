import { Cabecalho } from "../components/Cabecalho"
import { Rodape } from "../components/Rodape"
import { Banner } from "../components/Banner"
import { MiniBanner } from "../components/MiniBanners"
import { Galeria } from "../components/Galeria"
export const Home = () =>{
    return(
        <>
        <Cabecalho/>
        <Banner/>
        <MiniBanner/>
        <Galeria/>
        <Rodape/>
        </>
    )
}