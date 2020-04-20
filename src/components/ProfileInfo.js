import React from "react";
import ProfilePic from "./ProfilePic"
import ProfileName from "./ProfileName"
import ProfileLink from "./ProfileLink"
import { Row, Col, Card } from 'antd';

function ProfileInfo(){
  return (

    <React.Fragment>
      <Card>
        <Row>
          <Col span={8}>
            <ProfilePic />
          </Col>
          <Col span={16}>
            <ProfileName />
          </Col>
        </Row>
        <Row>
          
        </Row>
        <Row style={{textAlign: 'center'}}>
          <ProfileLink />
        </Row>
      </Card>
    </React.Fragment>
  );
}

export default ProfileInfo;