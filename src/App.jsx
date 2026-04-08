import { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LockScreen from "./components/LockScreen";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import ResumePage from "./components/ResumePage";

function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 15}s`,
      duration: `${12 + Math.random() * 18}s`,
      size: `${1 + Math.random() * 2}px`,
    }));
  }, []);

  return (
    <div className="particles">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

const PAGES = {
  home: HomePage,
  projects: ProjectsPage,
  resume: ResumePage,
};

function App() {
  const [locked, setLocked] = useState(true);
  const [page, setPage] = useState("home");

  const PageComponent = PAGES[page];

  return (
    <div className="scanlines">
      <Particles />

      {locked ? (
        <LockScreen onUnlock={() => setLocked(false)} />
      ) : (
        <>
          <Navbar page={page} setPage={setPage} />
          <PageComponent key={page} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;