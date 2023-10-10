import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory} from './TransactionHistory';
import user from 'path/to/user.json';
import data from 'path/to/data.json';
import friendsData from 'path/to/friends.json';
import transactions from 'path/to/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends = {friendsData}/>
      <TransactionHistory items={transactions}/>
    </>
  );
};
