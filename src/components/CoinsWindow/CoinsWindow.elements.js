import styled from "styled-components";

export const WindowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 1em;
`;

export const CoinsWindowContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 920px;
  max-height: 720px;
  overflow: auto;
  background: #fff;
  padding: 2em 1em;
  border-radius: 10px;
  padding-left: calc(1em + 10px);
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export const Title = styled.h4``;

export const Message = styled.span``;

export const CoinsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
`;

export const Pagination = styled.div`
  display: flex;
  gap: 0.37em;
  padding: 1em;
  align-items: center;
  justify-content: center;
`;

export const ItemPagination = styled.button`
  outline: none;
  border: none;
  cursor: ${({ isActive }) => (isActive ? "default" : "pointer")};

  font-size: 1rem;
  background: ${({ isActive }) => (isActive ? "#232323" : "transparent")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
  border-radius: 100%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
