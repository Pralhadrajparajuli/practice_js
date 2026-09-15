import { useState } from "react";
import navtabs from "./assets/data/nav-tab.json";
import dontMiss from "./assets/data/dontmiss.json";
import { Link } from "react-router-dom";

const Main = () => {
  const [selectedTab, setSelectedTab] = useState("fitness");
  const currentNews = dontMiss[selectedTab];
  console.log(navtabs, "nav tabs items");
  return (
    <main>
      <div className="container">
        {/* Featured News */}
        <div className="news-container">
          <Link to="/fashion">
            <div className="card">
              <img src="/src/assets/fasgion.jpeg" alt="Fashion" />

              <div className="title">
                <p>
                  WordPress News Magazine Charts the Most Chic and Fashionable
                  Women of New York City
                </p>
              </div>
            </div>
          </Link>

          <div className="right-section">
            <Link to="/gadgets" className="medium">
              <div className="card">
                <img src="/src/assets/gadgets.jpeg" alt="Gadgets" />

                <div className="title">
                  <p>Game Changing Virtual Reality Console Hits the Market</p>
                </div>
              </div>
            </Link>

            <div className="secondary-grid">
              <Link to="/travel" className="small">
                <div className="card">
                  <img src="/src/assets/travel.jpeg" alt="Travel" />

                  <div className="title" style={{ fontSize: "15px" }}>
                    <p>Discover the Most Magical Sunset in Santorini</p>
                  </div>
                </div>
              </Link>

              <Link to="/review" className="small">
                <div className="card">
                  <img src="/src/assets/review.webp" alt="Review" />

                  <div className="title" style={{ fontSize: "15px" }}>
                    <p>Computer Filters Noise to Make You a Better Listener</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Don't Miss */}
       <div className="another-container">
          <div className="section-nav">
            <div className="badge">DON'T MISS</div>

            <div className="nav-tabs">
              {navtabs.dontMiss.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedTab(item.name.toLowerCase());
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Don't Miss News */}
          <div className="news-row">

            <div className="left-news">

              <img
                src={currentNews.main.image}
                alt={currentNews.main.title}
              />

              <Link to={currentNews.main.link}>
                <h3>{currentNews.main.title}</h3>
              </Link>

            </div>


            <div className="right-news">

              {currentNews.other.map((article) => (

                <div className="right-grid" key={article.title}>

                  <img
                    src={article.image}
                    alt={article.title}
                  />

                  <Link to={article.link}>
                    <h3>{article.title}</h3>
                  </Link>

                </div>

              ))}

            </div>

          </div>

        {/* Lifestyle News */}
        <div className="another-container">
          <div className="section-nav">
            <div className="another-badge">Lifestyle News</div>

            <div className="nav-tabs">
            {navtabs.dontMiss.map((item) => (
              <a href={item.link}>{item.name}</a>
            ))}
            </div>
          </div>
        </div>

        {/* Lifestyle Articles */}
        <div className="news-row">
          <div className="left-news">
            <img src="/src/assets/house.jpeg" alt="House" />

            <a href="#">
              <h3>
                Now Is the Time to Think About Your Small-Business Success
              </h3>
            </a>
          </div>

          <div className="right-news">
            <div className="left-news">
              <img src="/src/assets/radio.jpeg" alt="Radio" />

              <a href="#">
                <h3>
                  Radio Air Time Marketing: A New Strategy for the Economy
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
