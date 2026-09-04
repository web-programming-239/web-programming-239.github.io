import React, { useState } from "react";
import Hero from "./components/Hero.jsx";
import HeaderNav from "./components/HeaderNav.jsx";
import FAQ from "./components/FAQ.jsx";
import Teachers from "./components/Teachers.jsx";
import Footer from "./components/Footer.jsx";
import TimeLine from "./components/TimeLine.jsx";
import { DEFAULT_PROGRAM, PROGRAM_THEMES } from "./constants.js";

export default function App() {
    const [program, setProgram] = useState(DEFAULT_PROGRAM);
    const theme = PROGRAM_THEMES[program];

    return (
        <div
            className="min-h-screen w-full text-[#010604]"
            style={{
                "--theme-dark": theme.dark,
                "--theme-light": theme.light,
                "--theme-accent": theme.accent,
                "--theme-on-dark": theme.onDark,
            }}
        >
            <HeaderNav />
            <main>
                <Hero program={program} onProgramChange={setProgram} />
                <TimeLine />
                <FAQ program={program} onProgramChange={setProgram} />
                <Teachers />
            </main>
            <Footer />
        </div>
    );
}
