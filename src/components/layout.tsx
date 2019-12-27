import React from 'react';
import useDarkMode from 'use-dark-mode';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';
import {
  BaseCSS,
  GridThemeProvider,
  Container,
  Row,
  Col,
} from 'styled-bootstrap-grid';
import { rhythm, scale } from '../utils/typography';

import gridTheme from './config/gridTheme';
import GNB from './organisms/GNB';

interface styledTheme {
  mainColor: string;
}
const styledTheme: styledTheme = {
  mainColor: 'purple',
};

interface Props {
  location: Location;
  title: string;
  children?: any;
}


const Layout = ({ location, title, children }: Props) => {
  const rootPath = '/';
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          {title}
        </Link>
      </h3>
    );
  }

  const gnbWidth: number = 100;

  interface darkModeTypes {
    darkMode?: boolean;
  }
  const mainBg = '#f2f4f7';
  const darkMainBg = '#1c1c1c';
  const MainLayout = styled.div`
    margin-left: ${gnbWidth}px;
    height: 100%;
    padding-top: 20px;
  `;
  const Inner = styled.div<darkModeTypes>`
    background-color: ${(props) => (props.darkMode ? darkMainBg : mainBg)};
    height: 100%;
    transition: all .5s;
  `;

  const darkMode = useDarkMode();
  return (
    <>
      <BaseCSS />
      <ThemeProvider theme={styledTheme}>
        <GridThemeProvider gridTheme={gridTheme}>
          <>
            <GNB width={gnbWidth} />
            <MainLayout>
              <Inner darkMode={darkMode.value}>
                <Container>
                  <Row>
                    <Col col>
                      <header>
                        {header}
                      </header>
                    </Col>
                  </Row>
                  <main>{children}</main>
                  <footer>
                    © 2019 Hansanghyeon
                    <br />
                    Powered by
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                    .
                  </footer>
                </Container>
              </Inner>
            </MainLayout>
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
