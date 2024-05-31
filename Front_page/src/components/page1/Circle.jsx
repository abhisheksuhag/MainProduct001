const Circle = ({ size, children, positionStyle, overflow = 'hidden', padding = '0' }) => {
    return (
        <div
            className={`absolute border-2 border-white rounded-full ${positionStyle}`}
            style={{ width: size, height: size, overflow: overflow, padding }}
        >
            {children}
        </div>
    );
};

export default Circle;
