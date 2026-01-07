# 🐍 Snake.io – Classic Snake Game (Vanilla JS)

A modern recreation of the classic **Snake game**, built entirely using **HTML, CSS, and Vanilla JavaScript**.
This project focuses on **clean game logic, state management, and DOM-based rendering** without using any external libraries or frameworks.

---

## 🚀 Live Demo

👉 `https://code-yashkumar.github.io/snake.io/`

---

## 🎮 Features

* Classic snake movement with keyboard controls (Arrow keys / WASD)
* Grid-based game board rendered using CSS Grid
* Real-time score tracking
* Persistent **High Score** using `localStorage`
* In-game timer (MM:SS format)
* Start & Restart game flow with modal UI
* Smooth gameplay loop using `setInterval`
* Clean UI with custom font and CSS variables

---

## 🛠️ Tech Stack

* **HTML5** – Semantic structure
* **CSS3** – Grid layout, custom properties, animations
* **Vanilla JavaScript** – Game logic & state management
* **LocalStorage API** – Persistent high score

---

## 🧠 Key Learnings

* Designing **game state** using plain JavaScript objects and arrays
* Separating **pure logic** (movement, collision) from **DOM rendering**
* Managing multiple intervals (game loop & timer) safely
* Handling mutations predictably (snake movement vs collision checks)
* Implementing persistent data using `localStorage`
* Building modal-based UI flows without libraries
* Writing scalable, readable JavaScript functions

---

## 📂 Project Structure

```
├── index.html
├── styles.css
├── script.js
└── assets/
    └── snake.otf
```

---

## 🎯 Controls

* **Arrow Keys / WASD** – Move the snake
* **Start Game** – Begin gameplay
* **Restart Game** – Reset game state

---

## 🧪 Game Logic Overview

* Snake movement is calculated by generating a **new head position**
* Collision checks (wall / food) are performed **before mutating state**
* Snake growth is controlled using a `grow` flag
* Rendering is done by clearing and repainting only required grid cells
* Time is tracked independently from the game loop

---

## 🔮 Future Improvements

* Mobile touch / swipe controls
* Self-collision detection
* Difficulty levels (speed scaling)
* Pause / resume functionality
* Sound effects

---

## 📜 License

This project is open-source and free to use for learning and experimentation.

---

### 🙌 Author

Built with ❤️ by **Yash Kumar**

---