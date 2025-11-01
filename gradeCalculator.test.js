// gradeCalculator.test.js
const calculateGrade = require('./gradeCalculator');

describe('calculateGrade', () => {
  test('should return A for a high score', () => {
    expect(calculateGrade(95)).toBe('A');
  });

  test('should return B for a good score', () => {
    expect(calculateGrade(85)).toBe('B');
  });

  test('should return C for an average score', () => {
    expect(calculateGrade(75)).toBe('C');
  });

  test('should return E for a low score', () => {
    expect(calculateGrade(50)).toBe('E');
  });

  test('should handle invalid negative scores', () => {
    expect(calculateGrade(-10)).toBe('Invalid Score');
  });

  // --- Tambahan boundary & invalid tests ---
  test('should return A for a score of exactly 90 (boundary)', () => {
    expect(calculateGrade(90)).toBe('A');
  });

  test('should return B for a score of exactly 80 (boundary)', () => {
    expect(calculateGrade(80)).toBe('B');
  });

  test('should return D for a score of 65', () => {
    expect(calculateGrade(65)).toBe('D');
  });

  test('should handle invalid scores over 100', () => {
    expect(calculateGrade(101)).toBe('Invalid Score');
  });
});
