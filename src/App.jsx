
import { Banner } from "./components/Banner"
import {Cabecalho}  from "./components/Cabecalho"
import { MiniBanner } from "./components/MiniBanners"
import { Galeria } from "./components/Galeria"
import { Rodape } from "./components/Rodape"

export const App = () => {
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

