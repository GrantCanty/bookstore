import { Link, Outlet } from 'react-router-dom'
import '../styles/sidebar.css'
import SidebarLI from './sidebarli';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li><SidebarLI text="Edit" link="edit"></SidebarLI></li>
                    <li><SidebarLI text="Add New" link="new"></SidebarLI></li>
                    <li><SidebarLI text="Get Books" link="get"></SidebarLI></li>
                    <li><SidebarLI text="Delete" link="delete"></SidebarLI></li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}

export default Sidebar;