import React, { useState, useEffect, Children } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

export const GithubContext = React.createContext();

export const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  // Request loading
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // Errors
  const [error, setError] = useState({ show: false, message: "" });

  const searchGithubUser = async (user) => {
    showError();
    setIsLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );

    if (response) {
      setGithubUser(response.data);

      const { login, followers_url } = response.data;
      // repositary
      //   axios(`${rootUrl}/users/${login}/repos?per_page=100`).then((response) =>
      //     setRepos(response.data)
      //   );
      //   //followers
      //   axios(`${followers_url}?per_page=100`).then((response) =>
      //     setFollowers(response.data)
      //   );
      // }
      // OR
      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ]).then((results) => {
        const [repos, followers] = results;
        const status = "fulfilled";
        if (repos.status === status) {
          setRepos(repos.value.data);
        }
        if (followers.status === status) {
          setFollowers(followers.value.data);
        }
      });
    } else {
      showError(true, "no user exists with that username");
    }
    //hide loding icon
    checkRequests();
    setIsLoading(false);
  };

  // rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;

        setRequests(remaining);
        if (remaining === 0) {
          showError(
            true,
            "sorry, you dont have more search limit. Try after 1 hour"
          );
        }
      })
      .catch((err) => console.log(err));
  };

  const showError = (show = false, message) => {
    setError({ show, message });
  };

  useEffect(checkRequests, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
