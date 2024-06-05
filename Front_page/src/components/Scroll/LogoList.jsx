import { useEffect, useRef } from 'react';

const logos = [
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
    '/logo4.png',
    '/logo5.png',
    '/logo6.png'
];

const logoWidth = 100; // width of one logo image in pixels

const LogoList = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += logoWidth;
                if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth) {
                    scrollRef.current.scrollLeft = 0;
                }
            }
            requestAnimationFrame(scroll);
        };

        scroll();

        return () => {
            cancelAnimationFrame(scroll);
        };
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