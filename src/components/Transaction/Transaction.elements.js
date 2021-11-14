import styled from "styled-components";

export const TransactionContainer = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  gap: 3em;
  padding: 2em;
  box-shadow: 0 0px 15px -5px rgba(0, 0, 0, 0.1);
`;
export const TransactionType = styled.h2`
  font-size: 1rem;
`;
export const TransactionInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 1em 0;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  gap: 2em;

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;
export const CoinContainer = styled.figure``;

export const InfoField = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: left;
  & > span {
    font-weight: 600;
    opacity: 0.4;
    font-size: 0.67rem;
    display: flex;
    align-items: center;
    gap: 5px;

    & > svg {
      font-size: 1.1rem;
    }
  }
`;

export const Moment = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.37em 1em;
  margin: 2.5em;
  border-radius: 100px;
  font-weight: 600;
  /* opacity: 0.4; */
  font-size: 0.67rem;
  display: flex;
  align-items: center;
  gap: 0.37em;
  color: #285177;
  & > svg {
    font-size: 1.1rem;
  }
`;

export const TransactionRemove = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 1em;
  font-weight: 600;
  background: transparent;
  font-size: 0.67rem;
  color: #cc5555;

  & > svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: #cc555511;
  }
`;
