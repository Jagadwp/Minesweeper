export class InputService {
  static parseCoordinates(input) {
    const [x, y] = input.split(',').map(v => parseInt(v.trim()));
    return [x, y];
  }
}
