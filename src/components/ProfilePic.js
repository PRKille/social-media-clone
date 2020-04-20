import React from "react";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../index.css';

function ProfilePic(){
  return (
    <Avatar shape="square" size={64} icon={<UserOutlined />} />
  );
}

export default ProfilePic;