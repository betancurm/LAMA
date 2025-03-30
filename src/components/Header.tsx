import React from 'react';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <header className="bg-white h-32 md:h-16 lg:h-16 flex items-center">
            <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col h-16 items-center md:flex-row md:justify-between md:items-center">
                    <a className="block" href="/">
                        <span className="sr-only">Home</span>
                        <img className="h-8" src="/logo lama.svg" alt="Logo_lama" />
                    </a>

                    <nav className="mt-4 md:mt-0" aria-label="Global">
                        <ul className="flex items-center gap-12 text-s">
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="px-6 py-2 font-medium tracking-wide rounded-lg transition-colors duration-300 focus:outline-none focus:ring"
                                    style={{
                                        backgroundColor: '#181b32',
                                        color: 'white',
                                    }}
                                >
                                    Log Out
                                </button>

                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
