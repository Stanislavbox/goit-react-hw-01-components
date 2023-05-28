import PropTypes from 'prop-types';
import { ColorGreen, ColorRed, FriendItem, StatusItem, StatusImage, UserName } from "./FriendListItem.styled";

const FriendListItem =({id, name, avatar, isOnline}) =>{
  return (
    <FriendItem key={id}>
      <StatusItem>{isOnline ? <ColorGreen/> : <ColorRed/>}</StatusItem>
      <StatusImage className="avatar" src={avatar} alt={name} width="48" />
      <UserName>{name}</UserName>
    </FriendItem>
  )
}

FriendListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;