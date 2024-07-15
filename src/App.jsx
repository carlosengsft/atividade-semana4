import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/homepage";
import {Cadastrar} from './pages/cadastro'
import {Login} from './pages/login'
import {Contato} from './pages/contato'
import {NotFound} from './pages/notfound'


export const App = () => {
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cadastrar" element={<Cadastrar/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/contato" element={<Contato/>}></Route>
      <Route path="/notfound" element={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

