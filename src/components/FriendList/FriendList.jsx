import PropTypes from 'prop-types';
import { FriendListItemCard } from './FriendListItem/FriendListItem';
import { FriendListSection } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListSection>
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <FriendListItemCard
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
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
