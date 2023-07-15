import {
  FriendListItem,
  FriendStatusOnline,
  FriendStatusOffline,
  FriendImage,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItemCard = ({ id, name, avatar, isOnline }) => {
  return (
    <FriendListItem key={id}>
      {isOnline ? <FriendStatusOnline /> : <FriendStatusOffline />}
      <FriendImage src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendListItem>
  );
};
