import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useContext, useEffect, useState, useNavigate } from 'react';
import { AuthProvider, AuthContext } from './Contexts/AuthContext';
import { OfferContext } from './Contexts/OfferContext';

// Components
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
import { Logout } from './components/Logout/Logout';
import { NotFound } from './components/NotFound/NotFound';
import { authServiceFactory } from './services/authService';



function App() {

  const { userId } = useContext(AuthContext);

  const [offers, setOffers] = useState({});

  const navigate = useNavigate();

  const auth = useContext(AuthContext);
  const offerService = authServiceFactory(auth.token);


  useEffect(() => {
    offerService.getAll()
      .then(result => {
        setOffers(result);
      })
  }, []);


  const onCreateOfferSubmit = async (values) => {

    try {
        const newOffer = await offerService.Create(values);
        setOffers(state => [...state, newOffer]);

    } catch (error) {
        console.log('Problem with creating an offer');
    }
}

  const offerContextValues = {
    onCreateOfferSubmit,
    offers,
  }
 

  return (
    <AuthProvider>
      <OfferContext.Provider value={offerContextValues}>

        <div className="App">

          <Header />

          <main>

            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="offers/catalog" element={<Catalog />} />
              <Route path="offers/create" element={<CreateOffer />} />
              <Route path={`offers/${userId}`} element={<MyOffers />} />
              <Route path="/details" element={<Details />} />
              <Route path="/postreview" element={<PostReview />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/edit" element={<EditOffer />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<NotFound />} />

            </Routes>

          </main>

          <Footer />

        </div>

      </OfferContext.Provider>
    </AuthProvider>
  );
}

export default App;
