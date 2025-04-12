// InputService.js
export class InputService {
  static parseCoordinates(input, size) {
    const parts = input.split(',').map(x => x.trim());
    if (parts.length !== 2) {
      throw new Error('Input must be in format: x,y');
    }
    const x = parseInt(parts[0], 10);
    const y = parseInt(parts[1], 10);

    if (isNaN(x) || isNaN(y)) {
      throw new Error('Coordinates must be numbers');
    }

    if (x < 0 || y < 0 || x >= size || y >= size) {
      throw new Error('Coordinates out of bounds');
    }

    return { x, y };
  }
}
