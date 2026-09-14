
import navdata from "./assets/data/nav.json";
const Header=()=> {
    return (
        <header>
            <div className="container">
                <img src="/src/assets/logo.jpeg" className="logo" />

                <div className="nav">
                    {navdata.map(item => (
                    <a key={item.name} href={item.link}>
                    {item.name}
                  </a>
                ))}
                </div>
            </div>
        </header>
    );
}

export default Header;

