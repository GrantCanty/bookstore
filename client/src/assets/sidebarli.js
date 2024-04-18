import { Link } from 'react-router-dom';

const SidebarLI = (props) => {
    return (
                <Link className={`other ${props.color}`} to={`/${props.link}`}>
                    <span className='material-symbols-outlined'>{props.icon}</span>
                    <br></br>
                    {props.text}
                </Link>
    )
}

export default SidebarLI;