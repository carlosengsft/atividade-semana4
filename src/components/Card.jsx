export const Card = (props) =>{
  return (
        <article className="card">
            <h3>{props.titulo}</h3>
            <p>{props.valor}</p>
           
        </article>
    );
}