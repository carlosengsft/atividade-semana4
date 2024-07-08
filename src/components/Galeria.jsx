import {Card} from './Card'
import '../styles/galeria.css'

import Imagem1 from '../assets/tv1.webp'
import Imagem2 from '../assets/fritadeira1.webp'
import Imagem3 from '../assets/celular1.webp'
import Imagem4 from '../assets/furadeira1.webp'
export const Galeria = () =>{
  return(
    <article className="galeria">
            <div>
              <h2>Produtos</h2>
            </div>
            <section className='galeria-itens'>
              <Card  titulo="Smart TV 55" descricao="4K LED TCL 55P635 VA Wi-Fi Bluetooth HDR Google Assistente 3 HDMI 1 USB" preco={500.00} imgProduto={Imagem1} legenda="Imagem aleatória" />
              <Card  titulo="Fritadeira Elétrica sem Óleo/Air Fryer " descricao="Mondial Forno Oven AFON-12L-BI Preta 12L" preco={200.00} imgProduto={Imagem2} legenda="Imagem aleatória" />
              <Card  titulo="Smartphone Samsung Galaxy A15" descricao="Tela 6,5 128GB Azul Escuro 4G 4GB RAM Câm. Tripla 50MP + Selfie 13MP 5000mAh Dual Chip"  preco={50.00} imgProduto={Imagem3} legenda="Imagem aleatória" />
              <Card  titulo="Furadeira e Parafusadeira Wap" descricao="Bateria 12V com Maleta 13 Peças BPF 12K3"  preco={150.00} imgProduto={Imagem4} legenda="Imagem aleatória" />
            </section>
            
    </article>

  )
}