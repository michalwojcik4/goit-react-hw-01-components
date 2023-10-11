import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ friend }) => (
  <li className={css.item}>
    <span className={css.status}></span>
    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
    <p className={css.name}>{friend.name}</p>
  </li>
);

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
};
