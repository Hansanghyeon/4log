import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Container, Col, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

const Profile = styled(Image)`
  margin-bottom: 0;
  min-width: 44;
  border-radius: 100%;
`;

const Wrap = styled(Container)`
  font-size: 0.7rem;
  word-break: keep-all;
  margin-bottom: 8px;
  color: ${props =>
    props.theme.isDark
      ? darken(0.5, props.theme.color.text[0])
      : lighten(0.5, props.theme.color.text[0])};
`;

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 44, height: 44, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <Wrap>
      <Row>
        <Profile
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          imgStyle={{
            borderRadius: '50%',
          }}
        />
        <Col col>
          Written by&nbsp;
          <strong>{author}</strong>
          <br />
          프로그래밍 언어, 소프트웨어, 커뮤니티에 관심이 많습니다.
        </Col>
      </Row>
    </Wrap>
  );
};

export default Bio;
