import { Component } from 'react'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from './Statistics/Statistics'
import Section from './Section/Section'
import Notification from './Notification/Notification'

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    
    updateFeedback = (feedbackType) => {
      this.setState((prev) => ({
        [feedbackType]: prev[feedbackType] + 1
      }));
    }
  
    calculateTotal = () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
    }
  
  calculatePercent = () => {
        return this.calculateTotal() > 0 ? Math.round((this.state.good / this.calculateTotal()) * 100) : 0;
    }

  render() {
        const conditionRender = this.calculateTotal() > 0;
    
        return (
          <>
            <Section title="Please leave feedback">
              <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.updateFeedback}/>
            </Section>
            <Section title="Statistics">
              {conditionRender ? (
                <Statistics
                  good={this.state.good}
                  neutral={this.state.neutral}
                  bad={this.state.bad}
                  total={this.calculateTotal()}
                  goodPersent={this.calculatePercent()}
                />
              ) : (
                  <Notification message="There is no feedback"/>
              )}
            </Section>
          </>
        );
    };
}

