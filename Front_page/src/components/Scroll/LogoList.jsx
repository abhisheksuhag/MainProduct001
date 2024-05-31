import { useEffect, useRef } from 'react';

const logos = [
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
    '/logo4.png',
    '/logo5.png',
    '/logo6.png'
];

const LogoList = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = () => {
            if (scrollRef.current) {
                if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
                    scrollRef.current.scrollLeft = 0;
                } else {
                    scrollRef.current.scrollLeft += 1;
                }
            }
        };

        const intervalId = setInterval(scroll, 30);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="overflow-hidden whitespace-nowrap" ref={scrollRef}>
            <div className="inline-block">
                {logos.concat(logos).map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`logo-${index}`}
                        className="inline-block mx-4 h-16"
                    />
                ))}
            </div>
        </div>
    );
};

export default LogoList;
