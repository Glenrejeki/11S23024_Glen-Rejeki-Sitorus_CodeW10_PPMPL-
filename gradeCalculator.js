// gradeCalculator.js
function calculateGrade(score) {
if (score < 0 || score > 100) {
return 'Invalid Score';
}
if (score >= 90) {
return 'A';
}
if (score >= 80) {
return 'B';
}
if (score >= 70) {
return 'C';
}
if (score >= 60) {
return 'D';
}
return 'E';
}
module.exports = calculateGrade;