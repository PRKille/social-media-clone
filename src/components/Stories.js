import React from "react";
import PropTypes from "prop-types";
import 'antd/dist/antd.css';
import '../index.css';
import { Row, Col, Card } from 'antd';

function Stories(props){
  return (
    <React.Fragment>
      <Row style={{margin:'0 5% 0 0'}}>
        <Col span={1} />
        <Col span={4}>
          <Card style={{width: 90, height: 90}}
            cover={<img src={props.img} alt={props.name} />}>
          </Card>
        </Col>
        <Col span={1} /> 
        <Col span={18}>
          <Card title={props.name}>
          <p>{props.storyText}</p>
          </Card>
        </Col>
      </Row>
      <hr />
    </React.Fragment>
  );
}

Stories.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  storyText: PropTypes.string
}

export default Stories;