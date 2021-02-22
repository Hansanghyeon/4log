import styled from 'styled-components';
import { transparentize } from 'polished';

export const RootWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;
export const Wrap = styled.div`
  font-size: 0.7rem;
  word-break: keep-all;
  color: ${({ theme }) => transparentize(0.2, theme.colors.text[0])};
  display: flex;
  align-items: center;
`;

export const Profile = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  margin-right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  img {
    margin-bottom: 0;
  }
`;

export const Introduce = styled.div``;
