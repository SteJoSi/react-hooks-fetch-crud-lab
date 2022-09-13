import React, {useState, useEffect} from "react";
import QuestionForm from "./QuestionForm";

function QuestionList() {
  const [data, showQuestionData] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => showQuestionData(data))
  }, [])

  //new 
  function handleAddQuestion(newQuestion) {
    // console.log("New Question:", newQuestion)
    showQuestionData([...data, newQuestion])
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
      <QuestionForm addQuestion={handleAddQuestion} />
    </section>
  );
}

export default QuestionList;
