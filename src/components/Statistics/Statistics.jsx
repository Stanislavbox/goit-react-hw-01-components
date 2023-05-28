import PropTypes from 'prop-types';

import {getRandomColor} from '../../helpers/helpers'
import {StatisticTitle, StatisticsCard, StatisticsList, StatisticsItem, StatisticsPercentage } from './Statistics.styled';

const Statistics = ({ stats, title }) => {
  return (
    <StatisticsCard>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem key={id} style = {{backgroundColor: getRandomColor()}}>
              <span className="label">{label}</span>
              <StatisticsPercentage>{percentage}%</StatisticsPercentage>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default Statistics;