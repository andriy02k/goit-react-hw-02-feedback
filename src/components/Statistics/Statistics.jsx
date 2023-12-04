import React from 'react'
import { Statistic } from './Statistics.styled'

const Statistics = ({good, neutral, bad, total, goodPersent}) => {
  return (
        <Statistic>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive Feedback: {goodPersent}%</li>
        </Statistic>
  )
}

export default Statistics