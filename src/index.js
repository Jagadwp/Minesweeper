import { GameApp } from './app/GameApp.js';

const app = new GameApp();
app.start();


// Documentation:
// GameApp – The entry point to glue everything together
// GameService – Core game logic
// GameConfig – Configuration data holder
// Cell – Single cell abstraction
// Board – Game board logic
// InputService – Handles and validates user input