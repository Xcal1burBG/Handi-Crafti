import './App.css';
import { Routes, Route } from 'react-router-dom';

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

// Contexts and services
import { AuthProvider } from './Contexts/AuthContext';
import { OfferContextProvider } from './Contexts/OfferContext';
import { OfferDetailsContextProvider } from './Contexts/OfferDetailsContext';


function App() {



  return (
    <AuthProvider>
      < OfferContextProvider>
        <OfferDetailsContextProvider>

          <div className="App">

            <Header />

            <main>

              <Routes>

                <Route path="/" element={<Home />} />


                <Route path="/offers/catalog" element={<Catalog />} />
                <Route path="/offers/create" element={<CreateOffer />} />
                <Route path={`/offers/:userId`} element={<MyOffers />} />
                <Route path="offers/details/:offerId" element={<Details />} />
                <Route path="/postreview/:userId" element={<PostReview />} />
                <Route path="/reviews/:userId" element={<Reviews />} />
                <Route path="/edit" element={<EditOffer />} />
                {/* <Route path="/profile" element={<Profile />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<NotFound />} />

              </Routes>

            </main>

            <Footer />

          </div>

        </OfferDetailsContextProvider>
      </ OfferContextProvider>
    </AuthProvider >
  );
}

export default App;
