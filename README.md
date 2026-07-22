# 🎲 Prisoner's Dilemma Simulator

A simple web-based simulation of the **Prisoner's Dilemma**, developed with **HTML**, **CSS**, and **JavaScript**. The project simulates multiple rounds between two players whose decisions are randomly generated, displaying the outcome of each round and cumulative statistics.

## 📖 About

The Prisoner's Dilemma is one of the most famous problems in game theory, demonstrating why two rational individuals may fail to cooperate even when cooperation would benefit both.

This project provides an interactive visualization of the game by allowing the user to select the number of rounds and simulate matches between two players.

## ✨ Features

- Adjustable number of rounds (5–50)
- Randomized player decisions
- Round-by-round visual results
- Score calculation based on the classic Prisoner's Dilemma payoff matrix
- Cumulative player statistics
- Light/Dark mode toggle
- No external libraries or dependencies

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (Vanilla)

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/prisonerDilema.git
```

### Run the project

Simply open `main.html` in your preferred web browser.

No installation or build process is required.

## 🎮 How It Works

1. Select the desired number of rounds using the slider.
2. Click **Start**.
3. During each round:
   - Each player randomly chooses to **Cooperate** or **Defect**.
   - Scores are awarded according to the payoff matrix.
4. At the end of the simulation, cumulative statistics for both players are displayed.

## 📊 Payoff Matrix

| Player A | Player B | A Points | B Points |
|----------|----------|---------:|---------:|
| Cooperate | Cooperate | 3 | 3 |
| Cooperate | Defect | 0 | 5 |
| Defect | Cooperate | 5 | 0 |
| Defect | Defect | 1 | 1 |

## 📁 Project Structure

```
.
├── main.html      # Application interface
├── style.css      # Styling and dark mode
└── script.js      # Game logic
```

## 🔍 Current Implementation

The simulator currently uses a simple random strategy:

- 50% chance to cooperate
- 50% chance to defect

Players have no memory of previous rounds, making every decision independent.

## 💡 Possible Improvements

- Implement classic Prisoner's Dilemma strategies:
  - Always Cooperate
  - Always Defect
  - Tit for Tat
  - Grim Trigger
  - Random Strategy (current)
- Custom player strategies
- Probability configuration
- Charts for score evolution
- Tournament mode
- Match history
- Export results
- Responsive mobile interface

## 📚 Educational Purpose

This project was created as a study exercise to practice:

- JavaScript fundamentals
- DOM manipulation
- Game logic
- Object-oriented programming concepts
- Event handling
- Basic UI development

## 👨‍💻 Author

**Rodrigo Braga**

- GitHub: https://github.com/rodrigopbraga

## 📄 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.
