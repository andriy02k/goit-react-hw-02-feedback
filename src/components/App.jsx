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
        total: 0,
        goodPersent: 0
    }
    
    updateFeedback = (feedbackType) => {
          this.setState((prev) => {
              const newFeedback = { ...prev, [feedbackType]: prev[feedbackType] + 1 };
              const newTotal = prev.total + 1;
              const newGoodPercent = newTotal > 0 ? Math.round((newFeedback.good / newTotal) * 100) : 0;

              return {
                  ...newFeedback,
                  total: newTotal,
                  goodPersent: newGoodPercent,
              };
          });
    }

  render() {
    const conditionRender = this.state.total > 0;
        return (
          <>
            <Section title="Please leave feedback">
              <FeedbackOptions options={this.state} onLeaveFeedback={this.updateFeedback}/>
            </Section>
            <Section title="Statistics">
              {conditionRender ? (
                <Statistics
                  good={this.state.good}
                  neutral={this.state.neutral}
                  bad={this.state.bad}
                  total={this.state.total}
                  goodPersent={this.state.goodPersent}
                />
              ) : (
                  <Notification message="There is no feedback"/>
              )}
            </Section>
          </>
        );
    };
}