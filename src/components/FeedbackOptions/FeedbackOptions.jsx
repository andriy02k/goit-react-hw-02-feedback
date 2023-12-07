import React from 'react'
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnContainer}>
      {options.map(option => {
        return(
        <button className={css.btn} key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
        )
      })}
    </div>
  )
}

export default FeedbackOptions