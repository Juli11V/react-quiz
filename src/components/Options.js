function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  const optionsArray = JSON.parse(question.options);

  return (
    <div className="options">
      {optionsArray.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOptionIndex
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
