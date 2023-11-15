import './App.css';
import './assets/css/base.css';
import './assets/css/main.css';
import './assets/css/reset_css.css';
import './assets/font/fontawesome-free-6.4.0-web/css/all.css';
import { Header } from './components/Trangchu/header';
import { Container } from './components/Trangchu/container';
import { Footer } from './components/Trangchu/footer';

function App() {
  return (
    <div className="App">
  <Header />
  <Container/>
  <Footer/>
    </div>
  );
}
export default App;
