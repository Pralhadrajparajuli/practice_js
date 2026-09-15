import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Main from "./Mainn";
import Fashion from "./Fashion";
import Gadgets from "./Gadgets";
import Travel from "./Travel";
import Fitness from "./Fitness";

import Article1 from "./Articel-1";
import Article2 from "./Articel-2";
import Article3 from "./Articel-3";
import Article4 from "./Articel-4";
import Music   from  "./Music";
import All from "./All";

import "./App.css";

function App() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>

                <Route path="/" element={<Main />} />

                <Route path="/fashion" element={<Fashion />} />

                <Route path="/gadgets" element={<Gadgets />} />

                <Route path="/travel" element={<Travel />} />

                <Route path="/fitness" element={<Fitness />} />

                <Route path="/articel-1" element={<Article1 />} />

                <Route path="/articel-2" element={<Article2 />} />

                <Route path="/articel-3" element={<Article3 />} />

                <Route path="/articel-4" element={<Article4 />} />
                <Route path="/all" element={<All />} />
                <Route path="/music" element={<Music />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;