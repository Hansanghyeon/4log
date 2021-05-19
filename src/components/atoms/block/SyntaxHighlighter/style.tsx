import styled from 'styled-components';

const PreWrap = styled.div``;
PreWrap.defaultProps = {
  className: 'preWrap',
};
export { PreWrap };

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  transform: translateY(0.8rem);
  font-size: 0.85rem;
  margin-top: -0.8rem;
`;
export const FileName = styled.div`
  padding: 0.2em 1em;
  border-radius: 0.3em;
  background-color: ${({ theme }) => theme.palette.bg[1]};
`;
export const Lang = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  margin-bottom: 0;
`;
