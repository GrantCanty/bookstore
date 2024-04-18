import { Outlet } from 'react-router-dom'
import '../styles/sidebar.css'
import SidebarLI from './sidebarli';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li><SidebarLI text="Home" link="" icon="home" color={'yellow'}></SidebarLI></li>
                    <li><SidebarLI text="Recent" link="recent" icon="article" color={'red'} ></SidebarLI></li>
                    {/*<li><SidebarLI text="Get Books" link="get" icon="article" bg="#ffbb31"></SidebarLI></li>
                    <li><SidebarLI text="Delete" link="delete" icon="delete" bg="#000000"></SidebarLI></li>*/}
                </ul>
            </div>
            <Outlet />
        </>
    )
}

export default Sidebar;