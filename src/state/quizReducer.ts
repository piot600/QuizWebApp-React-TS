import { questions } from "../assets/questions";

type State = {
  stage: "home" | "quiz" | "result";
  currentQuestion: number;
  score: number;
};

type Action =
  | { type: "START" }
  | { type: "ANSWER"; answer: number | null }
  | { type: "RESET" };

export const initialState: State = {
  stage: "home",
  currentQuestion: 0,
  score: 0,
};

export default function quizReducer(state: State, action: Action): State {
  switch (action.type) {
    case "START": {
      return { stage: "quiz", currentQuestion: 0, score: 0 };
    }
    case "ANSWER": {
      const isCorrect =
        action.answer !== null &&
        action.answer === questions[state.currentQuestion].correct;

      const nextQuestion = state.currentQuestion + 1;
      if (nextQuestion < questions.length) {
        return {
          ...state,
          currentQuestion: state.currentQuestion + 1,
          score: state.score + (isCorrect ? 1 : 0),
        };
      } else {
        return {
          ...state,
          stage: "result",
          score: state.score + (isCorrect ? 1 : 0),
        };
      }
    }
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
