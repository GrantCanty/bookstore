import { Link, Outlet } from 'react-router-dom'
import '../styles/sidebar.css'
import SidebarLI from './sidebarli';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li><SidebarLI text="Edit" link="edit" icon="edit_square"></SidebarLI></li>
                    <li><SidebarLI text="Add Book" link="new" icon="add_circle"></SidebarLI></li>
                    <li><SidebarLI text="Get Books" link="get" icon="article"></SidebarLI></li>
                    <li><SidebarLI text="Delete" link="delete" icon="delete"></SidebarLI></li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}

export default Sidebar;