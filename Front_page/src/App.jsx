import './App.css';
import Header from './components/page1/Header';
import Main from './components/page1/Main';
import Footer from './components/page1/Footer';
import Modules from './components/Modules/Modules';
import Features from './components/Features/Features';
import DataSecurity from './components/Data_security/DataSecurity';
import LogoScroller from './components/Scroll/LogoScroller';

function App() {
  return (
    <>
      <div className="relative h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="back_video.mp4"
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 fade-in h-screen">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
      <Modules />
      <Features />
      <LogoScroller />
      <div>
        <DataSecurity />
      </div>
    </>
  );
}

export default App;
