import PropTypes from 'prop-types';

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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired
};
export default Profile;