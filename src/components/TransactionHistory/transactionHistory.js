import propTypes from 'prop-types';
import s from './Transacrion.module.css';
const TransactionHistory = ({ transactions }) => {
  return (
    <table className={s.container}>
      <thead className={s.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id} className={s.tr}>
            <td className={s.td}>{type}</td>
            <td className={s.td}>{amount}</td>
            <td className={s.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  id: propTypes.number,
  type: propTypes.string,
  amount: propTypes.number,
  currency: propTypes.string,
};
export default TransactionHistory;
