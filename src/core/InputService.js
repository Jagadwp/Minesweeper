export class InputService {
  static parseCoordinates(input) {
    /*  Explanation of the pattern:
      ^            → Start of the string
      \s*          → Zero or more whitespace characters
      \d+          → One or more digits (first coordinate)
      \s*          → Zero or more whitespace characters
      ,            → A literal comma separating the coordinates
      \s*          → Zero or more whitespace characters
      \d+          → One or more digits (second coordinate)
      \s*          → Zero or more whitespace characters (optional at end)
    */
   
    const pattern = /^\s*\d+\s*,\s*\d+\s*$/;
    if (!pattern.test(input)) return [-1, -1];

    const [x, y] = input.split(',').map(v => parseInt(v.trim(), 10));
    return [x, y];
  }
}
