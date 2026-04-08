export default function Navbar({ page, setPage }) {
    const links = [
        { id: "home", label: "cd home" },
        { id: "projects", label: "cd projects" },
        { id: "resume", label: "cd resume" },
    ];

    return (
        <nav className="navbar">
            <span className="navbar-prompt">swati:portfolio ~$</span>
            <div className="navbar-links">
                {links.map((link) => (
                    <button
                        key={link.id}
                        className={`navbar-link ${page === link.id ? "active" : ""}`}
                        onClick={() => setPage(link.id)}
                    >
                        {link.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}
