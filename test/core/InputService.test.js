import { InputService } from '../../src/core/InputService.js';

describe('InputService', () => {
  it('should parse valid input correctly', () => {
    expect(InputService.parseCoordinates('2,3')).toEqual([2, 3]);
    expect(InputService.parseCoordinates('  0 , 1')).toEqual([0, 1]);
  });

  it('should return [-1, -1] on invalid input', () => {
    expect(InputService.parseCoordinates('abc')).toEqual([-1, -1]);
    expect(InputService.parseCoordinates('abc , def')).toEqual([-1, -1]);
    expect(InputService.parseCoordinates('2-3')).toEqual([-1, -1]);
    expect(InputService.parseCoordinates('2-3, 4-5')).toEqual([-1, -1]);
    expect(InputService.parseCoordinates('')).toEqual([-1, -1]);
  });  
});
