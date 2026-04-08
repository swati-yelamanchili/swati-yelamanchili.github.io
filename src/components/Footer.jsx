export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-session">
                <span className="footer-dot" />
                <span>[session active] Swati Yelamanchili © 2026</span>
            </div>
            <div className="footer-links">
                <a
                    href="https://github.com/swati-yelamanchili"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    github
                </a>
                <a
                    href="https://www.linkedin.com/in/swati-yelamanchili-2509969566"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    linkedin
                </a>
                <a
                    href="mailto:swati.yelamanchili@gmail.com"
                    className="footer-link"
                >
                    email
                </a>
            </div>
        </footer>
    );
}
