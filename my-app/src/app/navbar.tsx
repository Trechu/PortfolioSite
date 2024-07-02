import { useState } from 'react';
import { UnstyledButton} from '@mantine/core';
import classes from './navbar.module.css';

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
];

export function NavbarMinimal() {
  const [active, setActive] = useState();

  const links = sections.map((link, index) => (
      <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
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