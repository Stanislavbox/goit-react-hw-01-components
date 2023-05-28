import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({friends}) =>{
  return (
    <ul className="friend-list">
      {friends.map(({id, name, avatar, isOnline}) => {
        return <FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline}/>
      })}
    </ul>
  );
}

export default FriendList;