import React from "react";
import NavButton from "./NavButton";
import Search from "./Search";
import { Row, Col, Menu } from 'antd';

function NavBar(){
  return (
    <React.Fragment>
      {/* <Row> */}
      <Menu mode="horizontal" style={{height: 64}}>
        <Col span={8}>
          <NavButton />
        </Col>
        <Col span={8}></Col>
        <Col span={8}>
          <Search />
        </Col>
      </Menu>
      {/* </Row> */}
    </React.Fragment>
  );
}

export default NavBar;