import React from "react";
import PropTypes from "prop-types";

function ContactLink(props){
  return (
    <React.Fragment>
      <img src={props.img} alt="Add this person to your friends"></img>
      <p>{props.name}</p>
      <button href={props.link}>Button</button>
    </React.Fragment>
  );
}

ContactLink.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string
}

export default ContactLink;