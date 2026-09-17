const Footer = () => {
    return (
        <footer>
            <div className="container">

                <div className="footer-content">

                    <div className="footer-section">
                        <img
                            src="/src/assets/logo.jpeg"
                            className="footer-logo"
                            alt="News Magazine Logo"
                        />

                        <h2>News Magazine</h2>

                        <p>
                            Your source for the latest news, fashion,
                            gadgets, travel, and lifestyle stories.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h3>Follow Us</h3>

                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                    </div>

                    <div className="footer-section">
                        <h3>Contact</h3>

                        <p>Email: news@example.com</p>
                        <p>Phone: +977 9800000000</p>
                        <p>Pokhara, Nepal</p>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>© 2026 News Magazine. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;