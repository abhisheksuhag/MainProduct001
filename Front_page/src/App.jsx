import './App.css';
import Header from './components/page1/Header';
import Modules from './components/Modules/Modules';
import Features from './components/Features/Features';
import DataSecurity from './components/Data_security/DataSecurity';
import LogoScroller from './components/Scroll/LogoScroller';
import Main from './components/page1/Main';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  return (
    <>
      <Header />
      <div>

      </div>
      <section> <Main />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/back_video.mp4"
          autoPlay
          loop
          muted
        />      </section>
      <Modules />
      <Features />
      <LogoScroller />
      <DataSecurity />

      <ContactPage />


      {/* Footer could go here if needed */}
    </>
  );
}

export default App;
