import { useState } from 'react';

const Header = () => {
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);

    return (
        <header className="absolute top-5 left-5 z-10 w-full">
            <div className="flex items-center justify-between w-full px-5">
                <div className="flex items-center space-x-3">
                    <img src="/logo222.png" alt="Logo" className="h-20" />
                    <h1 className="text-xl font-bold text-white">SUSTAINATRIX</h1>
                </div>
                <nav className="mr-7">
                    <ul className="flex items-center space-x-8">
                        <li
                            className="relative group py-4"
                            onMouseEnter={() => setSolutionsOpen(true)}
                            onMouseLeave={() => setSolutionsOpen(false)}
                        >
                            <button className="text-white transform transition-transform duration-300 hover:scale-105 focus:outline-none">
                                SOLUTIONS
                            </button>
                            {solutionsOpen && (
                                <div
                                    className="absolute mt-2 w-56 bg-gray-800 shadow-lg rounded-lg bg-opacity-20"
                                    onMouseEnter={() => setSolutionsOpen(true)}
                                    onMouseLeave={() => setSolutionsOpen(false)}
                                >
                                    <ul className="py-2 text-white">
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/solution1">ESG & Sustainability Reporting & Management</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/solution2">Carbon Accounting & GHG Measurement</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/solution3">Sustainable Procurement & Sourcing</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/solution4">ESG Portfolio Management For Investors</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/solution5">ESG Consulting</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li
                            className="relative group py-4"
                            onMouseEnter={() => setResourcesOpen(true)}
                            onMouseLeave={() => setResourcesOpen(false)}
                        >
                            <button className="text-white transform transition-transform duration-300 hover:scale-105 focus:outline-none">
                                RESOURCES
                            </button>
                            {resourcesOpen && (
                                <div
                                    className="absolute mt-2 w-56 bg-gray-800 shadow-lg rounded-lg bg-opacity-20"
                                    onMouseEnter={() => setResourcesOpen(true)}
                                    onMouseLeave={() => setResourcesOpen(false)}
                                >
                                    <ul className="py-2 text-white">
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/resource1">Manufacturing</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/resource2">Agri-business & Forestry</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/resource3">Retail & Hospitality</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/resource4">Health & Education</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/resource5">Infrastructure</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/resource6">Financial Institutions & Funds</a>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-700">
                                            <a href="/resource7">Real Estate & Construction</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li><a href="#" className="text-white py-4 transform transition-transform duration-300 hover:scale-105 focus:outline-none">ABOUT US</a></li>
                        <li><a href="#" className="text-white py-4 transform transition-transform duration-300 hover:scale-105 focus:outline-none">CONTACT US</a></li>
                        <li><a href="#" className="text-white py-4 transform transition-transform duration-300 hover:scale-105 focus:outline-none">SIGN IN</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
