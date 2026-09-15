
// import navdata from "./assets/data/nav.json";
// const Header=()=> {
//     return (
//         <header>
//             <div className="container">
//                 <img src="/src/assets/logo.jpeg" className="logo" />

//                 <div className="nav">
//                     {navdata.map(item => (
//                     <a key={item.name} href={item.link}>
//                     {item.name}
//                   </a>
//                 ))}
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;

import { useState } from "react";
import navdata from "./assets/data/nav.json";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="container">

                <img
                    src="/src/assets/logo.jpeg"
                    className="logo"
                    alt="Logo"
                />

                <button
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                <div className={`nav ${menuOpen ? "open" : ""}`}>
                    {navdata.map(item => (
                        <a
                            key={item.name}
                            href={item.link}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

            </div>
        </header>
    );
};

export default Header;