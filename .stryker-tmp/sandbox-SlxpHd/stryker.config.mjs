// @ts-nocheck
// 
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'jest',
  coverageAnalysis: 'perTest',

  // ⬇️ Tambahkan ini: target file yang ingin dimutasi
  mutate: ['gradeCalculator.js'], // atau ['src/gradeCalculator.js'] jika filenya di src/

  // ⬇️ (Opsional, tapi membantu jika pola test tidak terdeteksi)
  jest: {
    config: {
      testEnvironment: 'node',
      testMatch: ['**/*.test.js'],
    },
    enableFindRelatedTests: true
  },

  // (Opsional) target skor
  thresholds: { high: 100, low: 100, break: 100 }
};
export default config;
