import { Link } from 'react-router-dom';
import '../styles/sidebar-li.css'

const SidebarLI = (props) => {
    return (
            <div>
            <Link className='other' to={`/${props.link}`}>{props.text}</Link>
            </div>
    )
}



export default SidebarLI;