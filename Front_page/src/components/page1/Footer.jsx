

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full p-5">
      <div className="flex justify-start space-x-8 ml-20 mb-[100px]">  {/* Increased space between buttons */}
        <button className="text-white border border-white hover:bg-white hover:text-blue-900 px-4 py-2 rounded">
          Explore ESG Solutions
        </button>
        <button className="text-white border border-white hover:bg-white hover:text-blue-900 px-4 py-2 rounded">
          Module 1
        </button>
        <button className="text-white border border-white hover:bg-white hover:text-blue-900 px-4 py-2 rounded">
          Module 2
        </button>
      </div>
    </footer>
  );
};

export default Footer;
