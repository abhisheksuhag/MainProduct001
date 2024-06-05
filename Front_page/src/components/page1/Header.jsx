import { useState, useEffect } from "react";

const Header = () => {
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [headerState, setHeaderState] = useState({
        background: "bg-transparent",
        textColor: "text-white",
        textWeight: "font-normal",
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHeaderState({
                    background: "bg-white",
                    textColor: "text-black",
                    textWeight: "font-bold",
                });
            } else {
                setHeaderState({
                    background: "bg-transparent",
                    textColor: "text-white",
                    textWeight: "font-normal",
                });
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`sticky top-0 left-0 z-30 w-full ${headerState.background}`}>
            <div className="container mx-auto flex items-center justify-between px-5 py-3">
                <div className="flex items-center space-x-3">
                    <img src="/logo222.png" alt="Logo" className="h-[60px]" />
                    <h1 className={`${headerState.textColor} ${headerState.textWeight} text-xl font-bold`}>SUSTAINATRIX</h1>
                </div>
                <nav>
                    <ul className="flex items-center space-x-8">
                        <li className="relative">
                            <button
                                className={`${headerState.textColor} ${headerState.textWeight} text-lg leading-none py-2 hover:text-gray-300`}
                                onMouseEnter={() => setSolutionsOpen(true)}
                                onMouseLeave={() => setSolutionsOpen(false)}>
                                SOLUTIONS
                            </button>
                            {solutionsOpen && (
                                <div className="absolute top-full left-0 mt-1 w-56 bg-gray-800 shadow-lg rounded-lg bg-opacity-90"
                                    onMouseEnter={() => setSolutionsOpen(true)}
                                    onMouseLeave={() => setSolutionsOpen(false)}>
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
                        <li className="relative">
                            <button
                                className={`${headerState.textColor} ${headerState.textWeight} text-lg leading-none py-2 hover:text-gray-300`}
                                onMouseEnter={() => setResourcesOpen(true)}
                                onMouseLeave={() => setResourcesOpen(false)}>
                                RESOURCES
                            </button>
                            {resourcesOpen && (
                                <div className="absolute top-full left-0 mt-1 w-56 bg-gray-800 shadow-lg rounded-lg bg-opacity-90"
                                    onMouseEnter={() => setResourcesOpen(true)}
                                    onMouseLeave={() => setResourcesOpen(false)}>
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
                        <li><a href="#" className={`${headerState.textColor} ${headerState.textWeight} text-lg leading-none py-2 hover:text-gray-300`}>ABOUT US</a></li>
                        <li><a href="#" className={`${headerState.textColor} ${headerState.textWeight} text-lg leading-none py-2 hover:text-gray-300`}>CONTACT US</a></li>
                        <li><a href="#" className={` text-white text-lg leading-none py-2 px-4 rounded-md hover:text-gray-300 bg-blue-500`}>SIGN IN</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;