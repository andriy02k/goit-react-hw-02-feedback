import React from 'react'
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options:{good, neutral, bad}, onLeaveFeedback }) => {
  return (
    <div className={css.btnContainer}>
        <button className={css.btn} onClick={() => onLeaveFeedback('good')}>Good</button>
        <button className={css.btn} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button className={css.btn} onClick={() => onLeaveFeedback('bad')}>Bad</button>
    </div>
  )
}

export default FeedbackOptions