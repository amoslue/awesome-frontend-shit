import { useState } from "react";
import Card from "./shared/Card";
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({ item, onDelete }) {
  const [feedbackRating, setFeedbackRating] = useState(item.rating);
  const [feedbackText, setFeedbackText] = useState(item.text);

  const handleClick = () => {
    setFeedbackRating((prev) => {
      return prev + 1;
    });
    setFeedbackText("this is " + (feedbackRating + 1));
  };
  
  const handleClose = (id) => {
    onDelete(id);
  }
  
  return (
    <Card reverse={true}>
      <div className="num-display">{feedbackRating}</div>
      <div className="feedback-text">{feedbackText}</div>
      <button onClick={handleClick}>Click</button>
      <button className="close" onClick={() => handleClose(item.id)}>
        <FaTimes color="purple" />
      </button>
    </Card>
  );
}

export default FeedbackItem;
