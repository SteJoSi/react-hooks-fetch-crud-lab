import React from "react";

function QuestionItem({ question, onUpdateQuestion, onDeleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;
  console.log("question", question)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  //function that handles delete button
  function handleDeleteQuestionClick(e) {
    // console.log(question);
    e.preventDefault();

    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteQuestion(question))
  }

  //function to handle next question button PATCH
  function handleQuestionChange(e) {
    e.preventDefault();
    const newCorrectAnswer = e.target.value;

    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "correctIndex": newCorrectAnswer,
      }),
    })
    .then((r) => r.json())
    .then((updatedQuestion) => {
      onUpdateQuestion(updatedQuestion)
      });
    // console.log("updateQuestion:", updatedQuestion)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleQuestionChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteQuestionClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
