import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BookingPage from "./pages/BookingPage";
import Layout from "./pages/Layout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="/booking" exact element={<BookingPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
