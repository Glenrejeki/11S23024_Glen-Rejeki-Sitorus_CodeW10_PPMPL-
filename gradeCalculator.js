// gradeCalculator.js
function calculateGrade(score) {
  // Tangani input non-number / non-finite
  if (typeof score !== 'number' || !Number.isFinite(score)) {
    return 'Invalid Input';
  }

  // Validasi rentang
  if (score < 0 || score > 100) {
    return 'Invalid Score';
  }

  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'E';
}
module.exports = calculateGrade;
