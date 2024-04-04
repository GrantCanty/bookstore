import { Link, Outlet } from 'react-router-dom'
import '../styles/sidebar.css'
import SidebarLI from './sidebarli';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li><SidebarLI text="Edit" link="edit" icon="edit_square" bg="#752fff"></SidebarLI></li>
                    <li><SidebarLI text="Add Book" link="new" icon="add_circle" bg="#fe3a3a"></SidebarLI></li>
                    <li><SidebarLI text="Get Books" link="get" icon="article" bg="#ffbb31"></SidebarLI></li>
                    <li><SidebarLI text="Delete" link="delete" icon="delete" bg="#000000"></SidebarLI></li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}

export default Sidebar;