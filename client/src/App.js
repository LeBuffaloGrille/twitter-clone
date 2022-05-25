import React, {useEffect, useState} from "react"

import "./style.css"

import Content from "./Content/Content";
import Header from "./Header/Header";

function App() {
  const [tweets, setTweet] = useState([]);

  useEffect(() => {
    fetch("https://api.yourein.space/feed")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTweet(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="main">
      <Header/>
      <Content tweets={tweets}/>
    </div>      
  );
}

export default App;
