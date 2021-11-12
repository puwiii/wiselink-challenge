import React from "react";

import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  font-size: 1.4rem;
  gap: 1em;
  padding: 1em;
  font-weight: 700;
  color: #2a5082;
  opacity: 0.3;
  flex-direction: column;
`;

const NoData = (props) => {
  return <Box>{props.children}</Box>;
};

export default NoData;
