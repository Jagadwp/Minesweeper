# 🧨 Minesweeper Console Game

This is a simple **console-based Minesweeper** game built with JavaScript. It follows clean architecture principles and emphasizes **separation of concerns**, making the codebase clean, testable, and maintainable.

---

## 📁 Project Structure

| Module/File       | Responsibility                                        |
|-------------------|--------------------------------------------------------|
| `GameApp`         | The entry point that glues all components together     |
| `GameService`     | Core game logic and flow control                       |
| `GameConfig`      | Holds configuration like board size and mine count     |
| `Cell`            | Represents a single cell on the board                  |
| `Board`           | Manages board creation, mine placement, and cell logic|
| `InputService`    | Handles and validates user input from the console      |

---

## ▶️ How to Run the Game

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Jagadwp/Minesweeper.git
   cd Minesweeper
   

