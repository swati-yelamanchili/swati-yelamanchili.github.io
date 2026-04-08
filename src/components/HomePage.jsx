import { useState, useRef, useEffect } from "react";

const ASCII_NAME = `
 ██████╗██╗    ██╗ █████╗ ████████╗██╗
██╔════╝██║    ██║██╔══██╗╚══██╔══╝██║
╚█████╗ ██║ █╗ ██║███████║   ██║   ██║
 ╚═══██╗██║███╗██║██╔══██║   ██║   ██║
██████╔╝╚███╔███╔╝██║  ██║   ██║   ██║
╚═════╝  ╚══╝╚══╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝`.trimStart();

const COMMANDS = {
    help: () => [
        { text: "Available commands:", type: "heading" },
        { text: "  whoami       — Display profile info", type: "info" },
        { text: "  ls socials   — List social links", type: "info" },
        { text: "  ls projects  — List featured projects", type: "info" },
        { text: "  skills       — View tech stack", type: "info" },
        { text: "  experience   — View experience", type: "info" },
        { text: "  clear        — Clear terminal", type: "info" },
        { text: "  open github  — Open GitHub profile", type: "info" },
        { text: "  open linkedin — Open LinkedIn", type: "info" },
    ],
    whoami: () => [
        { text: ASCII_NAME, type: "ascii" },
        { text: "", type: "spacer" },
        { text: "ROLE     ECE Student | Cybersecurity Enthusiast", type: "info-row" },
        { text: "LOC      Hyderabad, India", type: "info-row" },
        { text: "STACK    C · C++ · Python · Verilog · JavaScript", type: "info-row" },
    ],
    "ls socials": () => [
        { text: "github", href: "https://github.com/swati-yelamanchili", type: "link" },
        { text: "linkedin", href: "https://www.linkedin.com/in/swati-yelamanchili-2509969566/", type: "link" },
        { text: "email", href: "mailto:swati.yelamanchili@gmail.com", type: "link" },
    ],
    "ls projects": () => [
        { text: "» RISC-V Processor             — 5-stage pipelined RV64I processor", type: "info" },
        { text: "» Academic Copilot             — AI-powered Moodle sync + task manager", type: "info" },
        { text: "» 5-bit CLA Adder VLSI        — 180nm CMOS carry look-ahead adder", type: "info" },
        { text: "» Adaptive MCL Localization    — Robot pose estimation + C++ raycasting", type: "info" },
        { text: "» Password Analyser            — Strength analyzer + breach checker", type: "info" },
        { text: "» Python Keylogger             — OS internals exploration", type: "info" },
        { text: "» Megathon                     — IIIT-H flagship hackathon project", type: "info" },
        { text: "» Object-Following Rover       — Arduino + ultrasonic/IR autonomous rover", type: "info" },
        { text: "» Audio Amplifier BJT          — Multi-stage 20Hz–20kHz amplifier", type: "info" },
        { text: "» hack_iiit                    — Real-time speaker ID + transcription", type: "info" },
        { text: "", type: "spacer" },
    ],
    skills: () => [
        { text: "Languages:    C, C++, Python, JavaScript, Verilog, MATLAB", type: "info" },
        { text: "Web:          HTML, CSS, TypeScript, Flask, FastAPI, REST APIs", type: "info" },
        { text: "Frontend:     React, Node.js, Tailwind CSS, Chrome Extensions", type: "info" },
        { text: "Databases:    PostgreSQL, Firebase", type: "info" },
        { text: "Security:     Kali Linux, Burp Suite, OWASP Top 10", type: "info" },
        { text: "Tools:        Git, Linux, Docker, Arduino, LTspice, NGSPICE, Magic VLSI", type: "info" },
        { text: "Domains:      Systems Programming, Cybersecurity, Embedded Systems", type: "info" },
        { text: "              Digital Design, FPGA & VLSI, Applied ML", type: "info" },
    ],
    experience: () => [
        { text: "Experience:", type: "heading" },
        { text: "", type: "spacer" },
        { text: "  Undergraduate Researcher", type: "accent" },
        { text: "  Cyber Manthan Center, IIIT Hyderabad · Full-time", type: "info" },
        { text: "  Apr 2026 – Present", type: "muted" },
        { text: "  Research under Prof. Sandeep Shukla on security.", type: "info" },
        { text: "", type: "spacer" },
        { text: "  Electronics Content Creator Intern", type: "accent" },
        { text: "  LearnElectronics India · Remote", type: "info" },
        { text: "  Sep 2025 – Nov 2025", type: "muted" },
        { text: "  Created educational content on electronics concepts.", type: "info" },
        { text: "", type: "spacer" },
        { text: "Campus & Leadership:", type: "heading" },
        { text: "", type: "spacer" },
        { text: "  Content Writing Head        Felicity, IIIT Hyderabad", type: "info" },
        { text: "  Member of Election Commission   IIIT Hyderabad", type: "info" },
        { text: "  Apex Mentor                 IIIT Hyderabad", type: "info" },
        { text: "  Marketing & Social Media    E-Cell, IIIT Hyderabad", type: "info" },
        { text: "  Marketing Team Lead         Pentaprism", type: "info" },
        { text: "  Events & Logistics          GameTheory @ IIIT-H", type: "info" },
        { text: "  Member of Parliament        Students Parliament, IIIT-H", type: "info" },
        { text: "  Media Team                  Decore, IIIT Hyderabad", type: "info" },
    ],
    "open github": () => {
        window.open("https://github.com/swati-yelamanchili", "_blank");
        return [{ text: "Opening GitHub...", type: "accent" }];
    },
    "open linkedin": () => {
        window.open("https://www.linkedin.com/in/swati-yelamanchili-2509969566/", "_blank");
        return [{ text: "Opening LinkedIn...", type: "accent" }];
    },
};

export default function HomePage() {
    const [history, setHistory] = useState([]);
    const [input, setInput] = useState("");
    const [cmdHistory, setCmdHistory] = useState([]);
    const [cmdIndex, setCmdIndex] = useState(-1);
    const [booted, setBooted] = useState(false);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);


    useEffect(() => {
        const bootLines = [
            { text: "$ whoami", type: "prompt-line" },
            ...COMMANDS.whoami(),
            { text: "", type: "spacer" },
            { text: "$ ls socials", type: "prompt-line" },
            ...COMMANDS["ls socials"](),
            { text: "", type: "spacer" },
            { text: "$ ls projects", type: "prompt-line" },
            ...COMMANDS["ls projects"](),
            { text: "Type 'help' for available commands.", type: "hint" },
        ];
        setHistory(bootLines);
        setBooted(true);
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    useEffect(() => {
        if (booted) inputRef.current?.focus();
    }, [booted]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();
        if (!cmd) return;

        const promptLine = { text: `$ ${cmd}`, type: "prompt-line" };
        setCmdHistory((prev) => [cmd, ...prev]);
        setCmdIndex(-1);

        if (cmd === "clear") {
            setHistory([]);
            setInput("");
            return;
        }

        const handler = COMMANDS[cmd];
        if (handler) {
            setHistory((prev) => [...prev, promptLine, ...handler()]);
        } else {
            setHistory((prev) => [
                ...prev,
                promptLine,
                { text: `command not found: ${cmd}. Type 'help' for available commands.`, type: "error" },
            ]);
        }
        setInput("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (cmdIndex < cmdHistory.length - 1) {
                const i = cmdIndex + 1;
                setCmdIndex(i);
                setInput(cmdHistory[i]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (cmdIndex > 0) {
                const i = cmdIndex - 1;
                setCmdIndex(i);
                setInput(cmdHistory[i]);
            } else {
                setCmdIndex(-1);
                setInput("");
            }
        }
    };

    const renderLine = (line, i) => {
        if (line.type === "ascii") {
            return <pre key={i} className="ascii-name">{line.text}</pre>;
        }
        if (line.type === "prompt-line") {
            return (
                <div key={i} style={{ marginTop: "4px" }}>
                    <span className="prompt">$ </span>
                    <span className="prompt-cmd">{line.text.slice(2)}</span>
                </div>
            );
        }
        if (line.type === "info-row") {
            const parts = line.text.split(/\s{2,}/);
            return (
                <div key={i} className="info-row">
                    <span className="info-label">{parts[0]}</span>
                    <span className="info-value">{parts[1]}</span>
                </div>
            );
        }
        if (line.type === "link") {
            return (
                <div key={i} style={{ marginLeft: "16px" }}>
                    <a href={line.href} target="_blank" rel="noopener noreferrer" className="social-link">
                        {line.text}
                    </a>
                </div>
            );
        }
        if (line.type === "heading") {
            return <div key={i} style={{ color: "var(--green)", fontWeight: 600 }}>{line.text}</div>;
        }
        if (line.type === "error") {
            return <div key={i} style={{ color: "#ff5f57" }}>{line.text}</div>;
        }
        if (line.type === "accent") {
            return <div key={i} style={{ color: "var(--green)" }}>{line.text}</div>;
        }
        if (line.type === "muted") {
            return <div key={i} style={{ color: "var(--text-muted)" }}>{line.text}</div>;
        }
        if (line.type === "hint") {
            return <div key={i} className="hint-text">{line.text}</div>;
        }
        if (line.type === "spacer") {
            return <div key={i} className="section-gap" />;
        }
        return (
            <div key={i} style={{ color: "var(--text-dim)", whiteSpace: "pre-wrap" }}>
                {line.text}
            </div>
        );
    };

    return (
        <div className="page-container page-enter">
            <div className="terminal-window hero-terminal">
                <div className="terminal-header">
                    <div className="terminal-dots">
                        <span className="terminal-dot terminal-dot--red" />
                        <span className="terminal-dot terminal-dot--yellow" />
                        <span className="terminal-dot terminal-dot--green" />
                    </div>
                    <span className="terminal-header-title">swati@portfolio ~</span>
                </div>
                <div
                    className="terminal-body"
                    onClick={() => inputRef.current?.focus()}
                >
                    {history.map(renderLine)}


                    <form onSubmit={handleSubmit} className="terminal-input-row">
                        <span className="prompt">$ </span>
                        <input
                            ref={inputRef}
                            className="terminal-input"
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            spellCheck={false}
                            autoComplete="off"
                        />
                        <span className="cursor-blink" />
                    </form>
                    <div ref={bottomRef} />
                </div>
            </div>
        </div>
    );
}
