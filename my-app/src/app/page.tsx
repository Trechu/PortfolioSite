'use client';

import { AboutMe } from "./about_me";
import { FooterSimple } from "./footer";
import { NavbarMinimal } from "./navbar";
import { Skills } from "./skills";


export default function Home() {
  return (
    <main>
      <NavbarMinimal />
      <AboutMe />
      <Skills />
      <FooterSimple />
    </main>
  );
}
