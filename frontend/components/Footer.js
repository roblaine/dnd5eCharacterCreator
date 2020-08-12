import Link from 'next/link';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

const StyledUl = styled.ul`
  list-style: none;
`;

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <StyledUl>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
        </StyledUl>
      </footer>
    );
  }
}

export default Footer;
