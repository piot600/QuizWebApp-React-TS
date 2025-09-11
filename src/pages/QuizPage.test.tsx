import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import QuizPage from "./QuizPage";
import { questions } from "../assets/questions";

describe("QuizPage integration", () => {
  it("should run through the full quiz flow", () => {
    //HomeScreen
    render(<QuizPage questions={questions} />);
    expect(screen.getByText("START QUIZ")).toBeInTheDocument();
    fireEvent.click(screen.getByText("START QUIZ"));

    //QuizScreen
    expect(
      screen.getByText(new RegExp(questions[0].question, "i"))
    ).toBeInTheDocument();
    const options = screen.getAllByRole("radio");
    fireEvent.click(options[questions[0].correct]);
    fireEvent.click(screen.getByText("next"));

    expect(
      screen.getByText(new RegExp(questions[1].question, "i"))
    ).toBeInTheDocument();

    for (let i = 1; i < questions.length; i++) {
      const opts = screen.getAllByRole("radio");
      fireEvent.click(opts[questions[i].correct]);
      fireEvent.click(screen.getByText("next"));
    }

    //ResultPage.tsx
    expect(screen.getByText("Your Score")).toBeInTheDocument();
    expect(
      screen.getByText(`${questions.length}/${questions.length}`)
    ).toBeInTheDocument();
    fireEvent.click(screen.getByText("Home Page"));

    expect(screen.getByText("START QUIZ")).toBeInTheDocument();
  });
});
