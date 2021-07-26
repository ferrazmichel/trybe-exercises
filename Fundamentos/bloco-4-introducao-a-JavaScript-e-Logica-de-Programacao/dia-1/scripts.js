let a = 5000.00;

if (a <= 1556.94) {
    aINSS = a*0.08;
} else if (a <= 2594.92) {
    aINSS = a*0.09;
} else if (a <= 5189.82) {
    aINSS = a*0.11;
} else if (a > 5189.82) {
    aINSS = 570.88;
}  
aBase = a - aINSS;

if (aBase <= 1903.98) {
    aLiq = aBase;
} else if (aBase <= 2826.65) {
    aLiq = (aBase*0.075) - 142.80;
} else if (aBase <= 3751.05) {
    aLiq = (aBase*0.15) - 354.80;
} else if (aBase <= 4664.68) {
    aLiq = (aBase*0.225) - 636.13;
} else {
    aLiq = (aBase*0.275) - 869.36;
}
console.log(aBase - aLiq);
