import React from "react";
import PropTypes from "prop-types";
import { Button} from 'antd';

function ContactLink(props){
  return (
    <React.Fragment>
      <img src="https://www.richmond.ac.uk/wp-content/uploads/2020/03/roger-king-180x180.jpg" alt="Add this person to your friends"></img>
      <p><strong>{props.name}</strong></p>
      <Button type="primary" size="medium"  href={props.link}>Add Friend</Button>
      <hr />
    </React.Fragment>
  );
}

ContactLink.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string
}

export default ContactLink;