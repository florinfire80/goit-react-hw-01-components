import deals from './deals.json';
import styles from './Transactions.module.css';

const Transactions = () => {
  return (
    <div className={styles.transactionsContainer}>
      <table className={styles.transactionHistory}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.tableHeaderCell}>Type</th>
            <th className={styles.tableHeaderCell}>Amount</th>
            <th className={styles.tableHeaderCell}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {deals.map(deal => (
            <tr key={deal.id} className={styles.tableRow}>
              <td className={styles.tableCell}>{deal.type}</td>
              <td className={styles.tableCell}>{deal.amount}</td>
              <td className={styles.tableCell}>{deal.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
