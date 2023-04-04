import './App.css';
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Catalog } from "./components/Catalog/Catalog";
import { Profile } from "./components/Profile/Profile";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Routes, Route } from 'react-router-dom';
import { CreateOffer } from './components/CreateOffer/CreateOffer';
import { MyOffers } from './components/MyOffers/MyOffers';
import { Details } from './components/Details/Details';
import { EditOffer } from './components/EditOffer/EditOffer';
import { PostReview } from './components/PostReview/PostReview';
import { Reviews } from './components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import * as offerService from './services/offerService';
import { AuthProvider } from './Contexts/AuthContext';

function App() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    offerService.getAll()
      .then(result => {
        setOffers(result);
      })
  }, []);




  return (
    <AuthProvider>
      <div className="App">

        <Header />
        <main>

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/create" element={<CreateOffer />} />
            <Route path="/myoffers" element={<MyOffers />} />
            <Route path="/details" element={<Details />} />
            <Route path="/postreview" element={<PostReview />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/edit" element={<EditOffer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

          </Routes>


        </main>
        <Footer />

      </div>
    </AuthProvider>
  );
}

export default App;
