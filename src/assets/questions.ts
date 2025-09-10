export type QuestionProps = {
  question: string;
  answer: string[];
  correct: number;
};

export type QuestionsProps = {
  questions: QuestionProps[];
};

export const questions = [
  {
    question:
      "Which hook is used for managing state in a functional component?",
    answer: ["useEffect", "useState", "useReducer", "useContext"],
    correct: 1,
  },
  {
    question:
      "Which hook lets you perform side effects in a functional component?",
    answer: ["useMemo", "useCallback", "useEffect", "useRef"],
    correct: 2,
  },
  {
    question:
      "Which hook is used to memoize a function to prevent unnecessary re-renders?",
    answer: ["useState", "useMemo", "useCallback", "useReducer"],
    correct: 2,
  },
  {
    question:
      "Which hook returns a mutable ref object that persists across renders?",
    answer: ["useRef", "useState", "useEffect", "useReducer"],
    correct: 0,
  },
  {
    question:
      "Which hook provides a way to share state across the component tree without prop drilling?",
    answer: ["useReducer", "useContext", "useMemo", "useCallback"],
    correct: 1,
  },
  {
    question:
      "Which hook allows you to optimize expensive calculations and recompute them only when dependencies change?",
    answer: ["useState", "useMemo", "useEffect", "useRef"],
    correct: 1,
  },
  {
    question:
      "Which hook is commonly used to manage complex state logic with multiple actions?",
    answer: ["useReducer", "useState", "useEffect", "useContext"],
    correct: 0,
  },
  {
    question:
      "Which hook is useful for skipping function re-creation between renders but memoizes a **value**?",
    answer: ["useCallback", "useMemo", "useEffect", "useReducer"],
    correct: 1,
  },
];
