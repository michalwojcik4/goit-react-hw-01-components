import PropTypes from 'prop-types';

export const FriendListItem = ({ friend }) => (
  <li class="item">
    <span class="status">x</span>
    <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
    <p class="name">{friend.name}</p>
  </li>
);

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
};
