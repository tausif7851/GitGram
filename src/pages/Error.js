import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Voker>
      <div>
        <h1>404</h1>
        <h3>sorry, the page you trying cannot be found</h3>
        <Link to="/" className="btn">
          Back home
        </Link>
      </div>
    </Voker>
  );
};
const Voker = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: lightgray;
  text-align: center;
  h1 {
    font-size: 12rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
export default Error;
