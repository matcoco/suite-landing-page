import Contents from './components/contents/Contents';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import './scss/styles.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Nav />
        <Header />
        <Contents />
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
