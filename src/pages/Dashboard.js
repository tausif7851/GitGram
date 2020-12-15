import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Dashboard = () => {
  const { isLoading } = useContext(GithubContext);
  if (isLoading) {
    return (
      <menu>
        <Navbar />
        <Search />
        <img src={loadingImage} alt="loading" className="loading-img" />
      </menu>
    );
  }
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
