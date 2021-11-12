import styled from "styled-components";

export const WalletsGridContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;
export const FormNewWallet = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  align-items: stretch;
  gap: 10px;
  padding: 1em;

  & > button {
    align-self: flex-end;
  }
`;
export const WalletsGrid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  padding: 1em;
  gap: 10px;
`;
