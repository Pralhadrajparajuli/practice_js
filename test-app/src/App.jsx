import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Main from "./Mainn";
import Fashion from "./Fashion";
import Gadgets from "./Gadgets";
import Travel from "./Travel";
import Review from "./Review";

import "./App.css";
import Fitness from "./Fitness";

function App() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>

                <Route path="/" element={<Main />} />

                <Route path="/fashion" element={<Fashion />} />

                <Route path="/gadgets" element={<Gadgets />} />

                <Route path="/travel" element={<Travel />} />

                <Route path="/review" element={<Review />} />

                <Route path="/fitness" element={<Fitness />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;