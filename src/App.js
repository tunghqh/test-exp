import './App.scss';
import Content from './components/Content/Content';
import Credit from './components/Credit/Credit';
import FilmList from './components/FilmList/FilmList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FilmList />
      <Content />
      <Credit />
      <Footer />
    </div>
  );
}

export default App;
