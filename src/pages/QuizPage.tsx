import { useReducer } from "react";
import quizReducer, { initialState } from "../state/quizReducer";
import { HomeScreen } from "./screens/HomeScreen";
import { QuizScreen } from "./screens/QuizScreen";
import { ResultScreen } from "./screens/ResultScreen";
import type { QuestionsProps } from "../assets/questions";

function QuizPage({ questions }: QuestionsProps) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  function handleStart() {
    dispatch({ type: "START" });
  }

  function handleReset() {
    dispatch({ type: "RESET" });
  }

  function confirmAnswer(value: number | null) {
    dispatch({ type: "ANSWER", answer: value });
  }

  if (state.stage === "home") {
    return <HomeScreen onStart={handleStart} />;
  } else if (state.stage === "quiz") {
    return (
      <QuizScreen
        currentQuestion={state.currentQuestion}
        onConfirm={confirmAnswer}
        questions={questions}
      />
    );
  } else {
    return (
      <ResultScreen
        score={state.score}
        onReset={handleReset}
        questions={questions}
      />
    );
  }
}

export default QuizPage;
