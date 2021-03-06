import React, { createContext } from "react";
import styled from "styled-components";

import Card from "./Card";
import Followers from "./Followers";

const User = () => {
  return (
    <section className="section">
      <Voker className="section-center">
        <Card />
        <Followers />
      </Voker>
    </section>
  );
};

const Voker = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

export default User;
