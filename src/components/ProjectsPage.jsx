const PROJECTS = [
    {
        title: "RISC-V Processor",
        repo: "RISCV-Processor",
        description:
            "From single-cycle to pipeline: a fully verified 5-stage RV64I RISC-V processor with hazard detection and forwarding.",
        tech: ["Verilog", "FPGA"],
        github: "https://github.com/swati-yelamanchili/RISCV-Processor",
    },
    {
        title: "5-bit CLA Adder — VLSI",
        repo: "5-bit-cla-adder-vlsi",
        description:
            "Design and implementation of a 5-bit Carry Look-Ahead Adder using 180nm CMOS, including schematic design, NGSPICE simulation, layout in Magic, and FPGA validation.",
        tech: ["Verilog", "NGSPICE", "Magic"],
        github: "https://github.com/swati-yelamanchili/5-bit-cla-adder-vlsi",
    },
    {
        title: "Audio Amplifier BJT Design",
        repo: "audio-amplifier-multistage-bjt-design",
        description:
            "Multi-stage BJT audio amplifier (Differential + CE + Active Filter + Class AB) designed for 20Hz–20kHz, including LTspice simulations and hardware validation.",
        tech: ["LTspice", "Hardware"],
        github: "https://github.com/swati-yelamanchili/audio-amplifier-multistage-bjt-design",
    },
    {
        title: "Adaptive MCL Localization",
        repo: "adaptive-mcl-localization",
        description:
            "Adaptive Monte Carlo Localization (MCL) system for 2D robot pose estimation with dynamic parameter tuning, C++-accelerated raycasting, and robust recovery from particle filter failures.",
        tech: ["Python", "C++"],
        github: "https://github.com/swati-yelamanchili/adaptive-mcl-localization",
    },

    {
        title: "Academic Copilot",
        repo: "academic-copilot",
        description:
            "An AI-powered academic copilot that syncs with Moodle, extracts assignments, tracks deadlines, and prioritizes tasks based on urgency to help students stay organized.",
        tech: ["Python", "Flask", "Chrome Extension"],
        github: "https://github.com/swati-yelamanchili/academic-copilot",
    },
    {
        title: "Password Analyser",
        repo: "Password_analyser",
        description:
            "A Python password-strength analyzer that combines custom heuristic scoring, breach checking, context-aware pattern detection, and zxcvbn comparison, with automated tests and CLI-based reports.",
        tech: ["Python"],
        github: "https://github.com/swati-yelamanchili/Password_analyser",
    },
    {
        title: "Python Keylogger",
        repo: "Python_Keylogger",
        description:
            "A keylogger built to understand OS internals, exploring low-level keyboard input capture and system-level event handling in Python.",
        tech: ["Python", "Security"],
        github: "https://github.com/swati-yelamanchili/Python_Keylogger",
    },
    {
        title: "hack_iiit",
        repo: "hack_iiit",
        description:
            "A comprehensive system for real-time speaker identification and classroom transcript management designed for accessibility.",
        tech: ["Python"],
        github: "https://github.com/swati-yelamanchili/hack_iiit",
    },
    {
        title: "Megathon",
        repo: "Megathon",
        description:
            "Hackathon project built during Megathon — IIIT Hyderabad's flagship hackathon event.",
        tech: ["TypeScript"],
        github: "https://github.com/swati-yelamanchili/Megathon",
    },
    {
        title: "Object-Following Rover",
        repo: "Object-Following-Rover",
        description:
            "Real-time object-following rover built with Arduino, integrating ultrasonic and IR sensors for autonomous detection and motion control.",
        tech: ["C++", "Arduino"],
        github: "https://github.com/swati-yelamanchili/Object-Following-Rover",
    },
];

function ProjectCard({ project }) {
    return (
        <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-window project-card"
        >
            <div className="terminal-header">
                <div className="terminal-dots">
                    <span className="terminal-dot terminal-dot--red" />
                    <span className="terminal-dot terminal-dot--yellow" />
                    <span className="terminal-dot terminal-dot--green" />
                </div>
                <span className="terminal-header-title">~/{project.repo}</span>
            </div>
            <div className="terminal-body">
                <div className="card-title">
                    {project.title}
                    <span className="arrow">↗</span>
                </div>
                <p className="card-desc">{project.description}</p>
                <div className="card-tags">
                    {project.tech.map((t) => (
                        <span key={t} className="card-tag">{t}</span>
                    ))}
                </div>
            </div>
        </a>
    );
}

export default function ProjectsPage() {
    return (
        <div className="page-container page-enter">
            <h1 className="page-title">Projects</h1>



            <div className="card-grid">
                {PROJECTS.map((p) => (
                    <ProjectCard key={p.title} project={p} />
                ))}
            </div>
        </div>
    );
}
