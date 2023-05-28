import PropTypes from 'prop-types';

import FriendListItem from "../FriendListItem/FriendListItem";
import {ListFriend} from './FriendList.styled'

const FriendList = ({friends}) =>{
  return (
    <ListFriend>
      {friends.map(({id, name, avatar, isOnline}) => {
        return <FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline}/>
      })}
    </ListFriend>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
export default FriendList;