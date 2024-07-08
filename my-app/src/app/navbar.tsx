import { useState } from 'react';
import { UnstyledButton} from '@mantine/core';
import classes from './styles/navbar.module.css';

interface NavbarLinkProps {
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ label, active, onClick }: NavbarLinkProps) {
  return (
    <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        {label}
    </UnstyledButton>
  );
}

const sections = [
  { label: 'About me' },
  { label: 'Skills' },
  { label: 'Projects' },
  { label: 'Interests'}
];

function scroll_to(id: Number){
  window.scrollTo({
    top: (document.getElementById("section_" + id)?.offsetTop),
    behavior: "smooth"
  })
}

export function NavbarMinimal() {
  const [active, setActive] = useState(-1);

  const links = sections.map((link, index) => (
      <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
                      setActive(index)
                      scroll_to(index)
                      }}
      />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        {links}
      </div>
    </nav>
  );
}