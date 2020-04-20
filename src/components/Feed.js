import React from "react";
import PostBar from "postBar";
import Stories from "stories";

function Feed(){
  return (
    <React.Fragment>
      <PostBar />
      <hr />
      {masterStories.map((stories, index) =>
      <Stories 
        img={stories.img}
        name={stories.name}
        storyText={stories.storyText}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default Feed;