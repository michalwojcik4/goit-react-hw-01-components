import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';

import css from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css['friend-list']}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};
