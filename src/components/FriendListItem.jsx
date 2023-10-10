export function FriendListItem({ friend }) {
  const { avatar, name } = friend;
  return (
    <li class="item">
      <span class="status">x</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}
