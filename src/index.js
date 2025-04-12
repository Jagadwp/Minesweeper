// index.js (Entry Point)
import { GameApp } from './app/GameApp';

const size = 5;
const mines = 5;

const game = new GameApp(size, mines);
game.start();
