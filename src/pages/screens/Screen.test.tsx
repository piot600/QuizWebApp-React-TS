import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { HomeScreen } from "./HomeScreen";
import { QuizScreen } from "./QuizScreen";
import { ResultScreen } from "./ResultScreen";
import { questions } from "../../assets/questions";

describe("HomeScreen", () => {
  it("calls onStart when button is clicked", () => {
    const onStart = vi.fn();
    render(<HomeScreen onStart={onStart} />);
    fireEvent.click(screen.getByText("START QUIZ"));
    expect(onStart).toHaveBeenCalled();
  });
});

describe("QuizScreen", () => {
  it("renders question and answers", () => {
    const onConfirm = vi.fn();
    render(
      <QuizScreen
        currentQuestion={0}
        onConfirm={onConfirm}
        questions={questions}
      />
    );
    expect(screen.getByText(/Question/i)).toBeInTheDocument();
    expect(screen.getAllByRole("radio").length).toBeGreaterThan(0);
  });
});

describe("ResultScreen", () => {
  it("shows score and percentage", () => {
    const onReset = vi.fn();
    render(<ResultScreen score={2} onReset={onReset} questions={questions} />);
    expect(screen.getByText("Your Score")).toBeInTheDocument();
    expect(screen.getByText(`2/${questions.length}`)).toBeInTheDocument();
    expect(
      screen.getByText(`${(2 / questions.length) * 100}%`)
    ).toBeInTheDocument();
  });
});
