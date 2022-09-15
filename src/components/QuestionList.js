import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, showQuestionData] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => {
        // questions = data
        showQuestionData(data)
      });
  }, [])


  //callback function for a new question
  function handleUpdatedQuestion(updatedQuestion) {
    // console.log(updatedQuestion);
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    });
    showQuestionData(updatedQuestions)
  }

  //callback function for deleted item
  function handleDeleteQuestion(deletedQuestion) {
    // console.log("Deleted", deletedQuestion)
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    showQuestionData(updatedQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questions ? questions.map((question) => {
          return (
            <QuestionItem
              key={question.id}
              question={question}
              onUpdateQuestion={handleUpdatedQuestion}
              onDeleteQuestion={handleDeleteQuestion}
            />
          )
        }) : null}
      </ul>
    </section>
  );
}


export default QuestionList;

   // <QuestionForm 
      //   key={question.key}
      //   addQuestion={handleAddQuestion} />