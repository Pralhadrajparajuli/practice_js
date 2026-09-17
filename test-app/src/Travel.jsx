import { Link } from "react-router-dom";
import traveldata from "./assets/data/travel.json";

const Travel = () => {
    return (
        <main>
            <div className="fashion-hero">

                <img
                    className="fashion-image"
                    src="/src/assets/water.jpeg"
                    alt="fashion"
                />

                <div className="container">
                    <h1>Travel</h1>
                    {/* <p>Welcome to the Travel Page.</p> */}
                </div>

            </div>
             <div className="container">
                <div className="another-container">
                    {traveldata.map((article) => (

                    <div className="article-grid" key={article.id}>

                    <div className="article-content">

                        <h1>{article.title}</h1>

                        <Link to={article.link}>
                        Read More
                        </Link>

                     </div>

                     <div className="article-image-container">

                        <img
                            className="container-image"
                            src={article.image}
                            alt={article.title}
                        />

                      </div>
                    </div>

                   ))}
                </div>
            </div>
        </main>
    );
}

export default Travel;