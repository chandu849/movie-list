import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Card } from './Card';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;