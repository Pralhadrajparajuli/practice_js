import { useLocation } from "react-router-dom";
import ShareButton from "./Share";
import fashionData from "./assets/data/fashion.json";
import gadgetsData from "./assets/data/gadgets.json";
import travelData from "./assets/data/travel.json";

const Article = () => {

    const location = useLocation();

    const allArticles = [
        ...fashionData,
        ...gadgetsData,
        ...travelData
    ];

    const article = allArticles.find(
        item => item.link === location.pathname
    );

    if (!article) {
        return (
            <main>
                <div className="container">
                    <h1>Article not found</h1>
                </div>
            </main>
        );
    }

    return (
        <main>

            <div className="container">

                <div className="single-article">

                    <h1>{article.title}</h1>

                    <img
                        src={article.image}
                        alt={article.title}
                        className="single-article-image"
                    />
                    <div className="article-description">

                        {article.description.map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}
                        <ShareButton />
                    </div>

                </div>

            </div>

        </main>
    );
};

export default Article;