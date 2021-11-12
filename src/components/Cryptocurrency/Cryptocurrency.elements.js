import styled from "styled-components";

export const CryptoContainer = styled.article`
  /* border: 1px solid #ccc; */
  box-shadow: ${({ isDecorative }) =>
    !isDecorative && "0 0px 10px -5px rgba(0, 0, 0, 0.3)"};
  padding: ${({ isDecorative }) => !isDecorative && "1.2em"};
  border-radius: 3px;
  background: #fff;
  cursor: ${({ isDecorative }) => (isDecorative ? "default" : "pointer")};

  gap: 2em;

  min-width: 200px;
  opacity: ${({ isPlaceholder }) => isPlaceholder && "0.7"};
  filter: ${({ isPlaceholder }) => isPlaceholder && "grayscale(.8)"};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: box-shadow 125ms ease-in-out;

  &:hover {
    box-shadow: ${({ isDecorative }) =>
      !isDecorative && "0 3px 10px -1px rgba(0, 0, 0, 0.15)"};
    /* & > header > img {
      width: 40px;
    } */
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.67em;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.h4`
  font-size: 0.8rem;
  text-align: left;
`;

export const Symbol = styled.span`
  /* font-size: 1rem; */
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: auto;
  opacity: 0.4;
`;

export const Image = styled.img`
  width: 30px;
  transition: width 125ms ease-in-out;
`;
