import React from 'react'

function FeedbackStates({feedback}) {
    let average = feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length;

  return (
    <div>
      <h2>Feedback Statistics</h2>
      <p>Total Feedback: {feedback.length}</p>
      <p>Average Rating: {average.toFixed(1)}</p>
    </div>
  )
}

export default FeedbackStates
