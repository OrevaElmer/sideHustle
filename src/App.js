import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import GeneralInfo from './components/GeneralInfo';
import Header from './components/Header';
import Overview from './components/Overview';

function App() {
  return (
    <div className="App">
      <Header />
      <Overview />
      <GeneralInfo />
      <Education />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
