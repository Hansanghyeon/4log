/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { graphql } from 'gatsby';
// Bit Components
import Ditto from '@bit/hansanghyeon.card.ditto';
// components
import SEO from '@view/components/seo';
import CategoryList from '@molecule/list/Category';
import Link from '@atom/Link';
import GridAndListToggle from '@atom/toggle/GridAndList';
import {
  Container,
  Row,
  Col,
  GridAndListToggleWrap,
  DittoWrap,
  DepthDittoWrap,
} from './page.style';

type postNode = {
  node: {
    id: string;
    slug: string;
    date: number;
    title: string;
    featuredImage: {
      node: {
        mediaItemUrl: string;
      };
    };
    excerpt: string;
    categories: {
      edges: {
        node: {
          name: string;
          slug: string;
          id: string;
          _acf_taxonomy_category_list: {
            icon: {
              mediaItemUrl: string;
            };
          };
        };
      };
    };
  };
};
type BuildDittoProps = {
  post: postNode;
  isGrid: boolean;
};
const BuildDitto = ({ post, isGrid }: BuildDittoProps) => {
  const { node } = post;
  const { categories, slug, title } = node;
  const props = {
    imgSrc: node.featuredImage?.node.mediaItemUrl,
    excerpt: node.excerpt,
    date: node.date,
    footer: () => <CategoryList data={categories} />,
    title: () => (
      <Link direction="left" to={`/post/${slug}`}>
        {title}
      </Link>
    ),
    isGrid: isGrid,
    key: node.id,
  };
  return <Ditto {...props} />;
};

// 2차원 배열로 재구성
const depthReducer = (
  acc: any[][],
  cur: { node: any },
  idx: string | number,
  arr: { [x: string]: any },
) => {
  const { node } = cur;
  const isThumnail = node?.featuredImage;
  if (!isThumnail) {
    const accIdx = acc?.length;
    if (Array.isArray(acc[accIdx - 1]) && acc[accIdx - 1].length === 1) {
      acc[accIdx - 1].push(arr[idx]);
      return acc;
    }
    acc.push([arr[idx]]);
    return acc;
  }
  acc.push(arr[idx]);
  return acc;
};

// TODO: 여러개의 카테고리를 가져도 활성화되게 변경 -> useCategoryMainVisible 만들기
// 임시 방편
// 현재는 한가지의 카테고리만 가진다고 확정함
const visibleCategory = ({ node }: any) => {
  const isVisible =
    node.categories.edges[0].node._acf_taxonomy_category_main.mainVisible;
  return isVisible;
};

const IndexPage = ({ data }: any) => {
  const [isGrid, setIsGrid] = useState(false);
  const { posts } = data.wpgql;
  const _handleClick = () => {
    setIsGrid(!isGrid);
  };
  const posts2wrap = posts.edges
    .filter(visibleCategory)
    .reduce(depthReducer, []);
  return (
    <>
      <SEO title="매일매일 1%씩 성장하기" />
      <Container>
        <Row.Header />
        <Row>
          <Col col>
            <GridAndListToggleWrap>
              <GridAndListToggle onClick={_handleClick} />
            </GridAndListToggleWrap>
          </Col>
        </Row>
        <Row>
          <Col col>
            <DittoWrap>
              {posts2wrap.map((post: any, index: number) => {
                if (Array.isArray(post)) {
                  return (
                    <DepthDittoWrap isGrid={isGrid} key={`d-${index}`}>
                      {post.map((postData) => {
                        return (
                          <BuildDitto
                            post={postData}
                            isGrid={isGrid}
                            key={postData.node.id}
                          />
                        );
                      })}
                    </DepthDittoWrap>
                  );
                }
                return (
                  <BuildDitto post={post} isGrid={isGrid} key={`d-${index}`} />
                );
              })}
            </DittoWrap>
          </Col>
        </Row>
        <Row.Footer />
      </Container>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    wpgql {
      posts(where: { status: PUBLISH }, first: 99) {
        edges {
          node {
            id
            slug
            date
            title
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            excerpt
            categories {
              edges {
                node {
                  name
                  slug
                  id
                  _acf_taxonomy_category_list {
                    icon {
                      mediaItemUrl
                    }
                    categoryListVisible
                  }
                  _acf_taxonomy_category_main {
                    mainVisible
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
