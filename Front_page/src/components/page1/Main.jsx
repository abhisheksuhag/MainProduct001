// import Circle from './Circle';

const Main = () => {
    return (
        <main className="relative overflow-hidden flex justify-center items-center min-h-screen w-full">
            <div className="relative flex justify-center items-center w-full h-full">
                {/* Circle 1 (Innermost) */}
                {/* <Circle size="39vmin" positionStyle="left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" padding="4px">
                    <div className="flex justify-center items-center w-full h-full">
                        <img
                            src="/forest.jpg"
                            alt="Inner Circle Image"
                            className="rounded-full object-cover transition-transform duration-500 hover:scale-105"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </Circle> */}

                {/* Circle 2 (Middle) */}
                {/* <Circle size="97.5vmin" positionStyle="left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute -right-19 top-19">
                        <div className="flex justify-center items-center w-26 h-26 p-1 rounded-full border-2 border-white transition-transform duration-500 hover:scale-110">
                            <img src="/your-inner-image2.jpg" alt="Small Circle Image 1" className="w-full h-full rounded-full object-cover" />
                        </div>
                    </div>
                </Circle> */}

                {/* Circle 3 (Outermost) */}
                {/* <Circle size="149.5vmin" positionStyle="left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" overflow="visible"> */}
                {/* Mask to hide part of the border */}
                {/* <div className="absolute w-full h-full">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-transparent"
                            style={{ transform: 'rotate(45deg)', transformOrigin: 'bottom left', borderTop: '2px solid #1A202C', zIndex: 10 }}>
                        </div>
                        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-transparent"
                            style={{ transform: 'rotate(-45deg)', transformOrigin: 'top left', borderBottom: '2px solid #1A202C', zIndex: 10 }}>
                        </div>
                    </div> */}

                {/* <div className="absolute -right-32 bottom-32">
                        <div className="flex justify-center items-center w-31 h-31 p-1 rounded-full border-2 border-white transition-transform duration-500 hover:scale-110">
                            <img src="/your-inner-image3.jpg" alt="Small Circle Image 2" className="w-full h-full rounded-full object-cover" />
                        </div>
                    </div> */}

                {/* Small Circle - Northeast */}
                {/* <div className="absolute border-2 border-white rounded-full overflow-hidden transition-transform duration-500 hover:scale-110"
                        style={{
                            width: '30vmin', height: '30vmin',
                            top: '30%', right: '-13%',
                            transform: 'translate(-50%, -50%)'
                        }}>
                        <div className="flex justify-center items-center w-full h-full p-1">
                            <img
                                src="/small1.jpg"
                                alt="Northeast Small Circle Image"
                                className="w-full h-full rounded-full object-cover"
                                style={{ padding: '4px' }}
                            />
                        </div> */}
                {/* </div> */}

                {/* Small Circle - Southeast */}
                {/* <div className="absolute border-2 border-white rounded-full overflow-hidden transition-transform duration-500 hover:scale-110"
                        style={{
                            width: '30vmin', height: '30vmin',
                            bottom: '30%', right: '-13%',
                            transform: 'translate(-50%, 50%)'
                        }}>
                        <div className="flex justify-center items-center w-full h-full p-1">
                            <img
                                src="/small1.jpg"
                                alt="Southeast Small Circle Image"
                                className="w-full h-full rounded-full object-cover"
                                style={{ padding: '4px' }}
                            />
                        </div>
                    </div>
                </Circle> */}
            </div>
        </main>
    );
};

export default Main;
