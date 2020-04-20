import React from "react";
import NavBar from "./NavBar";
import ProfileInfo from "./ProfileInfo";
import About from "./About";
import Recommendations from "./Recomendations";
import Feed from "./Feed";
import { Layout } from 'antd';

const { Header, Content } = Layout;

function App(){
  return (
    <React.Fragment>
        <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <NavBar />
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div class="row">
            <div class="col-4">
              <ProfileInfo />
              <br />
              <About />
            </div>
            <div class="col-4">
              <Feed />
            </div>
            <div class="col-4">
              <Recommendations />
            </div>
            <hr/>
          </div>
        </Content>
      </Layout>
    </React.Fragment>
  );
}

export default App;