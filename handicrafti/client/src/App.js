import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Catalog } from "./components/Catalog/Catalog";
import { Profile } from "./components/Profile/Profile";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { CreateOffer } from './components/CreateOffer/CreateOffer';
import { MyOffers } from './components/MyOffers/MyOffers';
import { Details } from './components/Details/Details';
import { EditOffer } from './components/EditOffer/EditOffer';
import { PostReview } from './components/PostReview/PostReview';
import { Reviews } from './components/Reviews/Reviews';

import { AuthProvider } from './Contexts/AuthContext';
import { NotFound } from './components/NotFound/NotFound';
import { offerServiceFactory } from './services/offerService'



function App() {

  const navigate = useNavigate();
  const [offers, setOffers] = useState([]);
  const offerService = offerServiceFactory();


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
            <Route path="offers/catalog" element={<Catalog />} offers = {offers}/>
            <Route path="offers/create" element={<CreateOffer />} />
            <Route path={`offers/${userId}`} element={<MyOffers />} />
            <Route path="/details" element={<Details />} />
            <Route path="/postreview" element={<PostReview />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/edit" element={<EditOffer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path ="*" element={<NotFound />} />

          </Routes>


        </main>
        <Footer />

      </div>
    </AuthProvider>
  );
}

export default App;
