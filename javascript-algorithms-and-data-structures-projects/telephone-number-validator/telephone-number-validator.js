function telephoneCheck(str) {
  if (str.match(/[^\d\s-()]+/g)) {
    return false;
  }

  var dashCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].indexOf("-") !== -1) {
      dashCount++;
    }
    if (dashCount > 2) {
    return false;
    }
  }

  var strWithoutSpace = str.split(" ").join("");

  var numOnlyStr = str.split(/[\D+]/g).join("");

  if (numOnlyStr.length == 10 || numOnlyStr.length == 11 && numOnlyStr[0] == 1) {
    if (strWithoutSpace.indexOf("(") !== -1 || strWithoutSpace.indexOf(")") !== -1) {
      if (strWithoutSpace.indexOf("(") == 0 && strWithoutSpace.indexOf(")") == 4) {
        return true;
      } else if (strWithoutSpace.indexOf("(") == 1 && strWithoutSpace.indexOf(")") == 5) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  return false;
}

telephoneCheck("555-555-5555");