import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfilePage';
import KindActs from './components/KindActs/KindActs';
import NotFoundPage from "./pages/NotFoundPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import KindnessJournal from './components/KindnessJournal/KindnessJournal';
import UserSettings from './components/UserSettings/UserSettings';
import AboutUsPage from './pages/AboutUsPage';


function App() {
    return (
        <BrowserRouter>
            <ToastContainer position="top-center" />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutUsPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/profile" element={<UserProfile />}> </Route>
                <Route path="/profile/:id" element={<UserProfile />}> </Route>
                <Route path="/kindness" element={<KindActs />}> </Route>
                <Route path="/profile/journal/:id" element={<KindnessJournal />}></Route>
                <Route path="/profile/settings/:id" element={<UserSettings />}></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default App;
