export default function Promocion({objeto}){
    const { day, title, discount, price, background } = objeto;
    return(
        <div>
            <h2>{day}</h2>
            <img src={background} alt="promo" />
            <h3>{title}</h3>
            <p>{discount}</p>
            <p>{price}</p>
        </div>
    )
}