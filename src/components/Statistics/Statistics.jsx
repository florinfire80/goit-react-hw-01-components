import data from './data.json';
import styles from './Statistics.module.css';

const Statistics = ({ title }) => {
  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <section className={styles.statistics}>
      <h2 className={styles.statisticsTitle}>Upload stats</h2>

      {/* {title && <h2 className={styles.statisticsTitle}>{title}</h2>} */}

      <ul className={styles.statisticsStatList}>
        {data.map(item => (
          <li
            key={item.id}
            className={styles.statisticsStatItem}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className={styles.statisticsStatLabel}>{item.label}</span>
            <br />
            <span className={styles.statisticsStatPercentage}>
              {item.percentage} %
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
