import React from "react";
import PostBar from "./PostBar";
import Stories from "./Stories";
import 'antd/dist/antd.css';
import '../index.css';
import { Layout } from 'antd';

const {Header,Content} = Layout;

function Feed(){

  const masterStories = [
    {
      img: "https://www.wikihow.com/images/thumb/d/d5/Be-Random-Step-8.jpg/aid46489-v4-728px-Be-Random-Step-8.jpg.webp",
      name: "Yo Freinz",
      storyText: "They dids some shitz."
    },
    {
      img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/s960x960/50811794_1241966839285152_5832961223175438336_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_oc=AQkq-BjjxI-mq6L0EC8_bSJRHKOxLTgQNkx_6TSKuBLKbhlj5Pl4joDXk3U3kCCNhHSQs6wXD_3A8MkeF5OeDCtq&_nc_ht=scontent-sea1-1.xx&_nc_tp=7&oh=28d5ef456776c1483aebe731e380f768&oe=5EC21FFE",
      name: "Bork",
      storyText: "something about how much I love dogs"
    },
    {
      img: "https://i.redd.it/54awv7jxe4e41.jpg",
      name: "Hey Girl Hey",
      storyText: "Say hey to ya girl."
    },
    {
      img: "https://pmcvariety.files.wordpress.com/2019/09/snoop-dogg-weed.jpg?w=600",
      name: "Mary Jane",
      storyText: "Celebrating today's national holiday."
    }
  ]

  return (
    <React.Fragment>
      <Layout>
        <Header>
          <PostBar />
        </Header>
        <Content>
          <hr />
          {masterStories.map((stories, index) =>
          <Stories 
            img={stories.img}
            name={stories.name}
            storyText={stories.storyText}
            key={index}/>
          )}
        </Content>
      </Layout>
    </React.Fragment>
  );
}

export default Feed;