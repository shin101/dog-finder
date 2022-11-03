import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesMod from "./RoutesMod";

function App() {
  return (
    <div>
      <BrowserRouter>
        <RoutesMod />
      </BrowserRouter>
    </div>
  );
}

export default App;
