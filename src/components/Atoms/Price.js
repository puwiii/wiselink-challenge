import React from "react";

import styled from "styled-components";

export const StyledPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ operationType }) =>
    operationType === 1 ? "#cb3234" : "#74a259"};
`;

export const Currency = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.2em;
  color: #000;
  opacity: 0.4;
`;

const Price = ({ price, operationType }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: , // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 6, // (causes 2500.99 to be printed as $2,501)
  });

  const formatedPrice = formatter.format(price);

  return (
    <StyledPrice operationType={operationType}>
      {formatedPrice}
      <Currency>USD</Currency>
    </StyledPrice>
  );
};

export default Price;
