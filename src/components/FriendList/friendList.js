import propTypes from 'prop-types';
import s from './FriendList.module.css';
import Friend from 'components/FriendListItem/friendItem';
const FriendsList = ({ friends }) => {
  return (
    <ul className={s.container}>
      {friends.map(friend => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};
FriendsList.propTypes = {
  avatar: propTypes.string,
  key: propTypes.number,
  isOnline: propTypes.bool,
  name: propTypes.string,
  id: propTypes.number,
};

export default FriendsList;
