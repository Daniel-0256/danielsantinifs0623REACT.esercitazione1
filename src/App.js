
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import Footer from './components/Footer';
import CardList from './components/Home';
import Generi from './components/Generi';


function App() {
  return (
    <div>
      <MyNav />
      <Generi />
      <h6 className='bg-dark text-light m-0 ps-4'>Harry Potter</h6>
      <CardList searchFilms='Harry%20Potter'/>
      <h6 className='bg-dark text-light m-0 ps-4'>Avengers</h6>
      <CardList searchFilms='avengers'/>
      <h6 className='bg-dark text-light m-0 ps-4'>Star Wars</h6>
      <CardList searchFilms='star%20wars'/>
      <Footer />
    </div>
  );
}

export default App;
