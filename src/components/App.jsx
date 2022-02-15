import Profile from './Profile/profile';
import user from './Profile/user';

import Statistics from './Statistics/statistics';
import data from './Statistics/data';

import FriendsList from './FriendList/friendList';
import friends from './FriendList/friends';

import TransactionHistory from './TransactionHistory/transactionHistory';
import transactions from './TransactionHistory/transactions';
export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
