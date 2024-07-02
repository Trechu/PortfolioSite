'use client';

import { AboutMe } from "./about_me";
import { FooterSimple } from "./footer";
import { NavbarMinimal } from "./navbar";


export default function Home() {
  return (
    <main>
      <NavbarMinimal />
      <AboutMe />
      <FooterSimple />
    </main>
  );
}
