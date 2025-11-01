// gradeCalculator.test.js
const calculateGrade = require('./gradeCalculator');

describe('calculateGrade', () => {
  // 🏅 Tes Kasus Normal (Happy Path)
  describe('Happy Path: Should return correct grade for typical scores', () => {
    test('should return A for a high score (e.g., 95)', () => {
      expect(calculateGrade(95)).toBe('A');
    });
    test('should return B for a good score (e.g., 85)', () => {
      expect(calculateGrade(85)).toBe('B');
    });
    test('should return C for an average score (e.g., 75)', () => {
      expect(calculateGrade(75)).toBe('C');
    });
    test('should return D for a below average score (e.g., 65)', () => {
      expect(calculateGrade(65)).toBe('D');
    });
    test('should return E for a low score (e.g., 50)', () => {
      expect(calculateGrade(50)).toBe('E');
    });
  });

  // 📐 Tes Batas (Boundary Tests)
  describe('Boundary Tests: Should return correct grade at grade limits', () => {
    test('should return E for score of exactly 0', () => {
      expect(calculateGrade(0)).toBe('E');
    });
    test('should return D for score of exactly 60', () => {
      expect(calculateGrade(60)).toBe('D');
    });
    test('should return C for score of exactly 70', () => {
      expect(calculateGrade(70)).toBe('C');
    });
    test('should return B for score of exactly 80', () => {
      expect(calculateGrade(80)).toBe('B');
    });
    test('should return A for score of exactly 90', () => {
      expect(calculateGrade(90)).toBe('A');
    });
    test('should return A for score of exactly 100', () => {
      expect(calculateGrade(100)).toBe('A');
    });
  });

  // ⚠️ Tes Tidak Valid (Invalid Input)
  describe('Invalid Input Tests', () => {
    // Nilai di luar 0–100
    test('should return "Invalid Score" for scores over 100', () => {
      expect(calculateGrade(101)).toBe('Invalid Score');
    });
    test('should return "Invalid Score" for negative scores', () => {
      expect(calculateGrade(-10)).toBe('Invalid Score');
    });

    // 🔹 Kasus baru: Non-numerik / non-finite
    test.each([
      '90',          // string
      NaN,           // NaN
      undefined,     // undefined
      null,          // null
      true,          // boolean
      {},            // object
      [],            // array
      Infinity,      // +Infinity
      -Infinity      // -Infinity
    ])('returns "Invalid Input" for %p', (val) => {
      expect(calculateGrade(val)).toBe('Invalid Input');
    });
  });
});
