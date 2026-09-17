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
import Article from "./Article";
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

                <Route path="/travel/:articleName" element={<Fitness />} />

                <Route path="/fitness/:articleName" element={<Fitness />} />

                <Route path="/wordpress-news-magazine-chic-fashionable-women-new-york" element={<Article1 />} />

                <Route path="/game-changing-virtual-reality-console" element={<Article2 />} />

                <Route path="/discover-magical-sunset-santorini" element={<Article3 />} />

                <Route path="/computer-filters-noise-better-listener" element={<Article4 />} />
               <Route path="/music/:articleName" element={<All />} />
                <Route path="/all/:articleName" element={<All />} />
                <Route path="/fashion/:articleName" element={<Article />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;