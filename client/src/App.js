import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Booking from './pages/Booking';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/booking" element = {<Booking/>}/>
      </Routes>
    </div>
  );
}

export default App;
