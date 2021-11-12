import styled from "styled-components";

export const TransactionContainer = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  gap: 2em;
  padding: 2em;
  box-shadow: 0 0px 15px -5px rgba(0, 0, 0, 0.1);
`;
export const TransactionType = styled.h2`
  font-size: 1rem;
`;
export const TransactionInfo = styled.div`
  display: flex;
  padding: 1em 0;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 2em;
`;
export const CoinContainer = styled.figure``;

export const InfoField = styled.p`
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
  }
`;

export const Moment = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.67em 1em;
  margin: 1em;
  border-radius: 100px;
  font-weight: 600;
  /* opacity: 0.4; */
  font-size: 0.67rem;
`;
