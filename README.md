# Rocket Maths - Web App

A mental maths web application built in React that helps kids improve thier mental maths abilty

## Demo

![Rocket Maths Demo](https://github.com/joelm-code/rocket-maths/blob/main/devNotes/images/rocket-maths-version-2.gif)

**Phase 1:**

-   Calculator like app that takes you through differnet levels of mental math

**Phase 2:**

-   An interactive codeAcademy like web application for math that takes you through a series of stories based math simulations that you can solve

## Quiz State

The state(source of truth) for the quiz, stored in the App component

-   question: An array to hold the questions generated by logic
-   answerDisplay:
-   answerCorrect:
-   level:

## Components structure:

App (React)

-   DisplayQuestion
-   DisplayAnswer
-   Keypad

logic (Javascript)

-   logic
-   updateAnswerDisplay
-   buildQuestion

### App:

The parent component that holds the state Quiz.

-   Calls the TestLogic function based on inputs recived from keypad

### DisplayQuestion:

-   Takes the state {question} as props and displays the question

### DisplayAnswer:

-   Takes the state {displayAnswer} as props and displays the answer

### Keypad:

-   Takes the state { } as props
-   Listens for onClick and returns the keyValue back to App

### Logic:

-   Recives the entire current state as an object
-   Check if Answer is correct
-   Updates Level
-   Build a question & Update a question
-   Set up the Answer

## Features to be added:

1. Type your answer from anywhere on the screen
2. Show a progress bar ( answer 10 correct to move to next level)
3. Create differnet levels and difficulty
4. Achivement page to display your achivements
5. An animation for sucessfully completing a level

## Reference:

[Flexbox Froggy](https://flexboxfroggy.com/)

## Design Roadmap

### Left container ( story + input )

1. Naviagte to different levels
2. Input component

### Right Contiainer ( output)

1. Output container with graphic elements

## Future Roadmap:

1. Self learning LMS CodeAcademy/freeCodeCamp style
2. Math Simulation based learning games like

-   Bulid a lemonade stand
-   Running an apple store
