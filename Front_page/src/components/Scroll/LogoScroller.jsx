
import HeaderText from './HeaderText';
import LogoList from './LogoList';

const LogoScroller = () => {
    return (
        <div className="w-full h-96 p-16 border border-gray-300 text-center bg-gray-200">
            <HeaderText />
            <div className="mt-6">
                <LogoList />
            </div>
        </div>
    );
};

export default LogoScroller;