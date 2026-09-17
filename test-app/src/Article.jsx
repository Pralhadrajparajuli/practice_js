import { useLocation } from "react-router-dom";
import fashionData from "./assets/data/fashion.json";

const Article = () => {

    const location = useLocation();

    const article = fashionData.find(
        item => item.link === location.pathname
    );

    if (!article) {
        return (
            <div className="container">
                <h1>Article not found</h1>
            </div>
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

                    </div>

                </div>

            </div>

        </main>
    );
};

export default Article;