import { StatItem, StatList } from "./Statistics.styled";
import PropTypes from 'prop-types';


export const Statistics = props => {
    return (
      <>
        <StatList>
          {Object.keys(props).map(el => {
            return (
              <StatItem key={el}>
                {el}: {props[el]}
              </StatItem>
            );
          })}
        </StatList>
      </>
    );
  };

  Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    count: PropTypes.string.isRequired
  };