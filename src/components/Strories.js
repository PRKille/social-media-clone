import React from "react";
import PropTypes from "prop-types";

function Stories(props){
  return (
    <React.Fragment>
      <img src={props.img} alt={props.name}></img>
      <p>{props.name}</p>
      <p>{PropTypes.storyText}</p>
    </React.Fragment>
  );
}

ContactLink.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  storyText: PropTypes.string
}

export default Stories;