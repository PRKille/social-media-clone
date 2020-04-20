import React from "react";
import ContactLink from "./ContactLink";
import { Card } from 'antd';

const masterRecommendations = [
  {
    img: 'yoface.png',
    name: 'Patty RICK',
    link: '#'
  },
  {
    img: 'julieandrewsfangirl.png',
    name: 'Katy Lady',
    link: '#'
  },
  {
    img: 'stingbean.png',
    name: 'We Jamin',
    link: '#'
  }
];

function Recommendations(){
  return (
    <React.Fragment>
      <Card style={{ width: 360 }}>
        <h2>Recommended Friends</h2>
        <hr/>
        {masterRecommendations.map((contactLink, index) => 
          <ContactLink
          img={contactLink.img}
          name={contactLink.name}
          link={contactLink.link}
          key={index}/>
        )} 
      </Card>
    </React.Fragment>
  );
}

export default Recommendations;

