import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Wrap = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color};
  fill: ${props => props.theme.color};
`;

export const SmLogo = () => (
  <Wrap to="/">
    <span role="img" aria-label="">
      🌔
    </span>
    4log
  </Wrap>
);

export const Logo = () => (
  <Wrap to="/">
    <svg height="100%" width="100%" viewBox="0 0 256 256">
      <path
        d="M49.38,159L116,62.57V128h19c2.76,0,5-2.24,5-5V20h-21.38c-1.64,0-3.18,0.81-4.11,2.16L20.89,157.72
        c-0.58,0.84-0.89,1.83-0.89,2.84V183h165c2.76,0,5-2.24,5-5v-19H49.38z"
      />
      <path d="M116,236v-19c0-2.76,2.24-5,5-5h115v19c0,2.76-2.24,5-5,5H116z" />
      <path d="M165,128v-7c0-2.76,2.24-5,5-5h22v7c0,2.76-2.24,5-5,5H165z" />
      <circle cx="191.75" cy="72.75" r="22.75" />
      <image
        xlinkHref="/favicon.png"
        transform="matrix(0.2971 0 0 0.2971 167.9846 48.9846)"
        width="160"
        height="160"
      />
    </svg>
  </Wrap>
);
