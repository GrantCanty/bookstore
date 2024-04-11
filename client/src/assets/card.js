import { Link } from 'react-router-dom';
import '../styles/card.css'

const Card = (props) => {
    return (
        <Link to={`/${props.link}`} className='card-wrapper' state={{route: props.route}}>
            <div className='card-content'>
                {props.text}
            </div>
        </Link>
    )
}

export default Card;