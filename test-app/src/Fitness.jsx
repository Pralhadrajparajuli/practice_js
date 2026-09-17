import { useLocation } from "react-router-dom";

const Fitness = () => {

    const location = useLocation();

    const title =
        location.state?.title ||
        "Increase your Endurance Through the Pilates Method";

    const image =
        location.state?.image ||
        "/src/assets/girl.jpeg";

    return (
        <main>
            <div className="container">

                <h1>{title}</h1>

                <img
                    className="article-image"
                    src={image}
                    alt={title}
                />

                <p className="article-text">
                    We woke reasonably late following the feast and free
                    flowing wine the night before. After gathering ourselves
                    and our packs, we headed down to our homestay family’s
                    small dining room for breakfast.
                </p>

                <p className="article-text">
                    Refreshingly, what was expected of her was the same thing
                    that was expected of Lara Stone: to take a beautiful picture.
                </p>

                <p className="article-text">
                    We were making our way to the Rila Mountains, where we
                    were visiting the Rila Monastery where we enjoyed scrambled
                    eggs, toast, mekitsi, local jam and peppermint tea.
                </p>

                <img
                    className="article-image"
                    src="/src/assets/girl2.jpeg"
                    alt="girl photo"
                />

                <p className="article-text">
                   We wandered the site with busloads of other tourists, yet strangely the place did not seem crowded. I’m not sure if it was the sheer size of the place, or whether the masses congregated in one area and didn’t venture far from the main church, but I didn’t feel overwhelmed by tourists in the monastery.
                </p>

            </div>
        </main>
    );
};

export default Fitness;