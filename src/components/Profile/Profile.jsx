import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileUserImage,
  ProfileUserName,
  ProfileUserTag,
  ProfileUserLocation,
  ProfileUserStats,
  ProfileUserList,
  ProfileUserListContent,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <div>
        <ProfileUserImage src={avatar} alt={username} width="250" />
        <ProfileUserName>{username}</ProfileUserName>
        <ProfileUserTag>@{tag}</ProfileUserTag>
        <ProfileUserLocation>{location}</ProfileUserLocation>
      </div>

      <ProfileUserStats>
        <ProfileUserList>
          <ProfileUserListContent>Followers</ProfileUserListContent>
          <ProfileUserListContent>{stats.followers}</ProfileUserListContent>
        </ProfileUserList>
        <ProfileUserList>
          <ProfileUserListContent>Views</ProfileUserListContent>
          <ProfileUserListContent>{stats.views}</ProfileUserListContent>
        </ProfileUserList>
        <ProfileUserList>
          <ProfileUserListContent>Likes</ProfileUserListContent>
          <ProfileUserListContent>{stats.likes}</ProfileUserListContent>
        </ProfileUserList>
      </ProfileUserStats>
    </ProfileContainer>
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
    likes: PropTypes.number.isRequired,
  }),
};
