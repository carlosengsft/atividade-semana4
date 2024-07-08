import car1 from '../assets/oferta-dia.webp'
import car2 from '../assets/cupons.webp'
import car3 from '../assets/oferta.webp'
import '../styles/card.css'
export const Card = () =>{
  return (
        <article className="card-ofertas">
            <div className='card-item'>
                <img src={car1} alt="Oferta do dia" />
            </div>
            <div className='card-item'>
                <img src={car2} alt="Cupons de desconto" />
            </div>
            <div className='card-item'>
                <img src={car3} alt="Ofertas" />
            </div>
        </article>
    );
}