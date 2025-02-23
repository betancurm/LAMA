import React from 'react';

interface HeaderProps {
    title: string;

}
const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="bg-white  h-32 md:h-16 lg:h-16 flex items-center">
            <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 ">
                <div className="flex flex-col h-16 items-center md:flex-row md:justify-between md:items-center ">

                    <a className="block" href="/">
                        <span className="sr-only">Home</span>
                        <img className="h-8" src="/logoJB.svg" alt="Logo" />
                    </a>

                    <nav className="mt-4 md:mt-0" aria-label="Global">
                        <ul className="flex items-center gap-12 text-s">
                            <li>
                                <a className="text-gray-700 transition hover:text-gray-700/75" href="../about">About Me</a>
                            </li>
                            <li>
                                <a className="text-gray-700 transition hover:text-gray-700/75" href="../Achievements">Achievements</a>
                            </li>
                            <li>
                                <a className="text-gray-700 transition hover:text-gray-700/75" href="">History</a>
                            </li>
                            <li>
                                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">Services</a>
                            </li>
                            <li>
                                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">Projects</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );

};

export default Header;