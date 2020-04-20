import React from "react";
import { Input } from 'antd';

const { Search } = Input;

function PostBar(){
  return (
    <React.Fragment>
      <Search style={{margin: '15px 0 0 0'}} placeholder="Make A Post!" onSearch={value => console.log(value)} enterButton />
    </React.Fragment>
  );
}

export default PostBar;