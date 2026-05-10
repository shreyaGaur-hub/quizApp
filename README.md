# 🧠 Simple Quiz App

A clean, interactive browser-based quiz application built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

---

## 📸 Features

- **Multiple choice questions** with four answer options each
- **Answer selection highlighting** — your pick is visually marked before confirming
- **Score summary** with contextual feedback (perfect score, good job, or try again)
- **Quiz analysis view** — review every question with your answer vs. the correct one, color-coded in green/red
- **Restart / Play Again** button to retake the quiz from scratch
- Fully responsive layout, works on desktop and mobile

---

## 🗂️ Project Structure

```
quiz-app/
├── index.html     # App markup and layout
├── style.css      # Styling and theme
└── script.js      # Quiz logic and interactivity
```

---

## 🎮 How It Works

1. A question is displayed with four answer buttons
2. Click an answer to select it (highlighted in blue border)
3. Hit **Next** to move to the next question
4. After the last question, your **score** is shown with a message
5. Click **View Analysis** to see a breakdown of every question — what you answered and what was correct
6. Click **Play Again** or **Restart Quiz** to reset and go again

---

## ➕ Adding Your Own Questions

Questions live in the `questions` array at the top of `script.js`. Each entry follows this structure:

```js
{
    question: "Your question here?",
    answers: [
        { text: "Wrong answer", correct: false },
        { text: "Right answer", correct: true },
        { text: "Wrong answer", correct: false },
        { text: "Wrong answer", correct: false }
    ]
}
```

Just add more objects to the array and the quiz will include them automatically.

---

## 🛠️ Built With

- HTML5
- CSS3
- Vanilla JavaScript (DOM manipulation, event handling)

---

## 🙏 Acknowledgements

- Initial quiz structure inspired by [Easy Tutorials](https://www.youtube.com/@EasyTutorialsVideo)
- Analysis and answer-tracking features added with the help of Gemini
