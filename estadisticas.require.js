let estadisticas = require("estadisticas");
let values = [12, 45, 67, 87, 34, 2, 7, 23];
let stdDev = estadisticas.standarDeviation(values);
let avg = estadisticas.average(values);
console.log(avg, stdDev);