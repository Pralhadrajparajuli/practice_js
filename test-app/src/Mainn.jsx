import { useState } from "react";
import navtabs from "./assets/data/nav-tab.json";
import dontMiss from "./assets/data/dontmiss.json";
import lifestyle from "./assets/data/life-style.json";
import { Link } from "react-router-dom";

const Main = () => {
  const [selectedTab, setSelectedTab] = useState("fitness");
  const [selectedLifestyle, setSelectedLifestyle] = useState("all");

  const currentNews = dontMiss[selectedTab];
  const currentLifestyle = lifestyle[selectedLifestyle];

  return (
    <main>
      <div className="container">

        {/* Featured News */}
        <div className="news-container">

          <Link to="/wordpress-news-magazine-chic-fashionable-women-new-york">
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

            <Link to="/game-changing-virtual-reality-console" className="medium">
              <div className="card">
                <img src="/src/assets/gadgets.jpeg" alt="Gadgets" />

                <div className="title">
                  <p>
                    Game Changing Virtual Reality Console Hits the Market
                  </p>
                </div>
              </div>
            </Link>

            <div className="secondary-grid">

              <Link to="/discover-magical-sunset-santorini" className="small">
                <div className="card">
                  <img src="/src/assets/travel.jpeg" alt="Travel" />

                  <div className="title" style={{ fontSize: "15px" }}>
                    <p>
                      Discover the Most Magical Sunset in Santorini
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="/computer-filters-noise-better-listener" className="small">
                <div className="card">
                  <img src="/src/assets/review.jpeg" alt="Review" />

                  <div className="title" style={{ fontSize: "15px" }}>
                    <p>
                      Computer Filters Noise to Make You a Better Listener
                    </p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </div>


        {/*  DON'T MISS  */}

        <div className="another-container">
          <div className="section-nav">

            <div className="badge">
              DON'T MISS
            </div>
            <div className="nav-tabs dont-miss-tabs">
              {navtabs.dontMiss.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={
                  selectedTab === item.name.toLowerCase()
                  ? "active"
                  : ""
                }
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedTab(
                      item.name.toLowerCase()
                    );
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

        <Link
            to={currentNews.main.link}
            state={{
                title: currentNews.main.title,
                image: currentNews.main.image
            }}
        >
            <h3>
                {currentNews.main.title}
            </h3>
        </Link>

    </div>


    <div className="right-news">

        {currentNews.other.map((article) => (

            <div
                className="right-grid"
                key={article.title}
            >

                <img
                    src={article.image}
                    alt={article.title}
                />

                <Link
                    to={article.link}
                    state={{
                        title: article.title,
                        image: article.image
                    }}
                >
                    <h3>
                        {article.title}
                    </h3>
                </Link>

            </div>

        ))}

    </div>

</div>


        {/*  LIFESTYLE  */}

        <div className="another-container">

          <div className="section-nav">

            <div className="another-badge">
              Lifestyle News
            </div>

             <div className="nav-tabs lifestyle-tabs">

              {navtabs.lifestyle.map((item) => (

                <a
                  key={item.name}
                  href="#"
                  className={
                  selectedLifestyle === item.name.toLowerCase()
                  ? "active"
                  : ""
                }
                  onClick={(e) => {
                    e.preventDefault();

                    setSelectedLifestyle(
                      item.name.toLowerCase()
                    );
                  }}
                >
                  {item.name}
                </a>

              ))}

            </div>

          </div>

        </div>


        {/* Lifestyle Articles */}
        <div className="news-row">

            <div className="left-news">

                <img
                    src={currentLifestyle.main.image}
                    alt={currentLifestyle.main.title}
                />

                <Link
                    to={currentLifestyle.main.link}
                    state={{
                        title: currentLifestyle.main.title,
                        image: currentLifestyle.main.image
                    }}
                >
                    <h3>
                        {currentLifestyle.main.title}
                    </h3>
                </Link>

            </div>

            <div className="right-news">

                {currentLifestyle.other.map((article) => (

                    <div
                        className="right-grid"
                        key={article.title}
                    >

                        <img
                            src={article.image}
                            alt={article.title}
                        />

                        <Link
                            to={article.link}
                            state={{
                                title: article.title,
                                image: article.image
                            }}
                        >
                            <h3>
                                {article.title}
                            </h3>
                        </Link>

                    </div>

                ))}

            </div>

        </div>
      </div>
     </main>
  );
};

export default Main;