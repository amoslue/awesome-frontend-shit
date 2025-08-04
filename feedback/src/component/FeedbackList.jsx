import React from 'react'
import FeedbackItem from './FeedbackItem'

export default function FeedbackList({feedback, onDelete}) {
    if (!feedback || feedback.length === 0) {
        return <div>No feedback available</div>
    }

  return (
    <div className="feedback-list">
      {feedback.map(feedbackItem => {
        return <FeedbackItem 
          key={feedbackItem.id} 
          item={feedbackItem} 
          onDelete={onDelete}
        />
      })}
    </div>
  )
}
