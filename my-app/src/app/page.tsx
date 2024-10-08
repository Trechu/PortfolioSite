'use client';

import { AboutMe } from "./about_me";
import { FooterSimple } from "./footer";
import { Interests } from "./interests";
import { NavbarMinimal } from "./navbar";
import { Projects } from "./projects";
import { Skills } from "./skills";


export default function Home() {
  return (
    <main>
      <NavbarMinimal />
      <div style={{"margin-right": "20%", "margin-left": "auto"}}>
      <AboutMe />
      <Skills />
      <Projects />
      <Interests />
      </div>
      <FooterSimple />
    </main>
  );
}
