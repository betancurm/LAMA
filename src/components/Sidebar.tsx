import React from 'react';
import { FaUser, FaUserPlus, FaSearch } from 'react-icons/fa';

interface SidebarProps {
    title: string;
}

const Sidebar: React.FC<SidebarProps> = ({ title }) => {
    return (
        <aside className="fixed left-0 top-0 h-full w-64 bg-[#181b32] text-white shadow-lg flex flex-col p-4">
            <h2 className="text-xl font-bold mb-6 text-center">{title}</h2>
            
            <nav className="flex flex-col gap-4">
        
                <a href="/CreateMember" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#23274a]">
                    <FaUserPlus /> <span>Crear Miembro</span>
                </a>
                <a href="/ConsultMember" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#23274a]">
                    <FaSearch /> <span>Consultar Miembro</span>
                </a>
            </nav>
        </aside>
    );
};

export default Sidebar;
