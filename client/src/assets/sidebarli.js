import { Link } from 'react-router-dom';

const SidebarLI = (props) => {
    return (
                <Link style={{"background-color": props.bg}} className='other' to={`/${props.link}`}>
                    <span className='material-symbols-outlined'>{props.icon}</span>
                    <br></br>
                    {props.text}
                </Link>
    )
}



export default SidebarLI;