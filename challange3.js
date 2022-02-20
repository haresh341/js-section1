// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

const dolphinsMatch1Score = 96;
const dolphinsMatch2Score = 108;
const dolphinsMatch3Score = 89;

const dolphinsAverageScore =
  (dolphinsMatch1Score + dolphinsMatch2Score + dolphinsMatch3Score) / 3;

const koalasMatch1Score = 88;
const koalasMatch2Score = 91;
const koalasMatch3Score = 110;

const koalasAverageScore =
  (koalasMatch1Score + koalasMatch2Score + koalasMatch3Score) / 3;

if (dolphinsAverageScore > koalasAverageScore) {
  console.log("dolphins have won");
} else if (koalasAverageScore > dolphinsAverageScore) {
  console.log("koalas have won");
} else {
  console.log("Match draws");
}
