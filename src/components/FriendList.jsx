import { FriendListItem } from './FriendListItem';

export function FriendList({friends}) {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
