import { useEffect, useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import WhatIDo from "./sections/WhatIDo";
import SelectedWork from "./sections/SelectedWork";
import Stats from "./sections/Stats";
import Process from "./sections/Process";
import Contact from "./sections/Contact";

const getRoute = () => window.location.hash.replace(/^#/, "") || "/";

export default function App() {
  const [route, setRoute] = useState(getRoute());
  useEffect(() => {
    const onChange = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  let page;
  switch (route) {
    case "/skills":
      page = <WhatIDo />;
      break;
    case "/work":
      page = <SelectedWork />;
      break;
    case "/process":
      page = <Process />;
      break;
    case "/contact":
      page = <Contact />;
      break;
    default:
      page = (
        <>
          <Hero />
          <Stats />
        </>
      );
  }

  return (
    <main className="flex min-h-screen flex-col bg-(--color-canvas) text-(--color-ink)">
      <Header route={route} />
      <div className="flex-1">{page}</div>
      {route !== "/contact" && (
        <footer className="mx-auto w-full max-w-6xl border-t border-(--color-ink)/15 px-6 py-6 text-[10px] uppercase tracking-[0.15em] text-(--color-ink-dim)">
          © 2026 Naved Haque · Developer Portfolio
        </footer>
      )}
    </main>
  );
}
