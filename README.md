# QuizWebApp-React-TS
Quiz Application with React and TS

Application contains:
Vite bundler

How to run app: **npm run dev**

![image alt](https://github.com/piot600/QuizWebApp-React-TS/blob/084af5bea32c2ed6b78635f89b123e711cab8fbb/src/assets/QuizAppUI.jpg)

Folders Structure:

src/
 ├─ App/
 │   └─ App.tsx          # główna aplikacja
 │   └─ App.module.css   
 ├─ assets/
 │   └─ questions.ts          # pytania quizu
 ├─ components/               
 │   └─ Question.tsx          # pojedyncze pytanie z radio buttonami
 │   └─ Question.module.css      
 ├─ pages/                    # całe ekrany / widoki
 │   ├─ screena/                    
 │       ├─ HomeScreen.tsx   
 │       ├─ QuizScreen.tsx 
 │       ├─ ResultScreen.tsx     
 │   └─ QuizPage.tsx 
 │   └─ QuizPage.module.css
 ├─ state/                    # logika stanu i reducer
 │   └─ quizReducer.ts

