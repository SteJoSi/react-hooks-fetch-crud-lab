import React, {useState, useEffect} from "react";

function QuestionList() {
  const [questionData, showQuestionData] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => showQuestionData(data))
  }, [])

  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
