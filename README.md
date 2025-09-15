# QuizWebApp-React-TS
Quiz Application with React and TS

Application contains:
Vite bundler

How to run app: **npm run dev**

![image alt](https://github.com/piot600/QuizWebApp-React-TS/blob/084af5bea32c2ed6b78635f89b123e711cab8fbb/src/assets/QuizAppUI.jpg)
![image alt](https://github.com/piot600/QuizWebApp-React-TS/blob/361d3e0b57678bb676cf987db7b1c2de3e1ae5b7/src/assets/ThemeContext.jpg)

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


v0.1
- add unit tests (quizReduces.test.ts, Screen.test.tsx(for (HomeScreen, QuizScreen, ResultScreen).tsx )
- add integration test (QuizPage.tsx for all flow)

v0.2
- add theme dark/light using useContext
