

import LogoList from './LogoList';

const LogoScroller = () => {
    return (
        <div className="w-full h-96 p-16 border border-gray-300 text-center bg-gray-200">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Aligned with Leaders in Ethical and Sustainable Growth</h1>
                <p className='mb-20'>Fostering long-term growth through transparency and accountability.</p>
            </div>
            <div className="mt-6">
                <LogoList />
            </div>
        </div>
    );
};

export default LogoScroller;