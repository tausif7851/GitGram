import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loadingGif from "../images/preloader.gif";
import styled from "styled-components";

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <Voker>
        <img src={loadingGif} alt="spinner" />
      </Voker>
    );
  }
  if (error) {
    return (
      <Voker>
        <h1> {error.message}</h1>
      </Voker>
    );
  }

  return <>{children}</>;
}

const Voker = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;