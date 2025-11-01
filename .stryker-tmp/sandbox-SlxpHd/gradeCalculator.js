// @ts-nocheck
// gradeCalculator.js
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
const calculateGrade = require('./gradeCalculator');
describe(stryMutAct_9fa48("0") ? "" : (stryCov_9fa48("0"), 'calculateGrade'), () => {
  if (stryMutAct_9fa48("1")) {
    {}
  } else {
    stryCov_9fa48("1");
    // 🏅 Tes Kasus Normal (Happy Path)
    describe(stryMutAct_9fa48("2") ? "" : (stryCov_9fa48("2"), 'Happy Path: Should return correct grade for typical scores'), () => {
      if (stryMutAct_9fa48("3")) {
        {}
      } else {
        stryCov_9fa48("3");
        test(stryMutAct_9fa48("4") ? "" : (stryCov_9fa48("4"), 'should return A for a high score (e.g., 95)'), () => {
          if (stryMutAct_9fa48("5")) {
            {}
          } else {
            stryCov_9fa48("5");
            expect(calculateGrade(95)).toBe(stryMutAct_9fa48("6") ? "" : (stryCov_9fa48("6"), 'A'));
          }
        });
        test(stryMutAct_9fa48("7") ? "" : (stryCov_9fa48("7"), 'should return B for a good score (e.g., 85)'), () => {
          if (stryMutAct_9fa48("8")) {
            {}
          } else {
            stryCov_9fa48("8");
            expect(calculateGrade(85)).toBe(stryMutAct_9fa48("9") ? "" : (stryCov_9fa48("9"), 'B'));
          }
        });
        test(stryMutAct_9fa48("10") ? "" : (stryCov_9fa48("10"), 'should return C for an average score (e.g., 75)'), () => {
          if (stryMutAct_9fa48("11")) {
            {}
          } else {
            stryCov_9fa48("11");
            expect(calculateGrade(75)).toBe(stryMutAct_9fa48("12") ? "" : (stryCov_9fa48("12"), 'C'));
          }
        });
        test(stryMutAct_9fa48("13") ? "" : (stryCov_9fa48("13"), 'should return D for a below average score (e.g., 65)'), () => {
          if (stryMutAct_9fa48("14")) {
            {}
          } else {
            stryCov_9fa48("14");
            expect(calculateGrade(65)).toBe(stryMutAct_9fa48("15") ? "" : (stryCov_9fa48("15"), 'D'));
          }
        });
        test(stryMutAct_9fa48("16") ? "" : (stryCov_9fa48("16"), 'should return E for a low score (e.g., 50)'), () => {
          if (stryMutAct_9fa48("17")) {
            {}
          } else {
            stryCov_9fa48("17");
            expect(calculateGrade(50)).toBe(stryMutAct_9fa48("18") ? "" : (stryCov_9fa48("18"), 'E'));
          }
        });
      }
    });

    // 📐 Tes Batas (Boundary Tests)
    describe(stryMutAct_9fa48("19") ? "" : (stryCov_9fa48("19"), 'Boundary Tests: Should return correct grade at grade limits'), () => {
      if (stryMutAct_9fa48("20")) {
        {}
      } else {
        stryCov_9fa48("20");
        test(stryMutAct_9fa48("21") ? "" : (stryCov_9fa48("21"), 'should return A for score of exactly 90 (lower boundary for A)'), () => {
          if (stryMutAct_9fa48("22")) {
            {}
          } else {
            stryCov_9fa48("22");
            expect(calculateGrade(90)).toBe(stryMutAct_9fa48("23") ? "" : (stryCov_9fa48("23"), 'A'));
          }
        });
        test(stryMutAct_9fa48("24") ? "" : (stryCov_9fa48("24"), 'should return B for score of exactly 80 (lower boundary for B)'), () => {
          if (stryMutAct_9fa48("25")) {
            {}
          } else {
            stryCov_9fa48("25");
            expect(calculateGrade(80)).toBe(stryMutAct_9fa48("26") ? "" : (stryCov_9fa48("26"), 'B'));
          }
        });
        test(stryMutAct_9fa48("27") ? "" : (stryCov_9fa48("27"), 'should return C for score of exactly 70 (lower boundary for C)'), () => {
          if (stryMutAct_9fa48("28")) {
            {}
          } else {
            stryCov_9fa48("28");
            expect(calculateGrade(70)).toBe(stryMutAct_9fa48("29") ? "" : (stryCov_9fa48("29"), 'C'));
          }
        });
        test(stryMutAct_9fa48("30") ? "" : (stryCov_9fa48("30"), 'should return D for score of exactly 60 (lower boundary for D)'), () => {
          if (stryMutAct_9fa48("31")) {
            {}
          } else {
            stryCov_9fa48("31");
            expect(calculateGrade(60)).toBe(stryMutAct_9fa48("32") ? "" : (stryCov_9fa48("32"), 'D'));
          }
        });
        test(stryMutAct_9fa48("33") ? "" : (stryCov_9fa48("33"), 'should return E for score of exactly 0 (lowest boundary for E)'), () => {
          if (stryMutAct_9fa48("34")) {
            {}
          } else {
            stryCov_9fa48("34");
            expect(calculateGrade(0)).toBe(stryMutAct_9fa48("35") ? "" : (stryCov_9fa48("35"), 'E'));
          }
        });
      }
    });

    // ⚠️ Tes Tidak Valid (Invalid Input Tests)
    describe(stryMutAct_9fa48("36") ? "" : (stryCov_9fa48("36"), 'Invalid Input Tests: Should handle scores outside 0-100 range'), () => {
      if (stryMutAct_9fa48("37")) {
        {}
      } else {
        stryCov_9fa48("37");
        test(stryMutAct_9fa48("38") ? "" : (stryCov_9fa48("38"), 'should return "Invalid Score" for scores over 100 (e.g., 101)'), () => {
          if (stryMutAct_9fa48("39")) {
            {}
          } else {
            stryCov_9fa48("39");
            expect(calculateGrade(101)).toBe(stryMutAct_9fa48("40") ? "" : (stryCov_9fa48("40"), 'Invalid Score'));
          }
        });
        test(stryMutAct_9fa48("41") ? "" : (stryCov_9fa48("41"), 'should return "Invalid Score" for negative scores (e.g., -10)'), () => {
          if (stryMutAct_9fa48("42")) {
            {}
          } else {
            stryCov_9fa48("42");
            expect(calculateGrade(stryMutAct_9fa48("43") ? +10 : (stryCov_9fa48("43"), -10))).toBe(stryMutAct_9fa48("44") ? "" : (stryCov_9fa48("44"), 'Invalid Score'));
          }
        });
      }
    });
  }
});