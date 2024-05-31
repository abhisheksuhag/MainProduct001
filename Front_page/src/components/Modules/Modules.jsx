import { useRef } from 'react';
import 'tailwindcss/tailwind.css';

const Modules = () => {
    const scrollContainerRef = useRef(null);
    const boxWidth = 400;
    const boxHeight = 400;

    const modules = [
        {
            title: "Solution",
            subtitle: "Collect plastic from the sea",
            description: "We remove plastic from the sea and ports in your name, together with fishermen and divers, and we measure your impact with Blockchain.",
            image: "/m1.png",
            moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://example.com/solution1"
        },
        {
            title: "Solution",
            subtitle: "Revalues plastic in raw materials",
            description: "Transform marine plastic into sustainability, innovation and value for your positive impact projects.",
            image: "/m2.png",
            moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://example.com/solution2"
        },
        {
            title: "360° Impact Solution",
            subtitle: "",
            description: "Close the circular economy cycle and make your commitment to valuable products visible.",
            image: "/m3.webp",
            moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://example.com/solution3"
        },
        {
            title: "Solution",
            subtitle: "Reduce plastic waste",
            description: "Help reduce plastic waste through innovative recycling solutions.",
            image: "/m1.png",
            moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://example.com/solution4"
        },
        {
            title: "Solution",
            subtitle: "Promote sustainability",
            description: "Promote sustainability through responsible practices and education.",
            image: "/m2.png",
            moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://example.com/solution5"
        },
        {
            title: "Solution",
            subtitle: "Innovative products",
            description: "Create innovative products from recycled materials.",
            image: "/m3.webp",
            moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://example.com/solution6"
        }
    ];

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -boxWidth - 20, behavior: 'smooth' }); // Include the gap in the scroll amount
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: boxWidth + 20, behavior: 'smooth' }); // Include the gap in the scroll amount
        }
    };

    return (
        <div className=" slide-up w-full h-screen bg-white py-8 flex flex-col items-center relative px-5">
            {/* Heading and Subheading */}
            <div className="text-center mt-[60px] mb-10">
                <h1 className="text-4xl font-bold">Our Innovative Solutions</h1>
                <p className="text-lg text-gray-600 mb-[60px]">Discover our sustainable solutions to protect our planet</p>
            </div>

            {/* Scroll Buttons */}
            <button onClick={scrollLeft} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-md z-10 hover:bg-gray-600 transition-colors" aria-label="Scroll left">
                &lt;
            </button>
            <button onClick={scrollRight} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-md z-10 hover:bg-gray-600 transition-colors" aria-label="Scroll right">
                &gt;
            </button>

            {/* Cards */}
            <div ref={scrollContainerRef} className="container mx-auto flex flex-row space-x-16 overflow-hidden scroll-smooth px-5">
                {modules.map((module, index) => (
                    <div key={index} className="relative flex-shrink-0 transform transition-transform hover:scale-105" style={{ width: boxWidth, height: boxHeight }}>
                        <div className="group perspective-1000" style={{ width: boxWidth, height: boxHeight }}>
                            <div className="relative preserve-3d w-full h-full duration-700 group-hover:rotate-y-180 transition-transform rounded-xl shadow-lg">
                                <div className="absolute backface-hidden w-full h-full rounded-xl">
                                    <img src={module.image} alt={`Module ${index + 1}`} className="absolute w-full h-full object-cover rounded-xl" />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col items-center justify-center rounded-xl">
                                        <h2 className="text-white font-bold text-shadow">{module.title}</h2>
                                        <h3 className="text-white text-sm text-shadow">{module.subtitle}</h3>
                                        <p className="text-white text-xs text-center text-shadow">
                                            {module.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute backface-hidden rotate-y-180 w-full h-full bg-white p-4 flex flex-col items-center justify-center rounded-xl" style={{ backgroundImage: `url(${module.image})`, backgroundSize: 'cover' }}>
                                    <p className="text-black text-xs text-center bg-white bg-opacity-70 p-2 rounded">
                                        {module.moreInfo}
                                    </p>
                                    <a href={module.link} className="mt-4 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-600 transition-colors">Know More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Modules;
