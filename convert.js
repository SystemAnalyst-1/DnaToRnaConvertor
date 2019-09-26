/* 
haveOnlyCertainLetters(str, reverse = false) is validating of a string, if string
is not correct, it`ll return -1.
dnaToRna(str) function is converting DNA to RNA. It'll return
converted string or -1 if it was error.
rnaToDna(str) function is converting RNA to DNA. It'll return
converted string or -1 if it was error.
*/

const DNA = ["G", "C", "T", "A"];
const RNA = ["C", "G", "A", "U"];

//validation of a string
export const haveOnlyCertainLetters = (str, reverse = false) => {
  const regexDNA = /^[GCTAgcta]+$/;
  const regexRNA = /^[GCUAgcua]+$/;
  let isValid = reverse ? regexRNA.test(str) : regexDNA.test(str);
  if (!isValid) {
    return -1;
  } else {
    return 1;
  }
};
//convert dnaToRna
export const dnaToRna = str => {
  if (haveOnlyCertainLetters(str) === 1) {
    let newStr = str.toUpperCase().split("");
    for (let i = 0; i < newStr.length; i++) {
      let position = DNA.indexOf(newStr[i]);
      if (position > -1) newStr[i] = RNA[position];
    }
    return newStr.join("");
  } else {
    return -1;
  }
};
//convert rnaToDna
export const rnaToDna = str => {
  if (haveOnlyCertainLetters(str, true) === 1) {
    let newStr = str.toUpperCase().split("");
    for (let i = 0; i < newStr.length; i++) {
      let position = RNA.indexOf(newStr[i]);
      if (position > -1) newStr[i] = DNA[position];
    }

    return newStr.join("");
  } else {
    return -1;
  }
};
