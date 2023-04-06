import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfilePage';
import KindActs from './components/KindActs/KindActs';
import ActsJournal from "./components/ActsJournal/ActsJournal";
// import NotFoundPage from "./pages/NotFoundPage";


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/profile" element={<UserProfile />}> </Route>
                <Route path="/profile/:id" element={<UserProfile />}> </Route>
                <Route path="/kindness" element={<KindActs />}> </Route>
                <Route path="/journal" element={<ActsJournal />}></Route>
                {/* <Route path="*" element={<NotFoundPage />}></Route> */}
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default App;
