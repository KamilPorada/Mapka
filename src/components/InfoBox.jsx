import './InfoBox.css'

const InfoBox = (props) =>{
    return <div className="info-box active" ref={props.ref}>
        <h2 className="info-box__title">Województwo {props.title}</h2>
        <p className="info-box__capital">Stolica: {props.capital}</p>
        <p className="info-box__area">Powierzchnia: {props.area}</p>
        <p className="info-box__population">Liczba ludności: {props.population}</p>
    </div>
}

export default InfoBox