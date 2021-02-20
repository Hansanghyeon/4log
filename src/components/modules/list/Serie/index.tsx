import { useState } from 'react';
import {
  FaCaretDown,
  FaCaretUp,
  FaChevronRight,
  FaChevronLeft,
} from 'react-icons/fa';
import Link from 'next/link';
import {
  Img,
  Wrap,
  Header,
  Title,
  Footer,
  Controller,
  Body,
  Ol,
  Li,
  MoreBtn,
  ArrowBtn,
  CurrentLi,
} from './style';
import { SerieListType, accPostType } from './index.type';

const SerieList: React.FC<SerieListType> = ({ data }: SerieListType) => {
  const { query, currentPostId } = data;
  const [toggle, setToggle] = useState(true);
  const _handleClick = () => {
    setToggle(!toggle);
  };
  const prevNextPost = query.devs.edges.reduce(
    (acc: accPostType, cur: any, idx: any, arr: any) => {
      const { node } = cur;
      if (arr.length <= 1) return acc;
      if (node.id === currentPostId) {
        if (idx === 0) {
          acc.next = arr[idx + 1];
          return acc;
        }
        if (idx >= 1) {
          acc.prev = arr[idx - 1];
          acc.next = arr[idx + 1];
          return acc;
        }
      }
      return acc;
    },
    { prev: null, next: null },
  );
  return (
    <Wrap>
      <Header toggle={toggle}>
        <Title>{query.name}</Title>
        <Img
          src={`${process.env.FILE_SERVER}/4log/icons/book.svg`}
          alt="Series"
        />
      </Header>
      <Body toggle={toggle}>
        <Ol>
          {query.devs.edges.map(({ node }) => {
            if (node.id === currentPostId) {
              return (
                <CurrentLi key={`${currentPostId}-${node.id}`}>
                  {node.title}
                </CurrentLi>
              );
            }
            return (
              <Li key={`${currentPostId}-${node.id}`}>
                <Link as={`/dev/${node.slug}`} href="/dev/[slug]">
                  {node.title}
                </Link>
              </Li>
            );
          })}
        </Ol>
      </Body>
      <Footer>
        <MoreBtn type="button" onClick={_handleClick}>
          {toggle ? <FaCaretDown /> : <FaCaretUp />}
          <span>{toggle ? '목록보기' : '접기'}</span>
        </MoreBtn>
        <Controller>
          {prevNextPost.prev ? (
            <Link href={`/dev/${prevNextPost.prev.node.slug}`}>
              <ArrowBtn type="button">
                <FaChevronLeft />
              </ArrowBtn>
            </Link>
          ) : (
            <ArrowBtn type="button" disable>
              <FaChevronLeft />
            </ArrowBtn>
          )}
          {prevNextPost.next ? (
            <Link href={`/dev/${prevNextPost.next.node.slug}`}>
              <a>
                <ArrowBtn type="button">
                  <FaChevronRight />
                </ArrowBtn>
              </a>
            </Link>
          ) : (
            <ArrowBtn type="button" disable>
              <FaChevronRight />
            </ArrowBtn>
          )}
        </Controller>
      </Footer>
    </Wrap>
  );
};

export default SerieList;