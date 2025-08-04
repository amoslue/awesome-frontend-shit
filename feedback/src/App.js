import React from "react";
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";   
import FeedbackData from "./data/feedbackData";
import FeedbackStates from "./component/FeedbackStates";

function App(){
    const [feedback, setFeedback] = React.useState(FeedbackData);

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter(item => item.id !== id));
    };

    return (
        <React.Fragment>
            <Header bgColor='black' color='pink' text="Feedback UI"/>
            <FeedbackStates feedback={feedback} />
            <div className="container">
                <FeedbackList feedback={feedback} onDelete={deleteFeedback} />
            </div>
        </React.Fragment>
    );
}

export default App;
