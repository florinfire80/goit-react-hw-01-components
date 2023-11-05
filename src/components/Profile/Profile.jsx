import user from './user.json';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img
            src={user.avatar}
            alt="User avatar"
            className={styles.descriptionAvatar}
          />
          <p className={styles.descriptionName}>{user.username}</p>
          <p className={styles.descriptionTag}>@{user.tag}</p>
          <p className={styles.descriptionLocation}>{user.location}</p>
        </div>
        <ul className={styles.stats}>
          <li>
            <span className={styles.statsLabel}>Followers</span>
            <br></br>
            <span className={styles.statsQuantity}>{user.stats.followers}</span>
          </li>
          <li>
            <span className={styles.statsLabel}>Views</span>
            <br></br>
            <span className={styles.statsQuantity}>{user.stats.views}</span>
          </li>
          <li>
            <span className={styles.statsLabel}>Likes</span>
            <br></br>
            <span className={styles.statsQuantity}>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
