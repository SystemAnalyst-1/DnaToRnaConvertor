/* 
isValid(str, reverse = false) is validating of a string.
dnaToRna(str) function is converting DNA to RNA. It'll return
converted string or -1 if it was error.
rnaToDna(str) function is converting RNA to DNA. It'll return
converted string or -1 if it was error.
*/

const DNA = { G: "C", C: "G", T: "A", A: "U", g: "C", c: "G", t: "A", a: "U" };
const RNA = { G: "C", C: "G", U: "A", A: "T", g: "C", c: "G", u: "A", a: "T" };
const regexDNA = /^[GCTAgcta]+$/;
const regexRNA = /^[GCUAgcua]+$/;

//validation of a string
export const isValid = (str, reverse = false) => {
  return reverse ? regexRNA.test(str) : regexDNA.test(str);
};
//convert dnaToRna
export const dnaToRna = str => {
  return isValid(str) ? str.replace(/[GCTAgcta]/g, m => DNA[m]) : -1;
};
//convert rnaToDna
export const rnaToDna = str => {
  return isValid(str, true) ? str.replace(/[GCUAgcua]/g, m => RNA[m]) : -1;
};
