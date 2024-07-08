// import ProTypes from 'prop-types'
import '../styles/card.css'
export const Card = (props) =>{
    return(
        <article className="card">
            <img src={props.imgProduto} alt={props.legenda}/>
            <h3>{props.titulo}</h3>
            <p>{props.descricao}</p>
            <p className='card-preco'> {`R$ ${props.preco}`}</p>  
        </article>
    )
}
