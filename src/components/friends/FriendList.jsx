import { FriendListItem } from './FriendListItem';
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => (
  <ul class="friend-list">
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