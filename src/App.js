import { BrowserRouter, Route, Routers } from 'react-router-dom';
import './App.css';
import Footer from './componants/Footer';
import Header from './componants/Header';
import Main from './componants/Main';
import NavBar from './componants/NavBar';

function App() {
  return (
    <div >
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
