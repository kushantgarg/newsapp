
import "./App.css";

import React, { useState} from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default  function  App () {
 const pageSize = 5;
  const apiKey =process.env.REACT_APP_NEWS_API
  //  i can fetch variable in env fileusing the process.env.variable name
//  i will fetch my api key from environment variable and to do so i will make a file in react folder named env.local and it is
//  by defaukt also added in git ingore folder
// agar me koi bhi  environment ki shuruvat REACT_APP se shuravat karta hu then ill get access of that variabl in y react aplication
  
const[progress,setProgress]=useState(0);



    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  key="general"
                  pageSize={5}
                  apiKey={apiKey}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  key="business"
                  pageSize={5}
                  apiKey={apiKey}
                  country="in"
                  category="business"
                />
              }
            />

<Route
              exact
              path="/home"
              element={
                <News
                  setProgress={setProgress}
                  key="general"
                  pageSize={5}
                  apiKey={apiKey}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key="entertainment"
                  pageSize={5}
                  apiKey={apiKey}
                  country="in"
                  category="entertainment"
                />
              }
            />

            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  key="general"
                  pageSize={5}
                  apiKey={apiKey}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key="health"
                  pageSize={5}
                  apiKey={apiKey}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key="science"
                  pageSize={5}
                  apiKey={apiKey}
                  country="in"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key="sports"
                  pageSize={5}
                  apiKey={apiKey}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  key="technology"
                  pageSize={5}
                  apiKey={apiKey}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }


//  from here we are going to begin from class based components
//  the name of my news website will be news monkey as it sounds exciting
// we will use news api to fetch news '

//  Render Method:
// Render is a lifecycle method that means as we know jab me ham react me koi component load krte ha to series of methods call hote ha
//  so in simple words we can say that render function works to compile JSX into html and then render html on the screen
