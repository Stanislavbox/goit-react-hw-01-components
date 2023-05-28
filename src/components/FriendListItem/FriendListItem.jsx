import { ColorGreen, ColorRed } from "./FriendListItem.styled";

const FriendListItem =({id, name, avatar, isOnline}) =>{
  return (
    <li className="item">
      <span className="status">{isOnline ? <ColorGreen/> : <ColorRed/>}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  )
}

export default FriendListItem;