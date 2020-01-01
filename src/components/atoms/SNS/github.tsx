import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { darkModeType } from '@src/utils/interface';
import useDarkMode from 'use-dark-mode';

const LinkWrap = styled(Link)<darkModeType>`
  text-decoration: none;
  color: ${(props) => (props.darkMode ? '#fff' : '#000')};
`;

const Github = () => {
  const darkMode = useDarkMode();
  return (
    <LinkWrap to="https://github.com/Hansanghyeon" darkMode={darkMode.value}>
      <FontAwesomeIcon icon={faGithub} />
    </LinkWrap>
  );
};

export default Github;
