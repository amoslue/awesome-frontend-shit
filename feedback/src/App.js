import React from "react";
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";   
import FeedbackData from "./data/feedbackData";
import FeedbackStates from "./component/FeedbackStates";
import FeedbackForm from "./component/FeedbackForm";

function App(){
    const [feedback, setFeedback] = React.useState(FeedbackData);

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter(item => item.id !== id));
    };

    const addFeedback = (newFeedback) => {
        setFeedback([newFeedback, ...feedback]);
    };

    return (
        <React.Fragment>
            <Header bgColor='black' color='pink' text="Feedback UI"/>
            <FeedbackForm onAdd={addFeedback} />
            <FeedbackStates feedback={feedback} />
            <div className="container">
                <FeedbackList feedback={feedback} onDelete={deleteFeedback} />
            </div>
        </React.Fragment>
    );
}

export default App;
