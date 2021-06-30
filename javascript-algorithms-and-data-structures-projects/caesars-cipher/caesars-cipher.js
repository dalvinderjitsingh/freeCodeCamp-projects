function rot13(str) {
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var alphaRot13 ="NOPQRSTUVWXYZABCDEFGHIJKLM";

  var nonAlpha = /[^a-zA-Z0-9]+/g;
  
  var cipher = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(nonAlpha) ) {
        cipher += str[i];
    }
    for (let j = 0; j < alpha.length; j++) {
      if (str[i] == alpha[j]) {
        cipher += alphaRot13[j];
      }
    }
  }

  return cipher;
}

rot13("SERR PBQR PNZC");