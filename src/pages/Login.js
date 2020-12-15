import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Voker>
      <div className="container">
        <Link to="/">
          <img
            src="https://www.pngkey.com/png/detail/573-5737221_batman-user-login-icon.png"
            alt="gitgramuser"
          />
          <h1>GitGram</h1>
          <button className="button" onClick={loginWithRedirect}>
            login / signup
          </button>
        </Link>
      </div>
    </Voker>
  );
};

const Voker = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
  button {
    text-transform: uppercase;
    background: black;
    color: var(--clr-primary-10);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
  }
  button:hover {
    background: lightgrey;
    color: var(--clr-primary-1);
  }
`;
export default Login;
