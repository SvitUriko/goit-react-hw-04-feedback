import { useState } from 'react';
import { GlobalStyle } from "./GlobalStyle";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import {FeedbackOptions} from "./FeedbackOptions/FeedbackOptions";

export const App = () => {

    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

    const onLeaveFeedback = (option) => {
        setFeedback((prevState) => ({
          ...prevState,
          [option]: prevState[option] + 1
        }));
      };
    
      const countTotalFeedback = () => {
        return Object.values(feedback).reduce((total, value) => {
            return total + value;
          }, 0);
      };
    
      const countPositiveFeedbackPercentage = (total) => {
        return `${Math.round((feedback.good / total) * 100)}%`;
      };

    const { good, neutral, bad } = feedback;
    const total = countTotalFeedback();
    const res = countPositiveFeedbackPercentage(total);

    return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
          }}
        >
          <div>
          <GlobalStyle/> 
            <Section title="Please leave feedback">
              <FeedbackOptions
                  options={Object.keys(feedback)}
                  onLeaveFeedback={onLeaveFeedback}
                ></FeedbackOptions> 
            </Section>
        
            <Section title="Statistics">
  
            {countTotalFeedback() === 0 ? (
                  <Notification message="There is no feedback" />
                ) : (
                  <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    count={res}
                  />
                )}
  
            </Section>
          </div>
        </div>
      );
   
}