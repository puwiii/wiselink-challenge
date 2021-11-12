import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/BarLoader";
import styled from "styled-components";
const override = css`
  display: block;
`;

const SpinnerContainer = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <ClipLoader
        color="#285177"
        loading={true}
        css={override}
        size={50}
        speedMultiplier={2}
      />
    </SpinnerContainer>
  );
};

export default Spinner;
