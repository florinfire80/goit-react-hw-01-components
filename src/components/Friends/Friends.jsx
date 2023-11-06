import users from './users.json';
import styles from './Friends.module.css';
const Friends = () => {
  return (
    <div className={styles.container}>
      <div className={styles.friendCard}>
        <ul className={styles.friendList}>
          {/* Un număr nedeterminat de componente FriendListItem */}

          {users.map(user => (
            <li key={user.id} className={styles.friendItem}>
              <span className={styles.friendStatus}>
                {user.isOnline ? 'Online' : 'Offline'}
              </span>
              <img
                className={styles.friendAvatar}
                src={user.avatar}
                alt={`${user.name}'s avatar`}
              />
              <div className={styles.friendDetails}></div>
              <p className={styles.friendName}>{user.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Friends;
