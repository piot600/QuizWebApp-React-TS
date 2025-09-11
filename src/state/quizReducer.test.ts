import { describe, expect, it } from "vitest";
import quizReducer, { initialState, type State } from "./quizReducer";
import { questions } from "../assets/questions";

describe("quizReducer", () => {
  it("should start the quiz when START action is dispatched", () => {
    const newState = quizReducer(initialState, { type: "START" });
    expect(newState.stage).toBe("quiz");
    expect(newState.currentQuestion).toBe(0);
    expect(newState.score).toBe(0);
  });

  it("should go to next question on answer", () => {
    const state: State = { stage: "quiz", currentQuestion: 0, score: 0 };
    const newState = quizReducer(state, {
      type: "ANSWER",
      answer: 0,
    });
    expect(newState.currentQuestion).toBe(1);
    expect(newState.stage).toBe("quiz");
  });

  it("should finish the quiz and go to result stage on last question", () => {
    const state: State = {
      stage: "quiz",
      currentQuestion: questions.length - 1,
      score: 1,
    };
    const correctAnswer = questions[state.currentQuestion].correct;
    const newState = quizReducer(state, {
      type: "ANSWER",
      answer: correctAnswer,
    });
    expect(newState.stage).toBe("result");
    expect(newState.currentQuestion).toBe(questions.length - 1);
    expect(newState.score).toBe(2);
  });

  it("should reset to initialState on RESET action", () => {
    const state: State = { stage: "result", currentQuestion: 2, score: 5 };
    const newState = quizReducer(state, { type: "RESET" });
    expect(newState).toEqual(initialState);
  });
});
