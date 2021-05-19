import React from "react";
import { useSelector } from "react-redux";
import { getUserId, getUsername } from "../reducks/users/selectors"

const Home = () => {
  const selector = useSelector(state => state);
  const uid = getUserId(selector)
  const username = getUsername(selector)

  return (
    <>
      <h2>Home</h2>
      <p>{uid}</p>
      <h4>{username}</h4>
    </>
  );
};

export default Home;
