import s from './FriendItem.module.css';
import propTypes from 'prop-types';
const Friend = ({ friend }) => {
  const { isOnline, avatar, name } = friend;
  return (
    <li className={s.li}>
      <span className={`${s.status} ${s[isOnline]}`}></span>
      <img className={s.img} src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
Friend.propTypes = {
  isOnline: propTypes.oneOf([false, true]),
  avatar: propTypes.string,
  name: propTypes.string,
};
export default Friend;
