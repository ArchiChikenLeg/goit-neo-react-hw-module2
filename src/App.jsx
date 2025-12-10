import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/Description'
import Feedback from './components/Feedback'
import Options from './components/Options'
import Notification from './components/Notification'

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }

  })

  const updateFeedback = (feedbackType) => {
    switch (feedbackType) {
      case "good":
        setFeedback({
          ...feedback,
          good: feedback.good + 1
        });
        break;
      case "neutral":
        setFeedback({
          ...feedback,
          neutral: feedback.neutral + 1
        });
        break;
      case "bad":
        setFeedback({
          ...feedback,
          bad: feedback.bad + 1
        });
        break;
      case "reset":
        setFeedback({
          good: 0,
          neutral: 0,
          bad: 0
        });
        break;
    }
  }

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  return (
    <>
      <Description />
      <Options update={updateFeedback} total={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} total={totalFeedback} positive={positiveFeedback} />
      ) : (
        <Notification />
      )}

    </>
  )
}

export default App
