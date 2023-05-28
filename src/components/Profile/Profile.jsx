// import React from 'react';

import {
  Card,
  Avatar,
  Description,
  UserName,
  Tag,
  Stats,
  Label,
  Quantity

} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card className="profile">
      <Description>
        <Avatar
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Tag>{location}</Tag>
      </Description>

      <Stats>
        <li>
          <Label className="label">Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label className="label">Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label className="label">Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </Card>
  );
};

export default Profile;