// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from './Pages'


function App() {
  return (
    <>
      <BrowserRouter>   

      <Routes>       
        <Route exact path="/*" element={<Pages/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
