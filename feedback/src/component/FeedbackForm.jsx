import Card from "./shared/Card";
import React, { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ onAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    console.log(inputText);

    if (inputText === "") {
      setButtonDisabled(true);
      setMessage("");
    } else if (inputText.trim().length < 10) {
      setButtonDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setButtonDisabled(false);
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      console.log("Submitting feedback:", text, rating);
      const newFeedback = {
        id: Date.now(), // Generate unique ID
        text: text.trim(),
        rating: rating,
      };

      // Call the onAdd function passed from parent (App.js)
      if (onAdd) {
        onAdd(newFeedback);
      }

      // Reset form
      setText("");
      setRating(10);
      setButtonDisabled(true);
      setMessage("");
    }
  };

  return (
    <>
      <Card>
        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.type !== "submit") {
              e.preventDefault();
              return false;
            }
          }}
        >
          <h2>Feedback Form</h2>

          <RatingSelect
            select={(rating) => setRating(rating)}
            selected={rating}
          />

          <div className="input-group">
            <input
              onChange={handleTextChange}
              value={text}
              placeholder="Write a review"
            />
            <Button
              type="submit"
              version="secondary"
              isDisabled={buttonDisabled}
            >
              Submit
            </Button>
          </div>
        </form>
      </Card>
      {message && <div className="message">{message}</div>}
    </>
  );
}

export default FeedbackForm;
