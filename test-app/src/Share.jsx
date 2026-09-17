const ShareButton = () => {

    const handleShare = async () => {

        if (navigator.share) {
            await navigator.share({
                title: document.title,
                text: "Check out this article!",
                url: window.location.href
            });
        } else {
            await navigator.clipboard.writeText(window.location.href);
            alert("Article link copied!");
        }

    };

    return (
        <button
            className="share-button"
            onClick={handleShare}
        >
            Share
        </button>
    );
};

export default ShareButton;