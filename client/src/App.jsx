import Nav from "./components/Nav/Nav";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from "./components/Home/Home";
import ForecastContainer from "./components/ForecastContainer/ForecastContainer";

function App() {
  return (
    <BrowserRouter>
    <header>
      <Nav />
    </header>

    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/forecast/:id" element={<ForecastContainer/>}/>
      </Routes>
    </main>
    
    </BrowserRouter>
  );
}

export default App;
