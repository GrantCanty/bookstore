import '../styles/card.css'

const Card = (props) => {
    return (
        <div className='card-wrapper'>
            <div className='card-content'>
                {props.text}
            </div>
        </div>
    )
}

export default Card;