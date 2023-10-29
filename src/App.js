import Home from './Components/Home';
import Footer from './Components/Layouts/Footer';
import Header from './Components/Layouts/Header';
import Sidebar from './Components/Layouts/Sidebar';
import logo from './logo.svg';


function App() {
  return (
    <div className="container-fluid bg-dark">
          <div className='row'>
              <div className='col-sm-2'>
                <Sidebar />
              </div>
              <div className='col-sm-10'>
              <Header />
                <Home />                
              </div>
            </div>  
        <Footer />
    </div>
  );
}

export default App;
