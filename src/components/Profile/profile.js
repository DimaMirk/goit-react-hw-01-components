import s from './Profile.module.css';
import propTypes from 'prop-types';
const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={s.container}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.picture} />
        <p className={s.p}>{username}</p>
        <p className={s.p}>{tag}</p>
        <p className={s.p}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.li}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={s.li}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={s.li}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  avatar: propTypes.string,
  username: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  followers: propTypes.number,
  views: propTypes.number,
  likes: propTypes.number,
};

export default Profile;
