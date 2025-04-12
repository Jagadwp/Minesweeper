// GameConfig.js
export class GameConfig {
  constructor(size, mines) {
    if (size <= 0 || mines <= 0 || mines >= size * size) {
      throw new Error('Invalid game configuration');
    }
    this.size = size;
    this.mines = mines;
  }

  toString() {
    return `Size: ${this.size} - Total Mines ${this.mines}`
  }
}
