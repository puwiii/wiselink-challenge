import styled from "styled-components";

export const WalletPage = styled.main`
  display: flex;
  height: calc(100vh - 70px);
`;

export const SpinnerContainer = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WalletAside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: ${({ show }) => show && "3.2em 2em"};
  max-width: ${({ show }) => (show ? "300px" : "0")};
  background: #fefefe;
`;

export const WalletMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em 2em;
  max-height: 100vh;
  overflow-y: auto;
  /* max-width: 1440px; */
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2em;
  padding: 2em 0;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex: 1;
  white-space: nowrap;
  font-size: 1.4rem;

  & > span {
    opacity: 0.4;
    font-size: 0.87rem;
  }
`;

export const Subtitle = styled.h2`
  opacity: 0.4;
  font-size: 0.87rem;
`;

export const Balance = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.87em;
`;

export const NewTransaction = styled.button``;

export const Assets = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1em;
  flex-wrap: wrap;
`;

export const AssetItem = styled.article`
  box-shadow: 0 0px 15px -5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 10px;
  align-items: stretch;
  padding: 2em;
  gap: 2em;
  /* flex: 1; */
`;

export const AssetInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-end;
  /* border-left: 2px solid rgba(0, 0, 0, 0.1); */
  padding-left: 20px;
`;

export const AssetAmount = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: 600;
  font-size: 1.4rem;
  & > span {
    font-size: 0.9rem;
    opacity: 0.4;
  }
`;

export const CloseAside = styled.button`
  align-self: flex-start;
`;

export const Transactions = styled.section`
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
