import { Container, Group, Anchor } from '@mantine/core';
import classes from './styles/footer.module.css';

const links = [
  { link: 'https://github.com/Trechu', label: 'GitHub' },
  { link: 'https://www.linkedin.com/in/tomasz-grzybacz-2b660a2b5/', label: 'LinkedIn'}
];

export function FooterSimple() {
  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group className={classes.links}>{items}</Group>
        <p>Email: tomaszgrzybaczcontact@gmail.com</p>
        <p>© 2024 - All Rights Reserved</p>
      </Container>
    </div>
  );
}