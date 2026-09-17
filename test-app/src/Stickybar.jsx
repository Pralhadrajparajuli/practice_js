const StickySidebar = () => {
  return (
    <aside className="sticky-sidebar">
      {/* Stay Connected */}
      <div className="sticky-note">
        <h3>STAY CONNECTED</h3>

        <p>Follow us for the latest updates.</p>

        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>

      {/* Advertisement */}
      <div className="sidebar-ad">
        <h3>ADVERTISEMENT</h3>

        <img
          className="ad-image"
          src="/src/assets/advertisement.jpeg"
          alt="Advertisement"
        />
      </div>

      {/* Latest Articles */}
      <div className="latest-articles">
        <h3>LATEST ARTICLES</h3>

        <div className="sidebar-article">
          <img src="/src/assets/travel.jpeg" alt="Santorini" />

          <p>Discover the Most Magical Sunset in Santorini</p>
        </div>

        <div className="sidebar-article">
          <img src="/src/assets/gadgets.jpeg" alt="Virtual Reality" />

          <p>Game Changing Virtual Reality Console Hits the Market</p>
        </div>

        <div className="sidebar-article">
          <img src="/src/assets/review.jpeg" alt="Computer Filters" />

          <p>Computer Filters Noise to Make You a Better Listener</p>
        </div>
      </div>
    </aside>
  );
};

export default StickySidebar;
