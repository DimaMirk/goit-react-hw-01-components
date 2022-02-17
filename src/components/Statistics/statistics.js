import propTypes from 'prop-types';
import s from './Statistics.module.css';
const Statistics = ({ title, stats }) => {
  return (
    <section className={s.container}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => (
          <li className={s.li} key={id}>
            <span className={s.label}>{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: propTypes.string,
  id: propTypes.number,
  label: propTypes.string,
  percentage: propTypes.number,
};

export default Statistics;
