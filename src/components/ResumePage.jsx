export default function ResumePage() {
    return (
        <div className="page-container page-enter">
            <h1 className="page-title">Resume</h1>


            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-dots">
                        <span className="terminal-dot terminal-dot--red" />
                        <span className="terminal-dot terminal-dot--yellow" />
                        <span className="terminal-dot terminal-dot--green" />
                    </div>
                    <span className="terminal-header-title">~/Resume.pdf</span>
                </div>
                <div className="cv-embed">
                    <iframe
                        src="/Resume.pdf"
                        title="Swati Yelamanchili Resume"
                    />
                </div>
            </div>

            <div className="cv-actions">
                <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cv-btn cv-btn--primary"
                >
                    $ open resume.pdf
                </a>
                <a
                    href="/Resume.pdf"
                    download="Swati_Yelamanchili_Resume.pdf"
                    className="cv-btn cv-btn--secondary"
                >
                    $ download resume.pdf
                </a>
            </div>
        </div>
    );
}
