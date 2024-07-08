import '../styles/rodape.css'
import ct1 from '../assets/ct1.svg'
import ct2 from '../assets/ct2.svg'
import ct3 from '../assets/ct3.svg'
import ct4 from '../assets/ct4.svg'
import ct5 from '../assets/ct5.svg'
import ct6 from '../assets/ct6.svg'
import ct7 from '../assets/ct7.svg'
import ct8 from '../assets/ct8.svg'
import ct9 from '../assets/ct9.svg'

export const Rodape = () =>{
  return(
    <footer className='rodape'>
      <section className='forma-pagamento'>
          <h3>Formas de pagamento</h3>
          <div className='bandeiras'>
            <img src={ct1} alt="Bandeira de pagamento" />
            <img src={ct2} alt="Bandeira de pagamento"/>
            <img src={ct3} alt="Bandeira de pagamento"/>
            <img src={ct4} alt="Bandeira de pagamento"/>
            <img src={ct5} alt="Bandeira de pagamento"/>
            <img src={ct6} alt="Bandeira de pagamento"/>
            <img src={ct7} alt="Bandeira de pagamento"/>
            <img src={ct8} alt="Bandeira de pagamento"/>
            <img src={ct9} alt="Bandeira de pagamento"/>
          </div>
      </section>
      <hr className="linha"></hr>
      <section>
         <nav className='items-nav-footer'>
            <div className='departamentos'>
              <h4>departamentos</h4>
                  <a href="#">ar e ventilação</a>
                  <a href="#">artesanato</a>
                  <a href="#">áudio</a>
                  <a href="#">automotivo</a>
                  <a href="#">bebês</a>
                  <a href="#">beleza e perfumaria</a>
                  <a href="#">brinquedos</a>
                  <a href="#">cama, mesa e banho</a>
                  <a href="#">câmeras e drones</a>
            </div>
            <div className='marketplace'>
              <h4>marketplace</h4>
              <a href="#">venda seus produtos</a>
              <a href="#">proteção de marca</a>
            </div>
            <div className='serviços'>
              <h4>serviços</h4>
                  <a href="#">recarga premiada</a>
                  <a href="#">revista Woowtech</a>
                  <a href="#">lista de casamento</a>
                  <a href="#">chá de bebê</a>
                  <a href="#">consórcio Woowtech</a>
                  <a href="#">cartão Woowtech</a>
                  <a href="#">Woowtech seguros</a>
                  <a href="#">influenciador Woowtech</a>
                  <a href="#">cliente ouro</a>
                  <a href="#">quero de casamento</a>
                  <a href="#">maga mais</a>
                  <a href="#">carnê digital</a>
            </div>
            <div className='parcerias'>
              <h4>parcerias</h4>
                <a href="#">seja nosso parceiro</a>
               <div className='institucional'>
                  <nav>
                    <h4>Institucional</h4>
                    <ul>
                      <li>quem somos</li>
                      <li>nossas lojas</li>
                      <li>blog Woowtech</li>
                      <li>trabalhe conosco</li>
                      <li>assessoria de imprensa</li>
                      <li>investidores</li>
                      <li>politicas de privacidade</li>
                    </ul>
                  </nav>
              </div>
              

            </div>
             <div className='compre'>
              <h4>compre pelo telefone</h4>
              <p>0800 773 3838</p>
              <p>segunda a sexta das 8 às 22h e sábados e domingos <br /> das 8 às 20h (exceto feriados)</p>

              <a href="#">compre também pelo chat online</a>
            </div>
        </nav>
      </section>
       
    </footer>
  )
}