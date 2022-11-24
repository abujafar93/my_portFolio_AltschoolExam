import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoLocation } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { TfiTwitterAlt } from "react-icons/tfi";

const DetailsSection = () => {
  const [data1, setdata1] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const {
    avatar_url,
    login,
    email,
    followers,
    following,
    location,
    name,
    twitter_username,
  } = data1;

  const fetchData = () => {
    axios.get("https://api.github.com/users/abujafar93").then((response) => {
      setdata1(response.data);
    });
  };

  return (
    <div className="details">
      <div>
        <img src={avatar_url} id="avatar" alt="displayImage" />
        <h3>{name}</h3>
        <p>{login}</p>
        <button>Edit Profile</button>
        <div className="follow">
          <p>
            <span>{followers}</span>follower
          </p>
          <p>
            <span>{following}</span>following
          </p>
        </div>
      </div>
      <div>
        <div className="icons">
          <p className="icon">
            <GoLocation />
          </p>
          <p>{location}</p>
        </div>
        <div className="icons">
          <p className="icon">
            <CiMail />
          </p>
          <p>{email}</p>
        </div>
        <div className="icons">
          <p className="icon">
            <TfiTwitterAlt />
          </p>
          <p>{twitter_username}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default DetailsSection;
