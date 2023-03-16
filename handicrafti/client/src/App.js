import './App.css';
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./components/Home/Home";
import { HandicraftsList } from "./components/HandicraftsList/HandicraftsList";
import { Gallery } from "./components/Gallery/Gallery";
import { Profile } from "./components/Profile/Profile";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Navigation />
      <main>

        <Routes>

          <Route path = "/" element = {<Home/>}/>
          <Route path = "/list" element = {<HandicraftsList/>}/>
          <Route path = "/gallery" element = {<Gallery/>}/>
          <Route path = "/profile" element = {<Profile/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/register" element = {<Register/>}/>

        </Routes>


      </main>
      <Footer />

    </div>
  );
}

export default App;
