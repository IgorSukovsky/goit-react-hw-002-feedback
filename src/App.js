import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/notification/Notification";
import Section from "./components/section/Section";
import Statistics from "./components/statistics/Statistics";
import style from "./App.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = (e) => {
    const { name } = e.target;
    this.setState((prevStat) => ({
      [name]: prevStat[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    const result = total ? (this.state.good * 100) / total : 0;

    return Math.round(result);
  };

  render() {
    const total = this.countTotalFeedback();
    const result = this.countPositiveFeedbackPercentage();
    return (
      <div className={style.conteiner}>
        <Section title="Please leave feedback">
          <FeedbackOptions handleChange={this.handleChange} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              result={result}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
