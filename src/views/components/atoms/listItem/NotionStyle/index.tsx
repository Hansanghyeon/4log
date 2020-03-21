import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 16px auto;
  column-gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.text[1]};
  margin-bottom: 4px;
`;
const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 3px;
  img {
    width: 100%;
    margin-bottom: 0;
  }
`;

interface Props {
  imgSrc?: string;
  children: React.ReactNode;
}

const NotionStyleList = ({ imgSrc, children }: Props) => (
  <Wrap>
    <ImgWrap>
      {imgSrc ? (
        <img src={imgSrc} alt="" />
      ) : (
        <span role="img" aria-label="page">
          📄
        </span>
      )}
    </ImgWrap>
    <span>{children}</span>
  </Wrap>
);

export default NotionStyleList;
