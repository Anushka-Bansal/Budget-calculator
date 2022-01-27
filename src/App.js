import './App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration'
// import Navii from './Components/Navii';
import Homepage from './Components/Homepage';
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />}/>
          <Route path='/registration' exact element={<Registration />} />
          {/* <Route path='/homepage' element={<Homepage />} /> */}
          <Route path="/homepage" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
