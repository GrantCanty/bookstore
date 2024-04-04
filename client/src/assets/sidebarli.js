import { Link } from 'react-router-dom';
import '../styles/sidebar-li.css'

const SidebarLI = (props) => {
    return (
                <Link className='other' to={`/${props.link}`}>
                    <span className='material-symbols-outlined'>{props.icon}</span>
                    <br></br>
                    {props.text}
                </Link>
    )
}



export default SidebarLI;