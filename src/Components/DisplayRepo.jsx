import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const DisplayRepo = (data) => {
  const [data2, setdata2] = useState([]);
  const [star, setStart] = useState(false);

  // console.log(star);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://api.github.com/users/abujafar93/repos")
      .then((response) => {
        setdata2(response.data);
      });
  };

  let myObj = [];

  const StarRepo = (e) => {
    e.preventDefault();
    console.log("Clicked");
    /*   const handleClick = (e) => {
      e.preventDefault();
      console.log('The link was clicked.');
    } */
    //console.log("Clicked");
    /* const [star, setStart] = useState([]);

    const switchState = star ? false : true;

    setStart(switchState);

    console.log(star); */
  };

  data2.forEach((item) => {
    let itemObj = {
      name: item.name,
      full_name: item.full_name,
      language: item.language,
      language_url: item.languages_url,
      update: item.updated_at,
      repoUrl: item.html_url,
      visibility: item.visibility,
      starCount: item.stargazers_count,
    };
    // console.log(item);
    myObj.push(itemObj);
  });

  return (
    <div className="repos">
      <div className="searchRepo">
        <p>
          Repositories<span>21</span>
        </p>
        <input
          type="seach"
          id="searchRepoName"
          placeholder="Find a repository..."
        />
      </div>

      {myObj.map((item, index) => {
        const {
          name,
          full_name,
          language,
          language_url,
          update,
          repoUrl,
          visibility,
          starCount,
        } = item;

        const switchClr = {
          JavaScript: "langColor",
          CSS: "langRed",
          SCSS: "langGreen",
          HTML: "langBrown",
        };

        const clr = switchClr[language];

        return (
          <div className="eachRepo">
            <div>
              {/* <button onClick={() => console.log((myObj[0]["starCount"] = 3))}>
                Click me
              </button> */}
              <div className="repoTitle">
                <a href={repoUrl}>{name}</a>
                <span>{visibility}</span>
              </div>
              <div className="repoUpdate">
                <div className="lang">
                  <div className={clr}></div>
                  <p className="repLang">{language}</p>
                </div>
                <div className="starCount">
                  <p>
                    <AiOutlineStar />
                  </p>
                  <p>{starCount}</p>
                </div>
                <p className="updateTime">
                  Updated on <span>{update}</span>
                </p>
              </div>
            </div>

            <div>
              <div onClick={(event) => console.log("clicked")} className="star">
                <p>
                  <AiFillStar />
                </p>
                <p> Star</p>
              </div>
              <div></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayRepo;
