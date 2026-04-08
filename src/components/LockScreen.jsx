import { useState, useEffect, useCallback } from "react";

const ASCII_LOGO = `
 ██████╗██╗   ██╗
██╔════╝╚██╗ ██╔╝
╚█████╗  ╚████╔╝
 ╚═══██╗  ╚██╔╝
██████╔╝   ██║
╚═════╝    ╚═╝`.trimStart();

export default function LockScreen({ onUnlock }) {
    const [unlocking, setUnlocking] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    const handleUnlock = useCallback(() => {
        if (unlocking) return;
        setUnlocking(true);
        setTimeout(() => onUnlock(), 500);
    }, [unlocking, onUnlock]);

    useEffect(() => {
        const onKey = () => handleUnlock();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [handleUnlock]);

    useEffect(() => {
        const interval = setInterval(() => setShowCursor((v) => !v), 530);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`lock-screen ${unlocking ? "lock-screen--exit" : ""}`}
            onClick={handleUnlock}
        >
            <div className="lock-content">
                <pre className="lock-ascii">{ASCII_LOGO}</pre>

                <div className="lock-tagline">
                    swati yelamanchili
                </div>

                <div className="lock-subtitle">
                    systems · security · hardware · code
                </div>

                <div className="lock-prompt">
                    <span className="lock-prompt-symbol">&gt;</span>
                    <span className="lock-prompt-text"> click anywhere to enter portfolio</span>
                    <span
                        className="lock-cursor"
                        style={{ opacity: showCursor ? 1 : 0 }}
                    >
                        _
                    </span>
                </div>
            </div>
        </div>
    );
}
