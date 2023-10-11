import { FriendListItem } from './FriendListItem';
import PropTypes from "prop-types";
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={css['friend-list']}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} friend={friend} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
}