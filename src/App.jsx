import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GetStarted from "./pages/GetStarted";
import MovieDetails from "./pages/MovieDetails";
import MoviesGenre from "./pages/MoviesGenre";
import ResetPassword from "./pages/ResetPassword";
import PersonInfo from "./pages/PersonInfo";
import Footer from "./components/Footer";
import PageNotFound404 from "./pages/PageNotFound404";
import { SkeletonTheme } from "react-loading-skeleton";

const App = () => {
  return (
    <>
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path='*' element={<PageNotFound404 />} />
            <Route
              path='/'
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path='/get-started' element={<GetStarted />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route
              path='/movie/:id'
              element={
                <ProtectedRoute>
                  <MovieDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path='/movieGenre/:genre'
              element={
                <ProtectedRoute>
                  <MoviesGenre />
                </ProtectedRoute>
              }
            />
            <Route
              path='/person/:id'
              element={
                <ProtectedRoute>
                  <PersonInfo />
                </ProtectedRoute>
              }
            />
            <Route
              path='/account'
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </SkeletonTheme>
    </>
  );
};

export default App;
