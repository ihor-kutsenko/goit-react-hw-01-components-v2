import PropTypes from 'prop-types';
import { getRandomHexColor } from './randomColor';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsContent,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection >
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsList>
        {stats.map(stat => {
          let randomBGColor = getRandomHexColor();
          return (
            <StatisticsItem
              key={stat.id}
              style={{ backgroundColor: `${randomBGColor}` }}
            >
              <StatisticsContent>{stat.label}</StatisticsContent>
              <StatisticsContent>{stat.percentage}%</StatisticsContent>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
