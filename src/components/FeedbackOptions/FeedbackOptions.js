import { Btn, BtnList, ItemBtn } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <>
        <BtnList>
          {options.map(option => {
            return (
              <ItemBtn key={option}>
                <Btn
                  type="button"
                  
                  onClick={() => {
                    onLeaveFeedback(option);
                  }}
                >
                  {option}
                </Btn>
              </ItemBtn>
            );
          })}
        </BtnList>
      </>
    );
  };

  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
  };