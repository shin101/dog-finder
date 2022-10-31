import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Nav from './Nav';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Nav/>
        <Routes>
        <Route exact path="/dogs" element={<DogList />} />
      </Routes>
        <Routes>

        <Route exact path="/pocky" element={<Pocky />} />
      </Routes>
        <Routes>

        <Route exact path="/OiOcha" element={<OiOcha />} />
      </Routes>

  </BrowserRouter>
  </div>
  );
}

export default App;
