import React from "react";
import Header from "./Header";
import ProfileInfo from "./ProfileInfo";
import About from "./About";
import Recommendations from "./Recomendations";
import Feed from "./Feed";

function App(){
  return (
    <React.Fragment>
      <Header />
      <ProfileInfo />
      <About />
      <Recommendations />
      <Feed />
      <hr/>
    </React.Fragment>
  );
}

export default App;