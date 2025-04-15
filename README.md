# 🧨 Minesweeper Console Game

This is a simple **console-based Minesweeper** game built with **JavaScript**, running on **Node.js**. It follows **clean architecture principles** and emphasizes **separation of concerns**, making the codebase clean, testable, and maintainable.

Unit tests are written using **[Jest](https://jestjs.io/)** to ensure code correctness and reliability.

---

## 📁 Project Structure

| Module/File       | Responsibility                                        |
|-------------------|--------------------------------------------------------|
| `GameApp`         | The entry point that glues all components together     |
| `GameService`     | Core game logic and flow control                       |
| `Cell`            | Represents a single cell on the board                  |
| `Board`           | Manages board creation, mine placement, and cell logic|
| `InputService`    | Handles and validates user input from the console      |

---

## ▶️ How to Run the Game
```bash
git clone https://github.com/Jagadwp/Minesweeper.git
cd Minesweeper
npm install
npm start
```
### 🎮 Game Display
![image](https://github.com/user-attachments/assets/d19ca3c9-a716-42b5-bb3f-abca64120eb8)
---

## ⌨️ Input Format

The game expects input in the following format:
Where:

- `x`: row number (starting from `0`)
- `y`: column number (starting from `0`)

### ✅ Valid Input Examples:

- `0,0` → Top-left cell
- `2,3` → Row 2, Column 3
- `4,4` → Bottom-right cell (on a 5x5 board)
---
## 🔨 How to Run Unit Test
```bash
npm test
```
---
## 👨‍💻 Author
Jagadwp
