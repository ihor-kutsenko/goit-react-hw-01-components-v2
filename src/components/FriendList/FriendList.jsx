import PropTypes from 'prop-types';
import {
  FriendListSection,
  FriendListItem,
  FriendStatusOnline,
  FriendStatusOffline,
  FriendImage,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListSection>
      {friends.map(friend => {
        return (
          <FriendListItem key={friend.id}>
            {friend.isOnline ? <FriendStatusOnline /> : <FriendStatusOffline />}
            <FriendImage src={friend.avatar} alt={friend.name} width="48" />
            <FriendName>{friend.name}</FriendName>
          </FriendListItem>
        );
      })}
    </FriendListSection>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
